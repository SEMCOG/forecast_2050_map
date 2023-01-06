<template>
  <div id="viewDiv" ref="map"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";

export default {
  name: "SimpleEsriMap",
  props: ['item_id'], // chartData added by the reactiveProp
  mounted() {

    const webScene = new WebScene({                    // Define the web scene reference
      portalItem: {
        id: this.item_id,
        portal: "https://www.arcgis.com"               // Default: The ArcGIS Online Portal
      }
    });

    new SceneView({                       // Load the web scene
      map: webScene,
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