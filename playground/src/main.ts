import { createApp } from 'vue'
import App from './App.vue'
import ksgEcharts from '../../packages/index'

createApp(App).use(ksgEcharts).mount('#app')

import 'default-passive-events';