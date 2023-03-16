<template>
  <div id="app">
    <SemcogHeader class="no-print" v-if="!printOnLoad">
      <span
          style="line-height: 2em; font-size: 1em; margin-left: 4%"
      >
       2050 Regional Forecast
      </span>
    </SemcogHeader>
    <img src="header_report_new.png" alt="logo" width="80%"
         style="align-content: center; margin-top: 20px; margin-bottom: 10px;" class="print-only">

    <div style="display: none;" class="report-watermark">DRAFT</div>
    <div id="intro" class="no-print">
      <img src="SEM_0042.jpg" alt="" style="width: 100%; height: 330px; position: relative; object-fit: cover;" v-if="!printOnLoad">
      <div class="blog_margin">
        <div style="font-weight: bold; font-size: 3rem;">2050 Southeast Michigan Regional Development Forecast</div>
        <div style="font-weight: bold; font-size: 2rem;">About</div>
        <p>SEMCOG's 2050 Regional Development Forecast provides a long-range and comprehensive view of future
          demographic and economic changes in Southeast Michigan. It provides base data for updating SEMCOG’s 2050
          Long-Range Transportation Plan and supports regional and local planning in the areas of transportation, water
          quality, air quality, and community and economic development. Member communities use the data in planning for
          future infrastructure and development needs.</p>
        <p>SEMCOG began development in late 2021 of the 2050 Regional Forecast, which provides a thirty-year analysis of
          change in population, households, jobs, and land use for each community in the seven-county region. We produce
          a new forecast of the region's future once every five years.</p>
        <p>The Regional Forecast and is critical in understanding how many people will live and work in our region in
          the future. Knowing where households and jobs will be located helps us understand where to plan future
          infrastructure improvements – roads, bridges, water and sewer.</p>
        <h3>SEMCOG 2050 Regional Forecast – Release Dates</h3>
        <ul>
          <li>County and Community Forecast Population, Household, and Employment Totals (March 24th, 2023)</li>
          <li>County and Community Forecast Additional Population and Household Distributions (April 28th, 2023)</li>
          <li>Transportation Analysis Zone Forecast (July 1st, 2023)</li>
          <li>Intermediate and Local School District Forecast (August 2023)</li>
          <li>State House and Senate District Forecast (September 2023)</li>
          <li>Watershed and Sub-Watershed Forecast (September 2023)</li>
        </ul>
        <div style="display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    width: fit-content;
