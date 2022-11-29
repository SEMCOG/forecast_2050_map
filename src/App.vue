<template>
  <div id="app">
    <div id="mapContainer">
      <div id="map" ref="map">
        <div id="ind_select" class="esri-widget" style="padding: 10px;">
          <label style="font-size: large; margin: 5px;" for="geo"> Choose Geography: </label>
          <select v-model="geotype"
                  class="esri-widget" name="geo" id="geo" style="font-size: large; padding: 10px">
            <option value="county">Counties</option>
            <option value="city">Communities</option>
          </select>

          <label style="font-size: large; margin: 5px;" for="ind"> Choose Indicator:</label>
          <select v-model="ind"
                  class="esri-widget" name="ind" id="ind" style="font-size: large; padding: 10px">
            <option value="pop_change">Total Population</option>
            <option value="hh_change">Total Households</option>
            <option value="housing_units_change">Housing Units</option>
            <option value="jobs_total_change">Jobs</option>
            <option value="pop_age_00_17_change">Population Ages 0-17</option>
            <option value="pop_age_05_17_change">Population Ages 5-17</option>
            <option value="pop_age_65_inf_change">Population Ages >= 65</option>
          </select>
        </div>
      </div>
    </div>
    <reportComponent v-bind:selectedFeature='selectedFeature' id="report"></reportComponent>
  </div>

</template>

<script>
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Basemap from "@arcgis/core/Basemap";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import FeatureEffect from "@arcgis/core/layers/support/FeatureEffect";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";
import Legend from "@arcgis/core/widgets/Legend";
import reportComponent from "./components/report.vue"


