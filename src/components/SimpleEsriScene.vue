<template>
  <div id="viewDiv" ref="map"></div>
</template>
<script>
import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";
import Legend from "@arcgis/core/widgets/Legend";
import Expand from "@arcgis/core/widgets/Expand";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";

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

    const fullscreen = new Fullscreen({view: view})
    view.ui.add(fullscreen, "bottom-right");

    const newDiv = document.createElement("div");
    newDiv.className = 'esri-widget'
    newDiv.id = 'aboutDiv'

    let title = ''
    view.when(() => {
      title = webScene.portalItem.title
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