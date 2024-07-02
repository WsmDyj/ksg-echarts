
import type { App } from 'vue';

import KsgBaseChart from './base';
import KsgBarChart from './bar';
import KsgPieChart from './pie';

const components = [KsgPieChart, KsgBaseChart, KsgBarChart];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export { KsgBaseChart, KsgBarChart, KsgPieChart };
export default {
  install,
};