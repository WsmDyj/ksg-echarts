/*
 * @Author: wusimin 
 * @Date: 2024-06-26 16:16:58
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 20:08:52
 * @FilePath: /kwaida/packages/kwaida-charts/packages/base/chart.tsx
 * @Description: 基础组件
 */
import { computed, defineComponent, inject, ref, shallowRef } from 'vue';
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
    const option = computed(() => {
      const { legend = {} } = props.option;
      const legendTemp = {
        type: 'scroll',
        orient: 'horizontal',
        bottom: 'bottom'
      };
      isHasData.value = isArray(props.option.dataset)
        ? true
        : !!props.option.dataset.source?.length;
      console.log(realPalette.value);
      const computedOption = {
        ...props.option,
        legend: merge(legendTemp, legend),
      };
      // 设置主题样式表
      realPalette.value && Reflect.set(computedOption, 'color', realPalette.value);
      return computedOption;
    });
    const instanceRef = shallowRef<InstanceType<typeof VChart>>();
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