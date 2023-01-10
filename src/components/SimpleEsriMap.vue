<template>
  <div>
    <div id="viewDiv" ref="map"></div>
  </div>
</template>
<script>
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Legend from "@arcgis/core/widgets/Legend";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import Expand from "@arcgis/core/widgets/Expand";

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

    const view = new MapView({
      map: webMap,
      container: this.$refs.map,
      navigation: {
        mouseWheelZoomEnabled: false,
        browserTouchPanEnabled: false
      }
    });

    const fullscreen = new Fullscreen({view: view})
    view.ui.add(fullscreen, "bottom-right");

    const newDiv = document.createElement("div");
    newDiv.className = 'esri-widget'
    newDiv.id = 'aboutDiv'

    let title = ''
    view.when(() => {
      title = webMap.portalItem.title
      newDiv.textContent = title
    })

    const legend = new Legend({
      view: view
    });

    const legend_expand = new Expand({
      view: view,
      content: legend
    })

    view.ui.add(legend_expand, "bottom-left");
    view.ui.add(newDiv, "top-right");
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

/deep/ #aboutDiv {
  padding: 12px;
  width: auto;
  font-weight: bold;
}

</style>