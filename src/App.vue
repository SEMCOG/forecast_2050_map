<template>
  <div id="app">
    <SemcogHeader>
      <span
          style="line-height: 2em; font-size: 1em;"
      >
       2050 Forecast
      </span>
    </SemcogHeader>
    <img src="header_report_new.png" alt="logo" width="80%"
         style="align-content: center; margin-top: 20px; margin-bottom: 10px;" class="print-only">

    <div class="report-watermark">DRAFT</div>
    <div id="intro" class="no-print">
      <img src="SEM_0042.jpg" alt="" style="width: 100%; height: 330px; position: relative; object-fit: cover;">
      <div style="margin-left: 20%; margin-right: 20%">
        <div style="font-weight: bold; font-size: 3rem;">2050 Southeast Michigan Regional Development Forecast</div>
        <div style="font-weight: bold; font-size: 2rem;">About</div>
        <p>SEMCOG began development in November 2021 of the 2050 Regional Forecast, which provides a thirty-year
          analysis
          of change in population, households, jobs, and land use for each community in the seven-county region. A new
          forecast of the region's future is produced once every five years.

          The Regional Forecast is critical in understanding how many people will live and work in our region in the
          future. Knowing where households and jobs will be located helps us understand where to plan future
          infrastructure improvements – roads, bridges, water and sewer.

          SEMCOG’s 2050 Regional Forecast for Counties and Municipalities in Southeast Michigan will be adopted on March
          23, 2023. Until that time, all information contained in the 2050 Regional Forecast is considered DRAFT and
          subject to change.

          SEMCOG’s 2050 Regional Forecast for Intermediate and Local School Districts, and for Small Geographic Areas
          within communities, will be released in July 2023.

          SEMCOG’s 2050 Regional Forecast for the those portions of State House and Senate Districts, U.S. Congressional
          Districts, and Watersheds, within our region will be released in Fall 2023.</p>
        <img src="header_report_new.png" alt="logo" width="50%"
             style="align-content: center; margin-top: 20px; margin-bottom: 10px;" class="no-print">
        <p>SEMCOG's 2050 Regional Development Forecast provides a long-range and comprehensive view of future
          demographic and economic changes in Southeast Michigan. It provides base data for updating SEMCOG’s 2050
          Long-Range Transportation Plan and supports regional and local planning in the areas of transportation, water
          quality, air quality, and community and economic development. Member communities use the data in planning for
          future infrastructure and development needs.

          Working with our partners at MDOT and the University of Michigan, SEMCOG developed the population and
          employment totals for the 2050 Regional Forecast. These projections will serve as the control totals for the
          upcoming county and community forecasts, and provide an extensive view of how Southeast Michigan will change
          over the next 30 years. The regional control totals for the 2050 forecast were presented at SEMCOG’s October
          13, 2022 General Assembly meeting. The slides of the presentation and related materials can be found below.
        </p>
        <ul>
          <li><a href="https://semcog.org/blog/2050-regional-forecast-challenges-and-opportunities" target="_blank">2050 Regional Forecast: Challenges and Opportunities</a></li>
          <li><a href="https://semcog.org/Portals/0/Documents/Plans-For-The-Region/Regional-Forecast/2050RegionalForecastPresentationOctober2022.pdf" target="_blank">2050 Regional Forecast Presentation</a></li>
          <li><a href="https://www.youtube.com/watch?v=GihciBkwIvU&t=18s" target="_blank">Recorded Interview with University of Michigan Economists</a></li>
          <li><a href="https://semcog.org/desktopmodules/SEMCOG.Publications/GetFile.ashx?filename=SEMCOG%202050%20Forecast%20Summary.pdf" target="_blank">SEMCOG 2050 Regional Forecast Summary</a></li>
        </ul>
      </div>
      <div style="margin-top: 10%; margin-left: 20%; margin-right: 20%; font-size: 2.2rem; font-weight: 700; line-height: 1.2;">Demographic
        Insights
      </div>
      <p style="margin-left: 20%; margin-right: 20%">The region is projected to grow by 315,000 people in the next 3 decades. It will also be older, and racially
        and ethnically diverse. The region is projected to experience significant demographic transitions in the coming
        years because of declining birth rates and aging population. By the end of this decade, all the baby boomers
        will be older than 65 and, the older population is projected to outnumber the children (under 18 years) for the
        first time in the region’s history. Because of these transformative trends, net international migration is
        expected to overtake natural increase as a leading cause of population growth in the coming decades.</p>
      <div
          style="margin-bottom: 10%; display: grid; grid-template-columns: 50% 50%; grid-template-rows: 500px;">
        <hooper :settings="demographics_carousel" style="height: auto">
          <slide >
            <div style="width: auto; height: auto"><img src="demographics1.JPG" style=" max-width: 100%; height: auto;" alt=""></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="demographics2.JPG" style=" max-width: 100%; height: auto;" alt=""></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="demographics3.JPG" style=" max-width: 100%; height: auto;" alt=""></div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <SimpleEsriMap v-bind:item_id="'ca831d7efac147fdb2f6e4de902af4c9'"
                       style="grid-column: 2; grid-row: 1"></SimpleEsriMap>
      </div>

      <div style="margin-left: 20%; margin-right: 20%; font-size: 2.2rem; font-weight: 700; line-height: 1.2;">Economic
        Insights
      </div>
      <p style="margin-left: 20%; margin-right: 20%">Southeast Michigan’s economy will experience modest growth over the next 30 years. Employment growth will be
        limited by a continued labor shortage, but sectors such as healthcare, professional and technical services,
        transportation and warehousing, and construction will provide jobs for our residents. Employment in the
        manufacturing sector remains stable through 2030, but will start to decline after 2030 as the auto industry
        increasingly turns its attention to electric vehicle production.</p>
      <div
          style="margin-bottom: 10%; display: grid; grid-template-columns: 50% 50%; grid-template-rows: 500px;">
        <hooper :settings="demographics_carousel" style="height: auto; grid-column: 2; grid-row: 1;">
          <slide>
            <div style="width: auto; height: auto"><img src="econ1.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="econ2.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="econ3.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
                    <slide>
            <div style="width: auto; height: auto"><img src="econ4.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
                    <slide>
            <div style="width: auto; height: auto"><img src="econ5.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <SimpleEsriMap v-bind:item_id="'a784dcfb16414f159fe754a2fe1c70cd'"
                       style="grid-column: 1; grid-row: 1"></SimpleEsriMap>
      </div>
      <div style="margin-left: 20%; margin-right: 20%; font-size: 2.2rem; font-weight: 700; line-height: 1.2;">Land Use Insights
      </div>
      <p style="margin-left: 20%; margin-right: 20%">A regional forecast needs the best possible local data to establish the correct future development trends in
        each community. For that reason, our staff has been meeting with communities to understand their future growth
        expectations and collect data on planned development. Future residential growth is expected to be more evenly
        split between single-family and multi-family housing units. The region will add over 100 million square feet of
        new nonresidential buildings, concentrated in buildings that are fewer in number but larger in size.</p>
      <div
          style="margin-bottom: 10%; display: grid; grid-template-columns: 50% 50%; grid-template-rows: 500px;">
        <hooper :settings="demographics_carousel" style="height: auto; grid-column: 1; grid-row: 1;">
          <slide>
            <div style="width: auto; height: auto"><img src="landuse1.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="landuse2.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="landuse2.JPG" style=" max-width: 100%; height: auto;"
                                                        alt=""></div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <SimpleEsriScene v-bind:item_id="'c450a4667c4e414ab444977eab553841'"
                         style="grid-column: 2; grid-row: 1"></SimpleEsriScene>
      </div>
      <div style="margin-left: 20%; margin-right: 20%; font-size: 2.2rem; font-weight: 700; line-height: 1.2;">A Dynamic and Changing Region
      </div>
      <div style="margin-left: 20%; margin-right: 20%; margin-bottom: 10%; font-size: large">
        Timeline
        <timeline>
          <timeline-item> <strong>2025</strong> <br> Southeast Michigan exceeds 3 million jobs.</timeline-item>
          <timeline-item><strong>2028</strong> <br> The senior (those aged 65+) population  now outnumbers the child (aged 0 to 17) population.</timeline-item>
          <timeline-item><strong>2028</strong> <br> One in five people in the region are age 65 or older.</timeline-item>
          <timeline-item><strong>2029</strong> <br> The prime working age (ages 25 to 54) labor force returns to its year 2020 figure of 1,526,000.</timeline-item>
          <timeline-item><strong>2029</strong> <br> The entire baby boom generation will be at least 65 years old.</timeline-item>
          <timeline-item><strong>2031</strong> <br> The first of the baby boomer generation turns 85 years old.</timeline-item>
          <timeline-item><strong>2032</strong> <br> Motor vehicle manufacturing employment growth peaks at 115,000 jobs.</timeline-item>
          <timeline-item><strong>2035</strong> <br> Southeast Michigan’s population exceeds 5 million people.</timeline-item>
          <timeline-item><strong>2036</strong> <br> Health care jobs, our region’s largest employment sector, surpasses 400,000 jobs.</timeline-item>
          <timeline-item><strong>2049</strong> <br> The entire baby boom generation will be at least 85 years old.</timeline-item>
        </timeline>
      </div>
      <div style="margin-left: 20%; margin-right: 20%; font-size: 2.2rem; font-weight: 700; line-height: 1.2;">Map
      </div>
      <p style="margin-left: 20%; margin-right: 20%">Use the map below to explore the results visually. Use the dropdown on the left to choose a layer topic of
        interest, and view that topic by the different geography types. Click on a geography to get more information.
        View and print the report beneath the map.</p>

    </div>
    <div id="mapContainer">
      <div id="map" ref="map">
        <div id="ind_select" class="esri-widget no-print" style="padding: 10px;">
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
    <reportComponent v-bind:selectedFeature='selectedFeature'
                     v-on:selected-id="selectedFeature = {geoid: $event}"
                     v-on:geotype="geotype = $event"
                     id="report"></reportComponent>
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
import SemcogHeader from "./components/SemcogHeader.vue"
import {diff} from 'deep-diff';
import SimpleEsriMap from "@/components/SimpleEsriMap.vue";
import SimpleEsriScene from "@/components/SimpleEsriScene.vue";
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
import 'hooper/dist/hooper.css';
import { Timeline, TimelineItem } from "vue-cute-timeline";
import "vue-cute-timeline/dist/index.css";



