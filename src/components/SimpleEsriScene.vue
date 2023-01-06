<template>
  <div id="viewDiv" ref="map"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";
import Legend from "@arcgis/core/widgets/Legend";

export default {
  name: "SimpleEsriMap",
  props: ['item_id'], // chartData added by the reactiveProp
  mounted() {

    const webScene = new WebScene({                    // Define the web scene reference
      portalItem: {
        id: this.item_id,
        portal: "https://www.arcgis.com"
      }
    });

   const view = new SceneView({
      map: webScene,
      container: this.$refs.map,
      navigation: {
        mouseWheelZoomEnabled: false,
        browserTouchPanEnabled: false
      }
    });

    const legend = new Legend({
      view: view
    });

    view.ui.add(legend, "bottom-left");
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