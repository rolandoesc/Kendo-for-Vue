import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery';
// Estilos
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import VueFire from 'vuefire';

import { DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper';
import { Grid } from '@progress/kendo-vue-grid';

import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper';
import { KendoPopupsInstaller } from '@progress/kendo-popups-vue-wrapper'
import { ChartInstaller } from '@progress/kendo-charts-vue-wrapper'

// Leaflet usage

import { L } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.use(ChartInstaller)
Vue.use(KendoPopupsInstaller)
Vue.use (ButtonsInstaller)
Vue.use (DropdownsInstaller)
//Vue.component('Grid', Grid);
Vue.use(VueFire)
new Vue({
  render: h => h(App),
}).$mount('#app')
