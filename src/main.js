import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid } from '@progress/kendo-vue-grid'
Vue.config.productionTip = false

import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
 
Vue.use (ButtonsInstaller)
Vue.component('Grid', Grid);
new Vue({
  render: h => h(App),
}).$mount('#app')
