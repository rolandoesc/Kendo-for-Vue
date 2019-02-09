<template>
  <div id="map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :key="index" v-for="(marker,index) in peopleLocation" :lat-lng="[marker['latLng'][0], marker['latLng'][1]]">
        <l-popup>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <h6 class="text-center">{{marker['name'] + ' ' + marker['lastName']}}</h6>
                <p>{{marker['city'] + ', ' + marker['country']}}</p>


              </div>
            </div>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
  import { LMap, LTileLayer, LMarker, L, LPopup, LControl } from "vue2-leaflet";
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LControl
    },
    props: ['peopleLocation'],
    data: function() {
      return {
        zoom: 4,
        center: L.latLng(19.432608, -99.133209),
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    }
    
  }
</script>

<style scoped>
#map {
  height:50vh;
}
</style>