<template>
  <div id="report" v-if="report_data" style="margin: auto">
    <div class="controls no-print">
      <div class="name ">
        <ShortcutSelect
            v-bind:namesFromGeotype="namesFromGeotype"
            v-bind:geotypesForMap="['largearea', 'county', 'city']"
            v-bind:geotype="geotype"
            v-on:set-geo-type="geotype = $event"
        />
      </div>
      <div style="margin-left: 36px;">
        <span style="margin-left: 5px; margin-right: 3px; font-weight: bolder; font-size: 1.2em;">   is   </span>
        <select style="font-weight: bolder; font-size: 1.1em;" class='comm_dropdown'
                v-on:change="selectedId = +$event.target.value">
          <option disabled value="">Choose a Community</option>
          <option
              v-bind:value="8999"
              v-bind:selected="!selectedId"
          >Southeast Michigan
          </option>
          <option
              v-for="(list, key) in Array.from(namesFromGeotype[geotype].lookup)"
              v-bind:key="key"
              v-bind:value="list[0]"
              v-bind:selected="selectedId===parseInt(list[0], 10)"
          >{{ list[1]}}
          </option>
        </select>
        <calcite-button icon-start="print" color="white" style="margin-left: 20px" v-on:click="openToPrint()">Print</calcite-button>
      </div>
    </div>
    <img src="header_report_new.png" alt="logo" width="50%" style="align-content: center; margin-top: 20px; margin-bottom: 10px;" class="no-print">
    <h1>{{ selectedName || 'Southeast Michigan' }} - 2050 Forecast Summary</h1>
    <lineChart v-bind:chartData="summaryChart[0]"
               v-bind:options="summaryChart[1]"
               v-bind:style="{width: '100%', height: '500px'}"/>

    <h2 class="page-break">Population and Households</h2>
    <table>
      <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="tableChangGap"></th>
        <th colspan="2">Change 2020 - 50</th>
      </tr>
      <tr>
        <th></th>
        <th>2020</th>
        <th>2030</th>
        <th>2040</th>
        <th>2050</th>
        <th class="tableChangGap"></th>
        <th>Number</th>
        <th>Percent</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="ind in hh_table_inds" v-bind:key="ind" :class="{ 'not_indent': not_indent[ind], 'dashed': dash[ind] }">
        <th>{{ indNameLookup[ind] }}</th>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2020'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2030'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2040'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2050'])}}</td>
        <td class="tableChangGap"></td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2050'] - report_data[ind]['yr2020'])}}</td>
        <td v-if="report_data[ind]">{{formatPercent((report_data[ind]['yr2050'] - report_data[ind]['yr2020']) / report_data[ind]['yr2020'])}}</td>
      </tr>
      </tbody>
    </table>

    <horizontalBar v-bind:chartData="ageChart[0]"
                   v-bind:options="ageChart[1]"
                   v-bind:style="{width: '100%', height: '500px'}"/>
    <h2 class="page-break">Employment by Sector</h2>
    <table>
      <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="tableChangGap"></th>
        <th colspan="2">Change 2019 - 50</th>
      </tr>
      <tr>
        <th></th>
        <th>2019</th>
        <th>2020</th>
        <th>2030</th>
        <th>2040</th>
        <th>2050</th>
        <th class="tableChangGap"></th>
        <th>Number</th>
        <th>Percent</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="ind in indicators_table_jobs" v-bind:key="ind" :class="{ 'not_indent': ind === 'jobs_total'}">
        <th>{{ indNameLookup[ind] }}</th>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2019'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2020'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2030'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2040'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2050'])}}</td>
        <td class="tableChangGap"></td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2050'] - report_data[ind]['yr2019'])}}</td>
        <td v-if="report_data[ind]">{{formatPercent((report_data[ind]['yr2050'] - report_data[ind]['yr2019']) / report_data[ind]['yr2019'])}}</td>
      </tr>
      </tbody>
    </table>

    <lineChart v-bind:chartData="jobChart[0]"
               v-bind:options="jobChart[1]"
               v-bind:style="{width: '100%', height: '500px'}"/>
    <div>
      <p style="text-align: center; margin-top: 25px" class="report-footer">1001 Woodward, Suite 1400  •  Detroit, Michigan 48226  •  (313) 961-4266  •  Fax (313) 961-4869  •
        <a href="https://semcog.org">semcog.org</a></p>
    </div>
  </div>
