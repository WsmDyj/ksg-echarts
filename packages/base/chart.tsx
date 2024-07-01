/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-06-26 16:16:58
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-01 22:57:06
 * @FilePath: /kwaida/packages/kwaida-charts/packages/base/chart.tsx
 * @Description: 基础组件
 */
import { computed, defineComponent, PropType } from 'vue';
import VChart from 'vue-echarts';
import { InitOptions, Option, Theme, UpdateOptions } from '../types'
import { loadingProps, autoresizeProps } from '../composables';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { merge } from 'lodash-es';

export default defineComponent({
  components: { VChart },
  name: 'KsgBaseChart',
  props: {
    option: Object as PropType<Option>,
    theme: {
      type: [Object, String] as PropType<Theme>
    },
    initOptions: Object as PropType<InitOptions>,
    updateOptions: Object as PropType<UpdateOptions>,
    group: String,
    manualUpdate: Boolean,
    ...autoresizeProps,
    ...loadingProps
  },
  setup(props) {
    use([
      CanvasRenderer,
      DatasetComponent,
      TransformComponent,
      TitleComponent,
      TooltipComponent,
      LegendComponent
    ]);
    const option = computed(() => {
      const { legend = {}, tooltip = {} } = props.option;
      const legendTemp = {
        type: 'scroll',
        orient: 'horizontal',
        bottom: 'bottom'
      };
      const tooltipTemp = {
        trigger: 'item',
        confine: true
      };
      return {
        ...props.option,
        legend: merge(legendTemp, legend),
        tooltip: merge(tooltipTemp, tooltip)
      };
    });
    return () => (
      <v-chart
        style={{ height: '100%', width: '100%' }}
        update-options={{ notMerge: true }}
        {...props}
        option={option.value}
        autoresize={true}
      />
    );
  }
});