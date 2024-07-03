/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-07-03 10:48:03
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 19:42:37
 * @FilePath: /ksg-echarts/packages/base/props.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { PropType } from 'vue';
import { InitOptions, LoadingOptions, Option, Theme, UpdateOptions } from '../types';

export type AutoresizeProp =
  | boolean
  | {
      throttle?: number;
      onResize?: () => void;
    };

export const basicProps = {
  option: Object as PropType<Option>,
  theme: {
    type: [Object, String] as PropType<Theme>
  },
  palette: {
    type: Array as PropType<string[]>
  },
  initOptions: Object as PropType<InitOptions>,
  updateOptions: Object as PropType<UpdateOptions>,
  group: String,
  manualUpdate: Boolean,
  autoresize: {
    type: [Boolean, Object] as PropType<AutoresizeProp>,
    default: true
  },
  loading: Boolean,
  loadingOptions: Object as PropType<LoadingOptions>,
  emptyText: String,
  height: {
    type: [String, Number] as PropType<string | number>,
    default: '100%'
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '100%'
  },
};