</template>

<script>
import * as query from "@arcgis/core/rest/query"
import Query from "@arcgis/core/rest/support/Query"
import * as d3 from 'd3'
import horizontalBar from "./horizontalBarChart.vue"
import lineChart from "./lineChart.vue"
import ShortcutSelect from "./ShortcutSelect.vue"
import "@esri/calcite-components/dist/components/calcite-button";

export default {
  name: 'reportComponent',
  components: {
    horizontalBar, lineChart, ShortcutSelect
  },
  props: ['selectedFeature'],
  data: function () {
    return {
      report_data: null,
      queryUrl: "https://gis.semcog.org/server/rest/services/Hosted/whatnots_2008_external/FeatureServer/0",
      selectedId: this.selectedFeature.geoid || 8999,
      large_area_ids: [3, 5, 93, 99, 115, 125, 147, 161],
      geotype: this.selectedFeature.geotype || 'city',
      namesFromGeotype: Object.freeze({
        'largearea': {
          name: 'Large Areas',
          singularName: 'Large Area',
          column_name: 'large_area_id',
          lookup: undefined
        },
        'county': {
          name: 'Counties',
          singularName: 'County',
          column_name: 'large_area_id',
          lookup: undefined
        },
        'city': {
          name: 'Communities',
          singularName: 'Community',
          column_name: 'city_id',
          lookup: undefined
        },
        'SchoolDistrict': {
          name: 'School Districts',
          singularName: 'School District',
          column_name: 'dcode',
          lookup: {
            47070: 'Howell Public Schools',
            58030: 'Bedford Public Schools',
            74100: 'Marysville Public Schools',
            63220: 'Huron Valley Schools',
            82160: 'Wayne-Westland Community School District',
            82140: 'South Redford School District',
            82095: 'Livonia Public Schools',
            82020: 'Allen Park Public Schools',
            82055: 'Grosse Pointe Public Schools',
            63300: 'Waterford School District',
            50080: 'Chippewa Valley Schools',
            58110: 'Whiteford Agricultural Schools',
            74050: 'East China School District',
            81120: 'Saline Area Schools',
            81080: 'Manchester Community Schools',
            82300: 'Grosse Ile Township Schools',
            58050: 'Dundee Community Schools',
            50230: 'Warren Consolidated Schools',
            82130: 'Romulus Community Schools',
            82090: 'Lincoln Park Public Schools',
            82230: 'Crestwood School District',
            58080: 'Jefferson Schools (Monroe)',
            58020: 'Airport Community School District',
            82180: 'Flat Rock Community Schools',
            82290: 'Gibraltar School District',
            82060: 'Hamtramck Public Schools',
            63280: 'Lamphere Public Schools',
            74120: 'Memphis Community Schools',
            74030: 'Algonac Community School District',
            50040: 'Anchor Bay School District',
            50140: "L'Anse Creuse Public Schools",
            50160: 'Mt. Clemens Community School District',
            50170: 'New Haven Community Schools',
            47060: 'Hartland Consolidated Schools',
            47030: 'Fowlerville Community Schools',
            81050: 'Dexter Community School District',
            81040: 'Chelsea School District',
            81010: 'Ann Arbor Public Schools',
            58100: 'Summerfield School District',
            58090: 'Mason Consolidated Schools (Monroe)',
            58010: 'Monroe Public Schools',
            58070: 'Ida Public School District',
            63290: 'Walled Lake Consolidated Schools',
            63010: 'Birmingham City School District',
            63130: 'Hazel Park City School District',
            63020: 'Ferndale Public Schools',
            63260: 'Rochester Community School District',
            63050: 'Berkley School District',
            63040: 'School District of the City of Royal Oak',
            50210: 'Utica Community Schools',
            47010: 'Brighton Area Schools',
            82010: 'Detroit City School District',
            82250: 'Ecorse Public School District',
            74040: 'Capac Community School District',
            74130: 'Yale Public Schools',
            63240: 'South Lyon Community Schools',
            82100: 'Plymouth-Canton Community Schools',
            81070: 'Lincoln Consolidated School District',
            74010: 'Port Huron Area School District',
            82430: 'Van Buren Public Schools',
            81020: 'School District of Ypsilanti',
            82340: 'Huron School District',
            82240: 'Westwood Community Schools',
            82030: 'Dearborn City School District',
            82050: 'Garden City School District',
            50020: 'East Detroit Public Schools',
            50180: 'Richmond Community Schools',
            81140: 'Whitmore Lake Public Schools',
            47080: 'Pinckney Community Schools',
            50070: 'Clintondale Community Schools',
            50090: 'Fitzgerald Public Schools',
            50220: 'Van Dyke Public Schools',
            50010: 'Center Line Public Schools',
            50050: 'Armada Area Schools',
            50240: 'Warren Woods Public Schools',
            50120: 'Lake Shore Public Schools (Macomb)',
            50130: 'Lakeview Public Schools (Macomb)',
            50030: 'Roseville Community Schools',
            63250: 'Oak Park City School District',
            63270: 'Clawson Public Schools',
            63110: 'Oxford Community Schools',
            63150: 'Troy School District',
            63140: 'Madison Public Schools (Oakland)',
            63180: 'Brandon School District',
            63230: 'Lake Orion Community Schools',
            50190: 'Romeo Community Schools',
            63030: 'Pontiac City School District',
            63160: 'West Bloomfield School District',
            63080: 'Bloomfield Hills School District',
            63070: 'Avondale School District',
            82110: 'Redford Union School District',
            63200: 'Farmington Public School District',
            82120: 'River Rouge School District',
            63060: 'Southfield Public School District',
            82405: 'Southgate Community School District',
            82400: 'Riverview Community School District',
            82155: 'Trenton Public Schools',
            81100: 'Milan Area Schools',
            82390: 'Northville Public Schools',
            63090: 'Clarenceville School District',
            82070: 'Highland Park City Schools',
            63100: 'Novi Community School District',
            50200: 'South Lake Schools',
            82365: 'Woodhaven-Brownstown School District',
            82150: 'Taylor School District',
            82040: 'Dearborn Heights School District #7',
            82045: 'Melvindale-North Allen Park Schools',
            82170: 'Wyandotte City School District',
            82320: 'City of Harper Woods Schools',
            50100: 'Fraser Public Schools',
            63210: 'Holly Area School District',
            63190: 'Clarkston Community School District',
          }
        },
        'ISD': {
          name: 'Intermediate School Districts',
          singularName: 'Intermediate School District',
          column_name: 'isdcode',
          lookup: {
            47: 'Livingston ESA',
            50: 'Macomb ISD',
            58: 'Monroe ISD',
            63: 'Oakland Schools',
            74: 'St. Clair County RESA',
            81: 'Washtenaw ISD',
            82: 'Wayne RESA',
          }
        },
      }),
      not_indent: {"pop": true, "housing_units": true, "hhsize": true, "hh": true},
      dash: {"hh_pop": true, "pop_age_00_04": true, "housing_units": true, "hh": true},
      years: ['yr2020', 'yr2025', 'yr2030', 'yr2035', 'yr2040', 'yr2045', 'yr2050'],
      job_years: ['yr2019', 'yr2020', 'yr2025', 'yr2030', 'yr2035', 'yr2040', 'yr2045', 'yr2050'],
      hh_table_inds: ["pop", "hh_pop", "gq_pop",
      "pop_age_00_04", "pop_age_05_17", "pop_age_18_24", "pop_age_25_54", "pop_age_55_64", "pop_age_65_84", "pop_age_85_inf",
      "housing_units", "hhsize", "hh", "with_children", "with_seniors", "hh_size_1", "hh_no_car_or_lt_workers"],
      age_inds: ["pop_age_85_inf", "pop_age_65_84", "pop_age_55_64", "pop_age_25_54", "pop_age_18_24", "pop_age_05_17", "pop_age_00_04"],
      summary_inds:["pop", "hh", "jobs_total", "housing_units"],
      summary_inds_colors: {
        'pop': '#5F4690',
        'hh': '#1D6996',
        'housing_units': '#38A6A5',
        'jobs_total': '#0F8554',
      },
      job_inds: ["jobs_sec_03", "jobs_sec_05", "jobs_sec_0809", "jobs_sec_1011", "jobs_sec_1415"],
      job_ind_colors: {
        'jobs_sec_03': '#5F4690',
        'jobs_sec_05': '#1D6996',
        'jobs_sec_0809': '#38A6A5',
        'jobs_sec_1011': '#0F8554',
        'jobs_sec_1415': '#73AF48'
      },
      indicators_jobs: ["jobs_total", "jobs_sec_01", "jobs_sec_02", "jobs_sec_03", "jobs_sec_04",
        "jobs_sec_05", "jobs_sec_06", "jobs_sec_07", "jobs_sec_08",
        "jobs_sec_09", "jobs_sec_10", "jobs_sec_11", "jobs_sec_12",
        "jobs_sec_13", "jobs_sec_14", "jobs_sec_15", "jobs_sec_16",
        "jobs_sec_17", "jobs_sec_18"],
      indicators_table_jobs:["jobs_total", "jobs_sec_0102", "jobs_sec_03", "jobs_sec_04",
        "jobs_sec_05", "jobs_sec_0607", "jobs_sec_0809", "jobs_sec_1011", "jobs_sec_12",
        "jobs_sec_13", "jobs_sec_1415", "jobs_sec_16",
        "jobs_sec_17", "jobs_sec_18"],
      indNameLookup: {
        'jobs_total': 'Total Jobs',
        'hh': 'Households',
        'hh_pop': 'Household Population',
        'hhsize': 'Household Size',
        'housing_units': 'Housing Units',
        'jobs_sec_01': 'Natural Resources & Mining',
        'jobs_sec_02': 'Construction',
        'jobs_sec_0102': 'Nat. Resources, Mining, & Const.',
        'jobs_sec_03': 'Manufacturing',
        'jobs_sec_04': 'Wholesale Trade',
        'jobs_sec_05': 'Retail Trade',
        'jobs_sec_06': 'Transportation & Warehousing',
        'jobs_sec_07': 'Utilities',
        'jobs_sec_0607': 'Trans., Warehousing, & Utilities',
        'jobs_sec_08': 'Information',
        'jobs_sec_09': 'Financial Activities',
        'jobs_sec_0809': 'Information & Financial Activities',
        'jobs_sec_10': 'Professional, Scientific, & Technical Services',
        'jobs_sec_11': 'Management of Companies & Enterprises',
        'jobs_sec_1011': 'Prof. and Tech. Services & Corp. HQ',
        'jobs_sec_12': 'Admin., Support, & Waste Serv.',
        'jobs_sec_13': 'Education Services',
        'jobs_sec_14': 'Medical Facilities',
        'jobs_sec_15': 'Hospitals',
        'jobs_sec_1415': 'Healthcare Services',
        'jobs_sec_16': 'Leisure & Hospitality',
        'jobs_sec_17': 'Other Services',
        'jobs_sec_18': 'Public Administration',
        "pop": "Total Population",
        "gq_pop": "Group Quarters Population",
        "pop_age_00_04": "Population Age 0-4",
        "pop_age_00_17": "Population Age 0-17",
        "pop_age_05_17": "Population Age 5-17",
        "pop_age_18_24": "Population Age 18-24",
        "pop_age_25_44": "Population Age 25-44",
        "pop_age_25_54": "Population Age 25-54",
        "pop_age_25_64": "Population Age 25-64",
        "pop_age_45_64": "Population Age 45-64",
        "pop_age_55_64": "Population Age 55-64",
        "pop_age_65_84": "Population Age 65-84",
        "pop_age_18_64": "Population Age 18-64",
        "pop_age_85_inf": "Population Age 85+",
        "pop_age_65_inf": "Population Age 65+",
        "with_children": "With Children (Age 0-17)",
        "with_seniors": "With Seniors (Age 65+)",
        "hh_size_1": "With One Person Only",
        "hh_no_car_or_lt_workers": "With Fewer Cars than Workers",
    }
    }
  },
  computed: {
    selectedName: function () {
      return this.namesFromGeotype[this.geotype].lookup.get(this.selectedId.toString())
    },
    ageChart: function () {
      return [{
        labels: this.age_inds.map((i) => this.indNameLookup[i]),
        datasets: [
          {
            backgroundColor: [
              'rgb(32, 135, 140)',
              'rgb(106, 173, 122)',
              'rgb(189, 230, 112)',
              'rgb(189, 230, 112)',
              'rgb(255, 255, 128)',
              'rgb(255, 255, 128)',
              'rgb(255,255,255)'],
            borderColor: 'black',
            backgroundOpacity: 0.7,
            borderWidth: 1,
            data: this.age_inds.map((i) => this.report_data[i]['yr2050'] - this.report_data[i]['yr2020']),
          },
        ],
      }, {
        title: {
          text: 'Population Change by Age',
          fontSize: 18,
          fontColor: 'black',
          position: 'top',
          display: true,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: false,
              callback: (value) => {
                return this.format(value);
              }
            }
          }]
        },
        plugins: {
          datalabels: {
            color: 'black',
            textShadowBlur: 6,
            textShadowColor: 'white',
            display: true,
            font: {
              weight: 'bold',
            },
            formatter: this.format,
          },
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              label += this.format(tooltipItem.xLabel);
              return label;
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      }]
    },
    jobChart: function () {
      return [{
        labels: [2019, 2020, 2025, 2030, 2035, 2040, 2045, 2050],
        datasets: this.job_inds.map((i) => {
          return {
            label: this.indNameLookup[i],
            fill: false,
            pointRadius: 6,
            borderColor: this.job_ind_colors[i],
            data: this.job_years.map(y => this.report_data[i][y]),
          }
        }),
      }, {
        title: {
          text: 'Jobs by Sector',
          fontSize: 18,
          fontColor: 'black',
          position: 'top',
          display: true,
        },
        legend: {
          display: true,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: (value) => {
                return this.format(value);
              }
            }
          }]
        },
        plugins: {
          datalabels: {
            color: 'black',
            textShadowBlur: 6,
            textShadowColor: 'white',
            display: false,
            font: {
              weight: 'bold',
            },
            formatter: this.format,
          },
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          callbacks: {
            label: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label + ' ' || '';
              label += this.format(tooltipItem.yLabel);
              return label;
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      }]
    },
    summaryChart: function () {
      return [{
        labels: [2020, 2025, 2030, 2035, 2040, 2045, 2050],
        datasets: this.summary_inds.map((i) => {
          return {
            label: this.indNameLookup[i],
            fill: false,
            pointRadius: 6,
            borderColor: this.summary_inds_colors[i],
            data: this.years.map(y => this.report_data[i][y]),
          }
        }),
      }, {
        title: {
          text: 'Summary',
          fontSize: 18,
          fontColor: 'black',
          position: 'top',
          display: false,
        },
        legend: {
          display: true,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: (value) => {
                return this.format(value);
              }
            }
          }]
        },
        plugins: {
          datalabels: {
            color: 'black',
            textShadowBlur: 6,
            textShadowColor: 'white',
            display: false,
            font: {
              weight: 'bold',
            },
            formatter: this.format,
          },
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          callbacks: {
            label: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label + ' ' || '';
              label += this.format(tooltipItem.yLabel);
              return label;
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      }]
    },
  },
  methods: {
    format2dec: d3.format('.2f'),
    formatPercent: d3.format('.2%'),
    format: d3.format(','),
    sortObject: function (obj) {
      const sorted_names = Object.values(obj).sort()
      const city_ids = Object.keys(obj)
      let new_obj = new Map()
      for (let n = 0; n < sorted_names.length; n++) {
        for (let i = 0; i < city_ids.length; i++) {
          if (obj[city_ids[i]] === sorted_names[n]) {
            new_obj.set(city_ids[i], sorted_names[n])
          }
        }
      }
      return new_obj
    },
    filterRatio: function (ratio) {
      if (isFinite(ratio)) {
        ratio = this.format2dec(ratio)
      } else {
        ratio = "0"
      }
      return ratio
    },
    openToPrint: function () {
      let search = window.location.search || '?';
      window.open(
          window.location.pathname + search + '&print=true',
          "",
          " width=1200, height=1200"
      );
    },
    get_report_data: async function () {
      let areas = `${this.namesFromGeotype[this.geotype].column_name} = ${this.selectedId}`;
      if (this.selectedId === 8999) {
        areas = `large_area_id in (${this.large_area_ids.map(f => `${f}`).join(',')})`;
      }
      if (this.selectedId === 163) {
        areas = `large_area_id in (5, 3)`;
      }
      if (this.selectedId === 8005) {
        areas = `city_id in (1080, 3045)`;
      }
      if (this.selectedId === 8020) {
        areas = `city_id in (2165, 1130)`;
      }
      if (this.selectedId === 8015) {
        areas = `city_id in (5080, 4070)`;
      }
      if (this.selectedId === 8010) {
        areas = `city_id in (3065, 6120)`;
      }
      let indicators_query = this.hh_table_inds.concat(this.indicators_jobs);
      let inds = `indicator_ in (${indicators_query.map(f => `'${f}'`).join(',')})`;
      // create the Query object
      let queryObject = new Query();
      queryObject.where = areas + ` AND ` + inds
      queryObject.returnGeometry = false;

      queryObject.outStatistics = [{
        onStatisticField: "yr2019",
        outStatisticFieldName: "yr2019",
        statisticType: "sum"
      }, {
        onStatisticField: "yr2020",
        outStatisticFieldName: "yr2020",
        statisticType: "sum"
      },
        {
          onStatisticField: "yr2025",
          outStatisticFieldName: "yr2025",
          statisticType: "sum"
        },
        {
          onStatisticField: "yr2030",
          outStatisticFieldName: "yr2030",
          statisticType: "sum"
        },
        {
          onStatisticField: "yr2035",
          outStatisticFieldName: "yr2035",
          statisticType: "sum"
        },
        {
          onStatisticField: "yr2040",
          outStatisticFieldName: "yr2040",
          statisticType: "sum"
        }, {
          onStatisticField: "yr2045",
          outStatisticFieldName: "yr2045",
          statisticType: "sum"
        },
      {
          onStatisticField: "yr2050",
          outStatisticFieldName: "yr2050",
          statisticType: "sum"
        }];
      queryObject.groupByFieldsForStatistics = ["indicator_"];

      queryObject.outFields = ["indicator_, yr2019, yr2020, yr2025, yr2030, yr2035, yr2040, yr2045, yr2050"];
      let report_data = {}
      // call the executeQueryJSON() method

      await query.executeQueryJSON(this.queryUrl, queryObject).then(function (results) {
        let records = results.features
        records.map((r) => report_data[r.attributes.indicator_] = r.attributes)
      });
      report_data['hhsize'] = {};
      this.years.map((d) => {
        report_data['hhsize'][d] = this.filterRatio((report_data['hh_pop'][d] / report_data['hh'][d]))
      })
      report_data['jobs_sec_0102'] = {};
      this.job_years.map((d) => {
        report_data['jobs_sec_0102'][d] = report_data['jobs_sec_01'][d] + report_data['jobs_sec_02'][d]
      })
      report_data['jobs_sec_0607'] = {};
      this.job_years.map((d) => {
        report_data['jobs_sec_0607'][d] = report_data['jobs_sec_06'][d] + report_data['jobs_sec_07'][d]
      })
      report_data['jobs_sec_0809'] = {};
      this.job_years.map((d) => {
        report_data['jobs_sec_0809'][d] = report_data['jobs_sec_08'][d] + report_data['jobs_sec_09'][d]
      })
      report_data['jobs_sec_1011'] = {};
      this.job_years.map((d) => {
        report_data['jobs_sec_1011'][d] = report_data['jobs_sec_10'][d] + report_data['jobs_sec_11'][d]
      })
      report_data['jobs_sec_1415'] = {};
      this.job_years.map((d) => {
        report_data['jobs_sec_1415'][d] = report_data['jobs_sec_14'][d] + report_data['jobs_sec_15'][d]
      })
      this.report_data = report_data
    }
  },
  watch: {
    selectedFeature: function () {
      if (this.selectedFeature['geotype'] ) {
        this.geotype = this.selectedFeature.geotype
        if (this.geotype === 'mcd') {
          this.geotype = 'city'
        }
      }
      this.$emit('geotype', this.geotype)
      if (this.selectedFeature['geoid']) {
        this.selectedId = this.selectedFeature.geoid
      }
      this.get_report_data()
    },
    selectedId: function () {
      this.get_report_data()
      this.$emit('selected-id', this.selectedId)
    },
  },
  mounted() {
    fetch('land_gisad_whatnots_geo.json')
        .then(res => res.json())
        .then(res => {
          let communities = {};
          let largeareas = {};
          let counties = {};
          res.forEach(f => {
            if (f.geotype === 'city' || f.geotype === 'mcd') {
              communities[f.geoid] = f.area_name;
            } else if (f.geotype === 'largearea') {
              largeareas[f.geoid] = f.area_name;
            } else if (f.geotype === 'county') {
              counties[f.geoid] = f.area_name;
            }
          });
          this.namesFromGeotype['city'].lookup = this.sortObject(communities)
          this.namesFromGeotype['largearea'].lookup = this.sortObject(largeareas)
          this.namesFromGeotype['county'].lookup = this.sortObject(counties)
        });

    this.get_report_data()
  }
}
</script>

