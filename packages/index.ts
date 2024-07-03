import type { App } from 'vue';
import './index.css'

export * from './base';
export * from './types';

import KsgBaseChart from './base';
import KsgBarChart from './bar';
import KsgPieChart from './pie';
import KsgLineChart from './line';

const components = [KsgPieChart, KsgLineChart, KsgBaseChart, KsgBarChart];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export { KsgBaseChart, KsgBarChart, KsgPieChart };
export default {
  install,
};
