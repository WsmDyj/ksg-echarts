import { PropType } from "vue";

type AutoresizeProp =
  | boolean
  | {
      throttle?: number;
      onResize?: () => void;
    };
export const autoresizeProps = {
  autoresize: {
    type: [Boolean, Object] as PropType<AutoresizeProp>,
    default: true
  }
};
