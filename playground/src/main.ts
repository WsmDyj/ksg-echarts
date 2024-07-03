import { createApp } from 'vue'
import App from './App.vue'
import ksgEcharts from '../../packages/index'
import 'zrender/lib/svg/svg';
createApp(App).use(ksgEcharts).mount('#app')

import 'default-passive-events';