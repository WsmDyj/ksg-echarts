import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style/var.css';
import './style/custom.css';
import ksgEchart from '../../../dist/es';
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)

    ctx.app.use(ksgEchart)
    // ctx.app.config.globalProperties.message = message
    // ctx.app.use(ElementPlus, { locale: cn })
    useComponents(ctx.app)
  }
}
