<template>
    <div>
        <div id="viewDiv" ref="map"></div>
        <calcite-card id="itemLink" thumbnailPosition="block-start">
            <span slot="title">{{ itemTitle }}</span>
            <a v-bind:href="itemLink" slot="subtitle" target="_blank">
                Click to open the map in a new tab
            </a>
            <a v-bind:href="itemLink" target="_blank">
                <img slot='thumbnail' alt="Map Thumbnail" v-bind:src="itemThumbnail">
            </a>
        </calcite-card>
    </div>
</template>
<script>
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Legend from "@arcgis/core/widgets/Legend";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import Expand from "@arcgis/core/widgets/Expand";
import Search from "@arcgis/core/widgets/Search";
import "@esri/calcite-components/dist/components/calcite-card";
import PortalItem from "@arcgis/core/portal/PortalItem.js";

export default {
    name: "SimpleEsriMap",
    props: ['item_id'],
    data: function () {
        return {
            itemTitle: ''
        }
    },
    methods: {
        getTitle: async function () {
            let item = new PortalItem({
                id: this.item_id
            });
            await item.load()
            this.itemTitle = item.title
        },
    },
    computed: {
        itemLink: function () {
            return "https://semcog.maps.arcgis.com/apps/mapviewer/index.html?webmap=" + this.item_id
        },
        itemThumbnail: function () {
            return "https://semcog.maps.arcgis.com/sharing/rest/content/items/" + this.item_id + "/info/thumbnail/ago_downloaded.png"
        },
        webMap: function () {
            return new WebMap({  // Define the web scene reference
                portalItem: {
                    id: this.item_id,
                    portal: "https://www.arcgis.com"
                }
            });
        },
        view: function () {
            return new MapView({
            map: this.webMap,
            container: this.$refs.map,
            navigation: {
                mouseWheelZoomEnabled: false,
                browserTouchPanEnabled: false
            }
        })
        }

    },
    mounted() {
        const fullscreen = new Fullscreen({view: this.view})
        this.view.ui.add(fullscreen, "bottom-right");

        const search = new Search({view: this.view})
        const searchExp = new Expand({
            view: this.view,
            content: search,
            expandTooltip: 'Search'
        })
        this.view.ui.add(searchExp, "top-left");

        const newDiv = document.createElement("div");
        newDiv.className = 'esri-widget'
        newDiv.id = 'aboutDiv'

        let title = ''
        this.view.when(() => {
            title = this.webMap.portalItem.title
            newDiv.textContent = title
        })

        const legend = new Legend({
            view: this.view
        });

        const legend_expand = new Expand({
            view: this.view,
            content: legend
        })

        this.view.ui.add(legend_expand, "bottom-left");
        this.view.ui.add(newDiv, "top-right");
        this.getTitle()
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

#itemLink {
    display: none;
    padding: 20px;
}

/deep/ #aboutDiv {
    padding: 12px;
    width: auto;
    font-weight: bold;
}

@media (max-width: 576px) {
    #itemLink {
        display: inherit;
    }

    #viewDiv {
        display: none;
    }
}

</style>