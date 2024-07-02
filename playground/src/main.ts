import { createApp } from 'vue'
import App from './App.vue'
import ksgEcharts from '../../packages'

createApp(App).use(ksgEcharts).mount('#app')

import 'default-passive-events';