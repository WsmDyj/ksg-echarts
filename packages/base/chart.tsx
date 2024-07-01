/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-06-26 16:16:58
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-06-28 23:59:56
 * @FilePath: /kwaida/packages/kwaida-charts/packages/base/chart.tsx
 * @Description: 基础组件
 */
import { defineComponent, PropType } from 'vue';
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

use([
  CanvasRenderer,
  DatasetComponent,
  TransformComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  components: { VChart },
  name: 'BaseChart',
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
    return () => (
      <v-chart
        style={{ height: '100vh' }}
        update-options={{ notMerge: true }}
        {...props}
        autoresize={true}
      />
    );
  },
});