margin-top: 5%; margin-bottom:5%;">
          <a href="#report" style="text-decoration: none;">
            <button class="esri-widget"
                    style="display: block; font-size: 1.2em; font-weight: bold; color: #ffffff; background-color: #011f4a; cursor: pointer;">
              Go to Report
            </button>
          </a>
          <a href="#mapContainer" style="text-decoration: none;">
            <button class="esri-widget"
                    style="display: block; font-size: 1.2em; font-weight: bold; color: #ffffff; background-color: #011f4a; cursor: pointer;">
              Go To Map
            </button>
          </a>
        </div>
        <img src="header_report_new.png" alt="logo" width="50%"
             style="align-content: center; margin-top: 20px; margin-bottom: 10px;" class="no-print">
        <h3>County and Community Forecast</h3>
        <p>SEMCOG’s Executive Committee approved the draft 2050 Regional Forecast for Counties and Communities on
          February 24th, 2023, and recommended General Assembly adoption of the forecast at its March 23rd, 2023
          meeting.</p>
        <ul>
          <li><a href="https://semcog.org/desktopmodules/SEMCOG.Publications/GetFile.ashx?filename=2050%20Regional%20Forecast%20by%20County%20and%20Community.pdf" target="_blank">2050 Regional Forecast by County and Community</a></li>
          <li><a href="https://semcog.org/desktopmodules/SEMCOG.Publications/GetFile.ashx?filename=2050%20Forecast%20Exec%20Presentation.pdf" target="_blank">2050 Regional Forecast Presentation to the Executive Committee</a></li>
        </ul>
        <p>Prior to completing the draft 2050 Regional Forecast for Counties and Communities, SEMCOG held a series of
          Community Stakeholder open house meetings for the 2050 Regional Development Forecast. Three meetings were held
          within the region during the second week of January 2023. At each of these meetings, SEMCOG released its draft
          30-year forecast of population, households, and jobs for each county and community in Southeast Michigan.
          Local leaders then had opportunities to review and give feedback on the draft forecast for their communities
          and explore key regional trends.</p>
        <h3>Regional Control Totals</h3>
        <p>Working with our partners at MDOT and the University of Michigan, SEMCOG developed the population and
          employment totals for the 2050 Regional Forecast. These projections served as the control totals for the
          county and community forecasts, and provide an extensive view of how Southeast Michigan will change over the
          next 30 years. The regional control totals for the 2050 forecast were presented at SEMCOG’s October 13, 2022
          General Assembly meeting. The slides of the presentation and related materials can be found below.</p>
        <ul>
        <li><a href="https://semcog.org/blog/2050-regional-forecast-challenges-and-opportunities" target="_blank">2050 Regional Forecast: Challenges and Opportunities</a></li>
          <li><a href="https://semcog.org/Portals/0/Documents/Plans-For-The-Region/Regional-Forecast/2050RegionalForecastPresentationOctober2022.pdf" target="_blank">2050 Regional Forecast Presentation</a></li>
          <li><a href="https://www.youtube.com/watch?v=GihciBkwIvU&t=18s" target="_blank">Recorded Interview with University of Michigan Economists</a></li>
          <li><a href="https://semcog.org/desktopmodules/SEMCOG.Publications/GetFile.ashx?filename=SEMCOG%202050%20Forecast%20Summary.pdf" target="_blank">SEMCOG 2050 Regional Forecast Summary</a></li>
        </ul>
        <div style="font-size: 1.2em;">Questions?</div>
        <p>Forecast Data: <a href="mailto:nutting@semcog.org">Jeff Nutting</a>, Forecast Map: <a
            href="mailto:misiuk@semcog.org">Chad Misiuk</a></p>
      </div>
      <div class="blog_margin" style="margin-top: 5%; font-size: 2.2rem; font-weight: 700; line-height: 1.2;"><calcite-icon style="color: #894444" icon="users" scale="l"></calcite-icon> Demographic
        Insights
      </div>
      <p class="blog_margin">The region is projected to grow by 315,000 people in the next 3 decades. It will also be older, and racially
        and ethnically diverse. The region is projected to experience significant demographic transitions in the coming
        years because of declining birth rates and aging population. By the end of this decade, all the baby boomers
        will be older than 65 and, the older population is projected to outnumber the children (under 18 years) for the
        first time in the region’s history. Because of these transformative trends, net international migration is
        expected to overtake natural increase as a leading cause of population growth in the coming decades.</p>
      <p class="blog_margin">Use the map below to pan, zoom (using the +, or double click), or search to explore your community. Moving your mouse over a slide carousel will pause the slides. You can right click to download a slide as an image.</p>
      <div class="insight_section" v-if="!printOnLoad">
        <hooper class="carousel_left" :settings="demographics_carousel">
          <slide >
            <div style="width: auto; height: auto"><img src="slides/demographics1.JPG" style=" max-width: 100%; height: auto;" alt="Demographic Shifts from 2020 to 2050"></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="slides/demographics2.JPG" style=" max-width: 100%; height: auto;" alt="Birth Rates continue to fall as Region gets Older"></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="slides/demographics3.JPG" style=" max-width: 100%; height: auto;" alt="Demographic Components driving Population Growth"></div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <SimpleEsriMap class="small_map_right" v-bind:item_id="'ca831d7efac147fdb2f6e4de902af4c9'"></SimpleEsriMap>
      </div>

      <div class="blog_margin" style="font-size: 2.2rem; font-weight: 700; line-height: 1.2;"><calcite-icon style="color: #0f2d53" icon="credits" scale="l"></calcite-icon> Economic
        Insights
      </div>
      <p class="blog_margin">Southeast Michigan’s economy will experience modest growth over the next 30 years. Employment growth will be
        limited by a continued labor shortage, but sectors such as healthcare, professional and technical services,
        transportation and warehousing, and construction will provide jobs for our residents. Employment in the
        manufacturing sector remains stable through 2030, but will start to decline after 2030 as the auto industry
        increasingly turns its attention to electric vehicle production.</p>
      <p class="blog_margin">Use the map below to pan, zoom (using the +, or double click), or search to explore your community. Moving your mouse over a slide carousel will pause the slides. You can right click to download a slide as an image.</p>
      <div class="insight_section" v-if="!printOnLoad">
        <hooper class="carousel_right" :settings="demographics_carousel">
          <slide>
            <div style="width: auto; height: auto"><img src="slides/economics1.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Employment Growth is Strongest in the Next 10 Years"></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="slides/economics2.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Shifting Employment Sectors"></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="slides/economics3.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Aging Population = Greater Demand for Health Services"></div>
          </slide>
                    <slide>
            <div style="width: auto; height: auto"><img src="slides/economics4.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Labor Shortages Continue (Especially for Full-Time Jobs)"></div>
          </slide>
                    <slide>
            <div style="width: auto; height: auto"><img src="slides/economics5.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Skills! – All Jobs will Require Increased Skills"></div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <SimpleEsriMap class="small_map_left" v-bind:item_id="'a784dcfb16414f159fe754a2fe1c70cd'"></SimpleEsriMap>
      </div>
      <div class="blog_margin" style="font-size: 2.2rem; font-weight: 700; line-height: 1.2;"><calcite-icon style="color: #8f6732" icon="plans" scale="l"></calcite-icon> Land Use Insights
      </div>
      <p class="blog_margin">A regional forecast needs the best possible local data to establish the correct future development trends in
        each community. For that reason, our staff has been meeting with communities to understand their future growth
        expectations and collect data on planned development. Future residential growth is expected to be more evenly
        split between single-family and multi-family housing units. The region will add over 100 million square feet of
        new nonresidential buildings, concentrated in buildings that are fewer in number but larger in size.</p>
      <p class="blog_margin">Use the map below to pan, zoom (using the +, or double click), or search to explore your community. Moving your mouse over a slide carousel will pause the slides. You can right click to download a slide as an image.</p>
      <div class="insight_section" v-if="!printOnLoad">
        <hooper class="carousel_left" :settings="demographics_carousel">
          <slide>
            <div style="width: auto; height: auto"><img src="slides/landuse1.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Capturing Planned Development"></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="slides/landuse2.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Building Distribution is Changing"></div>
          </slide>
          <slide>
            <div style="width: auto; height: auto"><img src="slides/landuse3.JPG" style=" max-width: 100%; height: auto;"
                                                        alt="Future Buildings are Getting Larger"></div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <SimpleEsriScene class="small_map_right" v-bind:item_id="'c450a4667c4e414ab444977eab553841'" ></SimpleEsriScene>
      </div>
      <div class="blog_margin" style="font-size: 2.2rem; font-weight: 700; line-height: 1.2;">A Dynamic and Changing Region
      </div>
      <div class="blog_margin" style="margin-bottom: 5%; font-size: large">
        Timeline
        <timeline>
          <timeline-item><strong>2025</strong> <br>
            <calcite-icon icon="credits" scale="l" style="color: #0f2d53"></calcite-icon>
            Southeast Michigan exceeds 3 million jobs.
          </timeline-item>
          <timeline-item><strong>2028</strong> <br>
            <calcite-icon icon="credits" scale="l" style="color: #0f2d53"></calcite-icon>
            The senior (those aged 65+) population now outnumbers the child (aged 0 to 17) population.
          </timeline-item>
          <timeline-item><strong>2028</strong> <br>
            <calcite-icon icon="users" scale="l" style="color: #894444"></calcite-icon>
            One in five people in the region are age 65 or older.
          </timeline-item>
          <timeline-item><strong>2029</strong> <br>
            <calcite-icon icon="credits" scale="l" style="color: #0f2d53"></calcite-icon>
            The prime working age (ages 25 to 54) labor force returns to its year 2020 figure of 1,526,000.
          </timeline-item>
          <timeline-item><strong>2029</strong> <br>
            <calcite-icon icon="users" scale="l" style="color: #894444"></calcite-icon>
            The entire baby boom generation will be at least 65 years old.
          </timeline-item>
          <timeline-item><strong>2031</strong> <br>
            <calcite-icon icon="users" scale="l" style="color: #894444"></calcite-icon>
            The first of the baby boomer generation turns 85 years old.
          </timeline-item>
          <timeline-item><strong>2032</strong> <br>
            <calcite-icon icon="credits" scale="l" style="color: #0f2d53"></calcite-icon>
            Motor vehicle manufacturing employment growth peaks at 115,000 jobs.
          </timeline-item>
          <timeline-item><strong>2035</strong> <br>
            <calcite-icon icon="users" scale="l" style="color: #894444"></calcite-icon>
            Southeast Michigan’s population exceeds 5 million people.
          </timeline-item>
          <timeline-item><strong>2036</strong> <br>
            <calcite-icon icon="credits" scale="l" style="color: #0f2d53"></calcite-icon>
            Health care jobs, our region’s largest employment sector, surpasses 400,000 jobs.
          </timeline-item>
          <timeline-item><strong>2049</strong> <br>
            <calcite-icon icon="users" scale="l" style="color: #894444"></calcite-icon>
            The entire baby boom generation will be at least 85 years old.
          </timeline-item>
        </timeline>
      </div>
      <div class="blog_margin" style="font-size: 2.2rem; font-weight: 700; line-height: 1.2;">Forecast Map
      </div>
      <p class="blog_margin">Use the map below to explore the results visually. Use the dropdown on the left to choose a layer topic of
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
            <option value="housing_units_change">Total Housing Units</option>
            <option value="jobs_total_change">Total Jobs</option>
            <option value="pop_age_00_17_change">Population Ages 0-17</option>
            <option value="pop_age_18_inf_change">Population Ages 18+</option>
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
import Expand from "@arcgis/core/widgets/Expand";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
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
        'housing_units_change': {name: 'Total Housing Units'},
        'jobs_total_change': {name: 'Total Jobs'},
        'pop_age_00_17_change': {name: 'Population Ages 0-17'},
        'pop_age_05_17_change': {name: 'Population Ages 5-17'},
        'pop_age_18_inf_change': {name: 'Population Ages >= 18'},
        'pop_age_65_inf_change': {name: 'Population Ages >= 65'},
      }
    }
  },
  computed: {
    popupExpressions: function () {
      return [
        {
          name: "pop_change_percent",
          title: "pop_change_percent",
          expression: "ROUND(($feature.pop_change / $feature.pop_start)*100, 1) + '%'"
        },
        {
          name: "pop_change_formatted",
          title: "pop_change_formatted",
          expression: "TEXT($feature.pop_change, '#,###')"
        },
        {
          name: "pop_age_00_17_change_percent",
          title: "pop_age_00_17_change_percent",
          expression: "ROUND(($feature.pop_age_00_17_change / $feature.pop_age_00_17_start)*100, 1) + '%'"
        },
        {
          name: "pop_age_00_17_change_formatted",
          title: "pop_age_00_17_change_formatted",
          expression: "TEXT($feature.pop_age_00_17_change, '#,###')"
        },
        {
          name: "pop_age_05_17_change_percent",
          title: "pop_age_05_17_change_percent",
          expression: "ROUND(($feature.pop_change / $feature.pop_start)*100, 1) + '%'"
        },
        {
          name: "pop_age_05_17_change_formatted",
          title: "pop_age_05_17_change_formatted",
          expression: "TEXT($feature.pop_age_05_17_change, '#,###')"
        },
        {
          name: "pop_age_18_inf_change_percent",
          title: "pop_age_18_inf_change_percent",
          expression: "ROUND(($feature.pop_age_18_inf_change / $feature.pop_age_18_inf_start)*100, 1) + '%'"
        },
        {
          name: "pop_age_18_inf_change_formatted",
          title: "pop_age_18_inf_change_formatted",
          expression: "TEXT($feature.pop_age_18_inf_change, '#,###')"
        },
        {
          name: "pop_age_65_inf_change_percent",
          title: "pop_age_65_inf_change_percent",
          expression: "ROUND(($feature.pop_age_65_inf_change / $feature.pop_age_65_inf_start)*100, 1) + '%'"
        },
        {
          name: "pop_age_65_inf_change_formatted",
          title: "pop_age_65_inf_change_formatted",
          expression: "TEXT($feature.pop_age_65_inf_change, '#,###')"
        },
        {
          name: "hh_change_percent",
          title: "hh_change_percent",
          expression: "ROUND(($feature.hh_change / $feature.hh_start)*100, 1) + '%'"
        },
        {
          name: "hh_change_formatted",
          title: "hh_change_formatted",
          expression: "TEXT($feature.hh_change, '#,###')"
        },
        {
          name: "housing_unit_change_percent",
          title: "housing_unit_change_percent",
          expression: "ROUND(($feature.housing_units_change / $feature.housing_units_start)*100, 1) + '%'"
        },
        {
          name: "housing_units_change_formatted",
          title: "housing_units_change_formatted",
          expression: "TEXT($feature.housing_units_change, '#,###')"
        },
        {
          name: "jobs_total_change_percent",
          title: "jobs_total_change_percent",
          expression: "ROUND(($feature.jobs_total_change / $feature.jobs_total_start)*100, 1) + '%'"
        },
        {
          name: "jobs_total_change_formatted",
          title: "jobs_total_change_formatted",
          expression: "TEXT($feature.jobs_total_change, '#,###')"
        },
      ];
    },
    popup: function () {
      const template = {
        // autocasts as new PopupTemplate()
        title: "{area_name} Forecast Changes 2020-2050",
        expressionInfos: this.popupExpressions,
        content: `<a style="display: none;"> {geoid} {geotype}</a>
                  <table style="width:100%">
                  <tr>
                  <th style="width:50%"></th>
                 <th style="width:25%"><strong>Number</strong></th>
                 <th style="width:25%"><strong>Percent</strong></th></tr>
                 <tr>
                 <th>Total Population</th>
                   <td>{expression/pop_change_formatted} </td>
                   <td>{expression/pop_change_percent} </td>
                 </tr>
                 <tr>
                 <th>&nbsp&nbsp Ages 0-17</th>
                   <td>{expression/pop_age_00_17_change_formatted} </td>
                   <td>{expression/pop_age_00_17_change_percent} </td>
                 </tr>
                 <tr>
                 <th>&nbsp&nbsp Ages 18+</th>
                   <td>{expression/pop_age_18_inf_change_formatted} </td>
                   <td>{expression/pop_age_18_inf_change_percent} </td>
                 </tr>
                 <tr>
                 <th>Total Households</th>
                   <td>{expression/hh_change_formatted} </td>
                   <td>{expression/hh_change_percent} </td>
                 </tr>
                 <tr>
                 <th>Total Housing Units</th>
                   <td>{expression/housing_units_change_formatted} </td>
                   <td>{expression/housing_unit_change_percent} </td>
                 </tr>
                 <tr>
                 <th>Total Jobs <sup>*</sup></th>
                   <td>{expression/jobs_total_change_formatted} </td>
                   <td>{expression/jobs_total_change_percent} </td>
                 </tr>
          </table>
          <div style="font-size: x-small"><sup>*</sup> Total Jobs has a base year of 2019</div>`
      };
      return template
    },
    demographics_carousel: function () {
      return {
        itemsToShow: 1,
        centerMode: false,
        progress: true,
        autoPlay: true,
        playSpeed: 4000,
        wheelControl: false,
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
    basemapGallery: function () {
      const bgExpand = new Expand({
        view: this.view,
        content: new BasemapGallery({
          view: this.view,
          source: this.basemaps
        }),
        expandIconClass: "esri-icon-basemap"
      });
      return bgExpand

    },
    basemaps: function () {
      let basemap = new Basemap({
        portalItem: {
          id: "08c50fc63f374449a1c9128bf0ad40d8"
        },
        referenceLayers: [
          new VectorTileLayer({
            portalItem: {
              id: "2efeb0852a794d09973908facff29987"
            },
          })
        ],
      });

      let statehouse_basemap = new Basemap({
        portalItem: {
          id: "828cf5d1fabb42d0aecccce4c574e461"
        },
        referenceLayers: [
          new VectorTileLayer({
            portalItem: {
              id: "2f10fe3210c64ac592352754e1171a75"
            },
          })
        ],
      });

      let statesenate_basemap = new Basemap({
        portalItem: {
          id: "3730b4c557184974906f4dffab40b4a9"
        },
        referenceLayers: [
          new VectorTileLayer({
            portalItem: {
              id: "5e8a1121f2824678bc3a1381ff784223"
            },
          })
        ],
      });

      let uscongress_basemap = new Basemap({
        portalItem: {
          id: "46d0c7c69ad347ffb28ac5ef6f0d8a42"
        },
      });

      // uscongress_basemap.when(() => {
      //   uscongress_basemap.referenceLayers = [
      //     new VectorTileLayer({
      //       portalItem: {
      //         id: "224035d0afe1475d8796bb0802963846"
      //       },
      //     })
      //   ]
      // })

      let imagery_basemap = new Basemap({
        portalItem: {
          id: "9f160c51867846328fda3c4d1ce4552d"
        },
        referenceLayers: [
          new VectorTileLayer({
            portalItem: {
              id: "30d6b8271e1849cd9c3042060001f425"
            },
          })
        ],
      });
      return [basemap, imagery_basemap, uscongress_basemap, statesenate_basemap, statehouse_basemap]
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
          title: "Total Population, 2020 - 2050"
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
    forecast_layer_info: function () {
      return new FeatureLayer({
        url:
            "https://gis.semcog.org/server/rest/services/Hosted/whatnots_geo_wgs/FeatureServer",
        opacity: 0.001,
        legendEnabled: false,
        popupTemplate: this.popup,
        definitionExpression: "not (geoid > 500 and geoid < 600)",
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
            "https://gis.semcog.org/server/rest/services/Hosted/whatnots_geo_wgs/FeatureServer",
        title: 'Forecast Change',
        renderer: this.forecast_layer_renderer,
        featureEffect: this.forecast_layer_effect,
        opacity: .8,
        definitionExpression: "not (geoid > 500 and geoid < 600)",
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
    this.map = new Map({basemap: this.basemaps[0]})

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
    this.view.ui.add(this.basemapGallery, "top-right");

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

    const legExpand = new Expand({
      expandIconClass: "esri-icon-legend",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
      expandTooltip: "Legend", // optional, defaults to "Expand" for English locale
      view: this.view,
      autoCollapse: false,
      expanded: false,
      content: legend
    });
    this.view.ui.add(legExpand, "bottom-left");
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

      let year_range = ' 2020 - 2050'
      if (this.ind === 'jobs_total_change') {
        year_range = ' 2019 - 2050'
      }

      if (this.ind) {
        this.forecast_layer_renderer.field = this.ind
        this.forecast_layer_county_renderer.field = this.ind
        this.forecast_layer_renderer.legendOptions.title = this.ind_lookup[this.ind].name + year_range
        this.forecast_layer_county_renderer.legendOptions.title = this.ind_lookup[this.ind].name + year_range
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
        let year_range = ' 2020 - 2050'
        if (this.ind === 'jobs_total_change') {
          year_range = ' 2019 - 2050'
        }

        if (this.ind) {
          this.forecast_layer_renderer.field = this.ind
          this.forecast_layer_county_renderer.field = this.ind
          this.forecast_layer_renderer.legendOptions.title = this.ind_lookup[this.ind].name + ", " + year_range
          this.forecast_layer_county_renderer.legendOptions.title = this.ind_lookup[this.ind].name + ", " + year_range
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
  grid-template-rows: max-content auto 700px auto;
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

.insight_section {
  margin-bottom: 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 500px;
}

.small_map_right {
  grid-column: 2;
  grid-row: 1
}

.small_map_left {
  grid-column: 1;
  grid-row: 1
}

.carousel_right {
  height: auto;
  grid-column: 2;
  grid-row: 1
}

.carousel_left {
  height: auto;
  grid-column: 1;
  grid-row: 1
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

.blog_margin {
  margin-left: 20%;
  margin-right: 20%
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
    height: 500px;
  }
}

@media (max-width: 576px) {

  .blog_margin {
    margin-left: 5%;
    margin-right: 5%
  }

  .small_map_right {
    grid-column: 1;
    grid-row: 2
  }

  .small_map_left {
    grid-column: 1;
    grid-row: 2
  }

    .carousel_right {
    grid-column: 1;
    grid-row: 1
  }

  .carousel_left {
    grid-column: 1;
    grid-row: 1
  }

  .insight_section {
    margin-bottom: 1%;
    grid-template-columns: 100%;
    grid-template-rows: auto 500px;
  }
}

/*.esri-view-width-xlarge .esri-popup__main-container,*/
/*.esri-view-width-large .esri-popup__main-container,*/
/*.esri-view-width-medium .esri-popup__main-container {*/
/*  width: 600px !important;*/
/*}*/
</style>
