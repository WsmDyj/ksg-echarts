import { PropType } from 'vue';

type AutoresizeProp = boolean | {
    throttle?: number;
    onResize?: () => void;
};
export declare const autoresizeProps: {
    autoresize: {
        type: PropType<AutoresizeProp>;
        default: boolean;
    };
};
export {};
