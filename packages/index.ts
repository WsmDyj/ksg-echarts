
import type { App } from 'vue';

export * from './pie/index'

import KsgPieChart from './pie/index';

const components = [KsgPieChart];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
  KsgPieChart
};