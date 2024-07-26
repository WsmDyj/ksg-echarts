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
