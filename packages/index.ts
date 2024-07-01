
import type { App } from 'vue';

import KsgPieChart from './pie';
export * from './pie'

import KsgBaseChart from './base';
export * from './base';

const components = [KsgPieChart, KsgBaseChart];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};