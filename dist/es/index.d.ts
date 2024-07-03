import { App } from 'vue';
import { default as KsgBaseChart } from './base';
import { default as KsgBarChart } from './bar';
import { default as KsgPieChart } from './pie';

export * from './base';
export * from './types';
export { KsgBaseChart, KsgBarChart, KsgPieChart };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
