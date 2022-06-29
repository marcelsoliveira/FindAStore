<template>
<div class="map-container">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
    >

      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="center" >
      <l-icon
                :icon-anchor="staticAnchor"
  >
      <img class="map-marker" :src="Loader">
      </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker,LIcon } from "vue2-leaflet";
import Loader from "../assets/svg/marker.png";
export default {
  name: "App",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  mounted() {
    this.$root.$on("pan-to-store-location", (coordinates) => {
      console.log(coordinates)
      this.center = latLng(coordinates[0], coordinates[1])
    })
  },
  data() {
    return {
      zoom: 90,
      center: latLng(51.612597, 5.525026),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      mapOptions: {
        zoomControl: false,
        attributionControl: false
      },
      showMap: true,
      Loader: Loader
    };
  },
};
</script>

<style>
.map-container {
    position:absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.map-marker {
  height: 4rem;
  filter: drop-shadow( 0px 0px 14px #888888);
}
.leaflet-control-container { position: relative; right: 2rem; top: 2rem } 
</style>