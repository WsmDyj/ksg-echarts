import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style/var.css';
import './style/custom.css';
import ksgEchart from 'ksg-echarts';
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ksgEchart)
    useComponents(ctx.app)
  }
}