export default {
  name: 'App',
  components: {
    SimpleEsriMap,
    SimpleEsriScene,
    reportComponent,
    Hooper,
    Slide,
    HooperNavigation,
    timeline: Timeline,
    "timeline-item": TimelineItem,
    SemcogHeader
  },
  data: function () {
    let qgeotype = this.$route.query.geotype;
    let geotype = 'city'
    if (qgeotype) {
      geotype = qgeotype
    }
    let qgeoid = parseInt(this.$route.query.geoid, 10);
    let geoid = {geoid: 8999}
    if (qgeoid) {
      geoid = {'geoid': qgeoid, 'geotype': geotype}
    }
    let qind = this.$route.query.ind
    let ind = 'pop_change'
    if (qgeoid) {
      ind = qind
    }
    return {
      geotype: geotype,
      ind: ind,
      selectedFeature: geoid,
      printOnLoad: this.$route.query.print,
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
          {type: 'text', text: `<a style="display: none;"> {geoid} {geotype}</a>`}, //need this so that the geoid and type can be passed to the report
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
    demographics_carousel: function () {
      return {
        itemsToShow: 1,
        centerMode: false
      }
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
    events_layer_renderer: function () {
      const colors = ["#e00d0f", "#79dcf6", "#b9a6c5", "#c27c30", "#fae29b", "#eaa51c"];

      const commonProperties = {
        type: "simple-fill",
        style: "solid",
        outline: {
          width: 2,
          color: '#ffffff'
        }
      };

      const commercial = {
        ...commonProperties,
        color: colors[0]
      };

      const institutional = {
        ...commonProperties,
        color: colors[1]
      };

      const industrial = {
        ...commonProperties,
        color: colors[2]
      };

      const medical = {
        ...commonProperties,
        color: colors[3]
      };

      const residential = {
        ...commonProperties,
        color: colors[4]
      };

      const multi_residential = {
        ...commonProperties,
        color: colors[5]
      };

      const renderer = {
        type: "unique-value", // autocasts as new UniqueValueRenderer()
        field: "build_type",
        legendOptions: {
          title: "Building Type"
        },
        label: "Building Type",
        uniqueValueGroups: [{
          classes: [
            {
              values: [21, 22, 23, 24, 25, 26, 41, 42, 43, 61, 62, 71],
              symbol: commercial,
              label: "Commercial"
            },
            {
              values: [11, 12, 13, 14],
              symbol: institutional,
              label: "Institutional"
            },
            {
              values: [31, 32, 33],
              symbol: industrial,
              label: "Industrial"
            },
            {
              values: [51, 52, 53],
              symbol: medical,
              label: "Medical"
            },
            {
              values: [81],
              symbol: residential,
              label: "Single-Family Residential"
            },
            {
              values: [82, 83, 84],
              symbol: multi_residential,
              label: "Multi-Family Residential"
            }
          ]
        }
        ]
      };
      return renderer
    },
    detroit_neighborhood_labels: function () {
      const labelClass = {
        // autocasts as new LabelClass()
        symbol: {
          type: "text",  // autocasts as new TextSymbol()
          color: "#ffffff",
          haloColor: "#8f6732",
          haloSize: .5,
          font: {  // autocast as new Font()
            family: "Arial",
            size: 8,
          }
        },
        labelPlacement: "always-horizontal",
        where: "geoid < 600 and geotype = 'city'",
        minScale: 200000,
        labelExpressionInfo: {
          expression: "$feature.area_name"
        }
      };
      return labelClass
    },
    forecast_layer_info: function () {
      return new FeatureLayer({
        url:
            "https://gis.semcog.org/server/rest/services/Hosted/whatnots_geo_wgs/FeatureServer/56",
        opacity: 0.001,
        legendEnabled: false,
        popupTemplate: this.popup,
        labelingInfo: [this.detroit_neighborhood_labels],
      });
    },
    events_layer: function () {
      return new FeatureLayer({
        url:
            "https://gis.semcog.org/server/rest/services/terra_events_2050/FeatureServer/54",
        title: 'Construction Events',
        minScale: 200000,
        maxScale: 0,
        renderer: this.events_layer_renderer,
        //featureEffect: this.forecast_layer_effect,
      });
    },
    demos_layer: function () {
      return new FeatureLayer({
        url:
            "https://gis.semcog.org/server/rest/services/terra_demos_2050/FeatureServer/53",
        title: 'Demolition Events',
        minScale: 200000,
        maxScale: 0,
        renderer: {
          type: 'simple',
          symbol: {
            type: "simple-fill",
            style: "solid",
            color: '#000000',
            outline: {
              width: 2,
              color: '#000000'
            }
          },
        }
        //featureEffect: this.forecast_layer_effect,
      });
    },

    forecast_layer: function () {
      return new FeatureLayer({
        url:
            "https://gis.semcog.org/server/rest/services/Hosted/whatnots_geo_wgs/FeatureServer/56",
        title: 'Forecast Change',
        renderer: this.forecast_layer_renderer,
        featureEffect: this.forecast_layer_effect,
      });
    },
    query: function () {
      let out = {};
      if (this.selectedFeature) {
        out.geoid = this.selectedFeature.geoid
      }
      if (this.geotype) {
        out.geotype = this.geotype
      }
      if (this.ind) {
        out.ind = this.ind
      }
      return out
    },
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
    this.map.add(this.demos_layer)
    this.map.add(this.events_layer)

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
            title: `${f.attributes.area_name}`,
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
      if (this.printOnLoad) {
        let query = {
          where: `1=1`
        }
        if (this.selectedFeature && this.selectedFeature.geoid !== 8999) {
          query = {
            where: `geoid = '${this.selectedFeature.geoid}'`
          }
        }
        this.events_layer.visible = false
        this.demos_layer.visible = false
        this.forecast_layer_info.queryExtent(query).then((e) => {
          this.view.goTo(e.extent.expand(1.5), {animate: false, duration: 0,})
          window.setTimeout(() => { // wait for loader to disappear
            window.focus();
            window.print();
            window.close();
          }, 2000)
        })
      }
    });

    const legend = new Legend({
      view: this.view
    });

    this.view.ui.add(legend, "bottom-left");
  },
  watch: {
    query: function (oldVal, newVal) {
      if (diff(oldVal, newVal)) {
        this.$router.replace({
          path: "./",
          query: this.query
        })
      }
    },
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
    ind: {
      immediate: true,
      handler: function () {
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
}
</script>

<style>

#app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content auto 600px auto;
  grid-template-columns: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

#intro {
  grid-column: 1;
  grid-row: 2
}

#mapContainer {
  grid-column: 1;
  grid-row: 3;
}

#report {
  width: inherit;
  grid-column: 1;
  grid-row: 4;
}

#map {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.print-only {
  display: none !important;
}

.report-watermark {
    position: fixed;
    color: rgba(241, 21, 31, 0.5);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    font-size: 6em;
    z-index: 3000;
    pointer-events: none;
}

@media print {
  .no-print {
    display: none !important;
  }

  .print-only {
    display: block !important;
  }


  #app {
    grid-template-rows: unset;
  }

  .esri-zoom {
    display: none !important;
  }

  .esri-attribution {
    display: none !important;
  }

  #mapContainer {
    display: block !important;
    grid-column: unset !important;
    grid-row: unset !important;
    margin: auto;
    width: 800px;
    height: 600px;
  }
}

/*.esri-view-width-xlarge .esri-popup__main-container,*/
/*.esri-view-width-large .esri-popup__main-container,*/
/*.esri-view-width-medium .esri-popup__main-container {*/
/*  width: 600px !important;*/
/*}*/
</style>