export default {
  name: 'App',
  components: {
    reportComponent
  },
  data: function (){
    return {
      geotype: 'city',
      ind: 'pop_change',
      selectedFeature: {},
      ind_lookup: {
        'pop_change': {name: 'Total Population'},
        'hh_change': {name: 'Total Households'},
        'housing_units_change': {name: 'Housing Units'},
        'jobs_total_change': {name: 'Total Jobs'},
        'pop_age_00_17_change': {name: 'Population Ages 0-17'},
        'pop_age_05_17_change': {name: 'Population Ages 5-17'},
        'pop_age_65_inf_change': {name: 'Population Ages >= 65'},
      }
    }
  },
  computed: {
    popup: function () {
      const template = {
        // autocasts as new PopupTemplate()
        title: "{area_name} Forecast Changes",
        content: [
          {type: 'text', text: `<a href="https://maps.semcog.org/forecast_report/?geoid={geoid}&geotype={geotype}"> Link to full report</a>`},
          {
            // It is also possible to set the fieldInfos outside of the content
            // directly in the popupTemplate. If no fieldInfos is specifically set
            // in the content, it defaults to whatever may be set within the popupTemplate.
            type: "fields",
            fieldInfos: [
              {
                fieldName: "pop_change",
                label: "Population Change",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "hh_change",
                label: "Household Change",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "housing_units_change",
                label: "Housing Unit Change",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "jobs_total_change",
                label: "Jobs Total Change",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              }
            ]
          }
        ]
      };
      return template
    },
    forecast_layer_renderer: function () {
      const more3kgain = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#136400",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const gain501to3k = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#8ec61a",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const loss500lossto500gain = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#f7f3c7",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const loss501to3k = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#FF9900",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

      const more3kloss = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#F11810",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const renderer = {
          type: "class-breaks", // autocasts as new ClassBreaksRenderer()
          field: 'pop_change',
          legendOptions: {
            title: "Total Population 2020 - 2050"
          },
          classBreakInfos: [
            {
              minValue: 3000,
              maxValue: 10000000,
              symbol: more3kgain,
              label: "More than 3,000 gain"
            },
            {
              minValue: 501,
              maxValue: 3000,
              symbol: gain501to3k,
              label: "Gain, 501 to 3,000"
            },
            {
              minValue: -500,
              maxValue: 500,
              symbol: loss500lossto500gain,
              label: "Little change, 500 loss to 500 gain"
            },
            {
              minValue: -3000,
              maxValue: -501,
              symbol: loss501to3k,
              label: "Loss, 501 to 3,000"
            },
            {
              minValue: -10000000,
              maxValue: -3000,
              symbol: more3kloss,
              label: "More than 3,000 loss"
            }
          ]
        };
        return renderer
    },
    forecast_layer_county_renderer: function () {
      const more3kgain = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#136400",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const gain501to3k = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#8ec61a",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const loss500lossto500gain = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#f7f3c7",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const loss501to3k = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#FF9900",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

      const more3kloss = {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#F11810",
          style: "solid",
          outline: {
            width: 1,
            color: '#000000'
          }
        };

        const renderer = {
          type: "class-breaks", // autocasts as new ClassBreaksRenderer()
          field: 'pop_change',
          legendOptions: {
            title: "Total Population 2020 - 2050"
          },
          classBreakInfos: [
            {
              minValue: 75000,
              maxValue: 10000000,
              symbol: more3kgain,
              label: "More than 75,000 gain"
            },
            {
              minValue: 50000,
              maxValue: 75000,
              symbol: gain501to3k,
              label: "Gain, 50,000 to 75,000"
            },
            {
              minValue: -50000,
              maxValue: 50000,
              symbol: loss500lossto500gain,
              label: "Little change, 50,000 loss to 50,000 gain"
            },
            {
              minValue: -50000,
              maxValue: -20000,
              symbol: loss501to3k,
              label: "Loss, 20,000 to 50,000"
            },
            {
              minValue: -10000000,
              maxValue: -50000,
              symbol: more3kloss,
              label: "More than 50,000 loss"
            }
          ]
        };
        return renderer
    },
    forecast_layer_effect: function () {
      const includedEffect = "drop-shadow(3px, 3px, 4px)";
      return new FeatureEffect({
        filter: new FeatureFilter({
          where: "pop_change > 500"
        }),
        includedEffect: includedEffect
      });
    },
    forecast_layer_info: function () {
      return new FeatureLayer({
        url:
            "https://gis.semcog.org/server/rest/services/Hosted/whatnots_geo_wgs/FeatureServer/52",
        opacity: 0,
        legendEnabled: false,
        popupTemplate: this.popup,
        orderBy: {field: 'SHAPE__Area', order: 'ascending'}
      });
    },
    forecast_layer: function () {
      return new FeatureLayer({
        url:
            "https://gis.semcog.org/server/rest/services/Hosted/whatnots_geo_wgs/FeatureServer/52",
        title: 'Forecast Change',
        renderer: this.forecast_layer_renderer,
        featureEffect: this.forecast_layer_effect,
      });
    }
  },
  methods: {},
  mounted() {
    let communityLabels = new VectorTileLayer({
      portalItem: {
        id: "2efeb0852a794d09973908facff29987"
      },
    });

    let community = new VectorTileLayer({
      portalItem: {
        id: "2127254dcb324858947dca0fc8204f9d"
      },
    });

    let basemap = new Basemap({
      baseLayers: [
        community
      ],
      referenceLayers: [
        communityLabels
      ],
    });

    this.map = new Map({basemap: basemap})

    this.view = new MapView({
      container: this.$refs.map,
      map: this.map,
      center: [-83.2437186609522, 42.454430721108764],
      zoom: 8,
      navigation: {
        mouseWheelZoomEnabled: false,
        browserTouchPanEnabled: false
      }
    })

    this.view.ui.add("ind_select", "top-left");
    this.view.ui.move(["zoom"], "bottom-right");

    this.map.add(this.forecast_layer)
    this.map.add(this.forecast_layer_info)

    this.view.popup.viewModel.includeDefaultActions = false;
    this.view.popup.alignment = 'bottom-right'

    this.view.watch('focused', () => {
      this.view.navigation = {
        mouseWheelZoomEnabled: this.view.focused,
        browserTouchPanEnabled: this.view.focused
      }
    })

    this.view.popup.watch("selectedFeature", (graphic) => {
      if (graphic) {
        this.selectedFeature = this.view.popup.selectedFeature.attributes
        let actions = this.view.popup.features.map((f, i) => {
          return {
          title:  `${f.attributes.area_name}`,
          id: `${i}`,
          className: "esri-icon-applications"
        }
        })
        this.view.popup.actions = actions
      }
    });

    this.view.popup.on("trigger-action", (event) => {
      this.view.popup.selectedFeatureIndex = parseInt(event.action.id)
      this.selectedFeature = this.view.popup.selectedFeature.attributes
    });

    this.view.whenLayerView(this.forecast_layer).then((layerView) => {
      layerView.filter = {
        where: `geotype = '${this.geotype}'`
      };
    });

    const legend = new Legend({
      view: this.view
    });

    this.view.ui.add(legend, "bottom-left");
  },
  watch: {
    geotype: function () {
      this.view.whenLayerView(this.forecast_layer).then((layerView) => {
        layerView.filter = {
          where: `geotype = '${this.geotype}'`
        };
      });
      if (this.ind) {
        this.forecast_layer_renderer.field = this.ind
        this.forecast_layer_county_renderer.field = this.ind
        this.forecast_layer_renderer.legendOptions.title = this.ind_lookup[this.ind].name + ' 2020 - 2050'
        this.forecast_layer_county_renderer.legendOptions.title = this.ind_lookup[this.ind].name + ' 2020 - 2050'
        if (this.geotype === 'city') {
          this.forecast_layer.renderer = this.forecast_layer_renderer
        } else {
          this.forecast_layer.renderer = this.forecast_layer_county_renderer
        }
      }
    },
    ind: function () {
      if (this.ind) {
        this.forecast_layer_renderer.field = this.ind
        this.forecast_layer_county_renderer.field = this.ind
        this.forecast_layer_renderer.legendOptions.title = this.ind_lookup[this.ind].name + ' 2020 - 2050'
        this.forecast_layer_county_renderer.legendOptions.title = this.ind_lookup[this.ind].name + ' 2020 - 2050'
        if (this.geotype === 'city') {
          this.forecast_layer.renderer = this.forecast_layer_renderer
        } else {
          this.forecast_layer.renderer = this.forecast_layer_county_renderer
        }
        this.forecast_layer_effect.filter.where = `${this.ind} > 500`
        this.forecast_layer.featureEffect = this.forecast_layer_effect
      }
    }
  }
}
</script>

<style>

#app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 80vh auto;
  font-family: Arial, Helvetica, sans-serif;
}

#mapContainer {
  grid-column: 1;
  grid-row: 1;
  position: relative;
  display: grid;
}

#report {
  grid-column: 1;
  grid-row: 2;
  position: relative;
  display: grid;
}

#map {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}

/*.esri-view-width-xlarge .esri-popup__main-container,*/
/*.esri-view-width-large .esri-popup__main-container,*/
/*.esri-view-width-medium .esri-popup__main-container {*/
/*  width: 600px !important;*/
/*}*/
</style>
