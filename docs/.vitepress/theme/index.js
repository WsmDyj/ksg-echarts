import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style/var.css';
import './style/custom.css';

import x from './x';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // ctx.app.use(ksgEchart)
    ctx.app.component('Test', x);
    useComponents(ctx.app)
  }
}