<style>
#report {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 8% 8% 8%;
}

table {
  background: #FFFFFF;
  margin-bottom: 1.25rem;
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
}
  table caption {
    background: transparent;
    color: #222222;
    font-size: 1rem;
    font-weight: bold; }
  table thead {
    background: #F5F5F5; }
    table thead tr th,
    table thead tr td {
      font-size: 0.875rem;
      font-weight: bold;
      color: #222222; }
  table tfoot {
    background: #F5F5F5; }
    table tfoot tr th,
    table tfoot tr td {
      font-size: 0.875rem;
      font-weight: bold;
      color: #222222; }
  table tr th, table tr td {
    padding: 0.3rem 0.625rem;
    font-size: 0.875rem;
    color: #222222;
    text-align: right; }
  table tr th:first-child {
    text-align: left;
  }
  table tr.even, table tr.alt, table tr:nth-of-type(even) {
    background: #F9F9F9; }
  table thead tr th,
  table tfoot tr th,
  table tfoot tr td,
  table tbody tr th,
  table tbody tr td,
  table tr td {
    display: table-cell;
    line-height: 0.8rem;
    background: white; }


table thead tr:first-child th {
  text-align: center;
}

table thead tr:last-child th {
  border-bottom-style: solid;
  background: white;
}

table tr .tableChangGap {
  width: 2%;
  background: white;
  border-color: white;
}

table tbody tr th {
  padding-left: 1.5em;
  font-weight: inherit;
}

table tbody tr.not_indent th {
  padding-left: 0.625rem;
  font-weight: bold;
}

table tbody tr.dashed th, table tbody tr.dashed td {
  border-top-style: dashed;
  border-top-width: 1px;
  border-top-left-radius: .1px;
}

.report-footer h6 {
  text-align: center;
  padding-top: 20px;
}

@media print {
  .report-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

.report-header {
  align-content: center;
  padding-bottom: 20px;
}

#exit-button, #print-button {
  float: right;
  text-align: center;
  border-radius: 4px;
  padding-top: 0.4em;
  padding-right: 0.4em;
  padding-bottom: 0.4em;
  padding-left: 0.4em;
  margin: 5px;
  font-size: 1.6em;
}

#infoPane #print-button {
  font-size: 0.5em;
}

.controls {
  background-color: #ffffff;
  padding: 5px;
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 2px;
  border: solid 2px #000000;
  border-radius: 10px;
}

.name {
  margin: 0;
  border-radius: 0;
  background-color: white;
  opacity: 0.9;
  padding: 4px;
  pointer-events: auto;
}

@media (max-width: 1300px) {
  .name {
    margin: 0;
    border-radius: 0;
  }
}

@media (max-width: 1000px) {
  .name {
    padding: 10px 10px 5px;
  }
  table tr th, table tr td {
    padding: 0.2rem 0.425rem;
    font-size: 0.75rem;
    color: #222222;
    text-align: right;
  }
  #report {
    padding: 0 4% 4% 4%;
  }
  .controls {
    grid-template-columns:  unset;
    display: block;
  }
}

.comm_dropdown {
  max-width: 75%;
}

.comm_dropdown {
  border-bottom: solid black 2px;
  border-top: solid black 0;
  border-left: solid black 0;
  border-right: solid black 0;
}

.comm_dropdown:focus {
  outline: 0;
  border-color: black;
}

.comm_dropdown option {
  font-size: 0.8rem;
}

.print-only {
  display: none !important; }

@media print {
  .no-print {
    display: none !important;
  }

  .print-only {
    display: block !important;
  }

  .report-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  #report{
    display: block !important;
    grid-row: unset !important;
    grid-column: unset !important;
    margin: auto !important;
    position: relative;
  }

  .chartjs-size-monitor-expand > div {
    position: fixed !important;
  }

  .chartjs-size-monitor,
  .chartjs-size-monitor-shrink,
  .chartjs-size-monitor-expand,
  .chartjs-size-monitor-expand > div {
    position: fixed !important;
  }

  .page-break {
    page-break-before: always !important;
  }
}

</style>
