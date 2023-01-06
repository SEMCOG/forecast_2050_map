<template>
  <div id="viewDiv" ref="map"></div>
</template>
<script>
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

export default {
  name: "SimpleEsriMap",
  props: ['item_id'], // chartData added by the reactiveProp
  mounted() {
    const webMap = new WebMap({
      portalItem: {
        id: this.item_id,
        portal: "https://www.arcgis.com"
      }
    });

    new MapView({
      map: webMap,
      container: this.$refs.map,
      navigation: {
        mouseWheelZoomEnabled: false,
        browserTouchPanEnabled: false
      }
    });
  },
}
</script>

<style scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>