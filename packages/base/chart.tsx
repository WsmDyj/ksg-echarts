/*
 * @Author: wusimin 
 * @Date: 2024-06-26 16:16:58
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-22 17:51:53
 * @FilePath: /kwaida/packages/kwaida-charts/packages/base/chart.tsx
 * @Description: 基础组件
 */
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
import { isArray, isNumber, merge } from 'lodash-es';
import EmptyData from './emptyData';
import { basicProps } from './props';
import { unwrapInjected } from '../utils';
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
    const option = ref<Option>();
    const instanceRef = shallowRef<InstanceType<typeof VChart>>();

    watch(() => props.option, (value) => {
      if (value) {
        const legendTemp = {
          type: 'scroll',
          orient: 'horizontal',
          bottom: 'bottom'
        };
        // Determine if there is a value
        isHasData.value = props.option?.dataset
          ? isArray(props.option.dataset)
            ? true
            : !!props.option?.dataset.source?.length
          : false;
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
        height: isNumber(props.height) ? `${props.height}px` : props.height,
        width: isNumber(props.width) ? `${props.width}px` : props.width
      };
    });

    expose({
      getInstance: () => instanceRef.value?.chart
    });

    return () => (
      <div style={styless.value} class="ksgchart">
        {!isHasData.value && !props.loading ? (
          slots.default ? (
            slots.default()
          ) : (
            <EmptyData emptyText={props.emptyText} />
          )
        ) : (
          <v-chart
            updateOptions={{ notMerge: true }}
            {...props}
            {...attrs}
            ref={instanceRef}
            style={{ height: '100%', width: '100%' }}
            autoresize={props.autoresize}
            option={option.value}
            init-options={{ renderer: 'svg' }}
          />
        )}
      </div>
    );
  }
});