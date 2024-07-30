import { computed, defineComponent, inject, ref, shallowRef, watch } from 'vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { isArray, merge } from 'lodash-es';
import Empty from './empty';
import { basicProps } from './props';
import { computePx, unwrapInjected } from '../utils';
import { PALETTE_KEY } from '.';
import { Option } from '../types';
 use([
   CanvasRenderer,
   DatasetComponent,
   TransformComponent,
   TitleComponent,
   TooltipComponent,
   LegendComponent
 ]);
export interface KsgBaseChartExpose {
  getInstance: (typeof VChart)['chart']
}
export default defineComponent({
  components: { VChart },
  name: 'KsgBaseChart',
  inheritAttrs: false,
  props: basicProps,
  setup(props, { slots, expose, attrs }) {
    const isHasData = ref(true);
    const defaultPalette = inject(PALETTE_KEY, null);
    const realPalette = computed(() => props.palette || unwrapInjected(defaultPalette, null));
    const option = ref<Option | null>(null);
    const instanceRef = shallowRef<InstanceType<typeof VChart>>();

    function validataData() {
      isHasData.value = props.option?.dataset
        ? isArray(props.option.dataset)
          ? true
          : !!props.option?.dataset.source?.length
        : isArray(props.option.series)
        ? (isHasData.value = props.option.series.some((it) => it.data))
        : (isHasData.value = Reflect.has(props.option.series, 'data'));
    }

    watch(() => props.option, (value) => {
      if (value) {
        const legendTemp = {
          type: 'scroll',
          orient: 'horizontal',
          bottom: 'bottom'
        };
        // Determine if there is a value
        validataData();
        // 兼容初始化配置
        const computedOption = {
          ...props.option,
          legend: merge(legendTemp, props.option?.legend)
        };
        // 设置主题样式表
        realPalette.value && Reflect.set(computedOption, 'color', realPalette.value);
        option.value = computedOption;
      }
    }, { deep: true, immediate: true })

    const styless = computed(() => {
      return {
        height: computePx(props.height),
        width: computePx(props.width)
      };
    });

    expose({
      getInstance: () => instanceRef.value?.chart
    });

    const renderEmpty = () =>
      slots.default ? slots.default() : <Empty emptyText={props.emptyText} />;

    return () => (
      <div style={styless.value} class="ksgchart">
        {!isHasData.value && !props.loading ? renderEmpty() : (
          <v-chart
            updateOptions={{ notMerge: true }}
            {...props}
            {...attrs}
            ref={instanceRef}
            style={{ height: '100%', width: '100%' }}
            autoresize={props.autoresize}
            option={props.loading ? null : option.value}
            init-options={{ renderer: 'svg' }}
          />
        )}
      </div>
    );
  }
});