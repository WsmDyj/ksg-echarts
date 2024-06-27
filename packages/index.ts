
import type { App } from 'vue';

export * from './pie'
import { PieChart } from './pie';

const components = [PieChart];

export { PieChart };

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default install;