<template>
  <div id="report" v-if="report_data" style="margin: auto">
    <div class="controls no-print">
      <div style="margin-left: 36px;">
        <span style="margin-left: 5px; margin-right: 3px; font-weight: bolder; font-size: 1.2em;">Selected {{selectedGeoType}} is</span>
        <select v-if="geotypeLookup"
            style="font-weight: bolder; font-size: 1.1em;" class='comm_dropdown'
                v-on:change="selectedId = $event.target.value; $emit('dropdown-change');">
          <option disabled value="">Choose a {{ selectedGeoType }}</option>
          <option
              v-bind:value="8999"
              v-bind:selected="!selectedId"
          >Southeast Michigan
          </option>
          <option
              v-for="key in Object.keys(this.geotypeLookup)"
              v-bind:key="key"
              v-bind:value="key"
              v-bind:selected="selectedId===parseInt(key, 10)"
          >{{ geotypeLookup[key]}}
          </option>
        </select>
        <calcite-button icon-start="print" kind="neutral" style="margin-left: 20px;" v-on:click="openToPrint()">Print</calcite-button>
        <calcite-button icon-start="reset" kind="neutral" style="margin-left: 20px;" v-on:click="selectedId = 8999">Reset to Region</calcite-button>
        <span style="display: inline-block; left: 15px; position: relative; top: 3px;">
          <calcite-loader v-if="loaded === false" inline="false" type="indeterminate"
                          label="Loading report..."></calcite-loader>
        </span>
      </div>
    </div>
    <img src="header_report_new.png" alt="logo" width="50%" style="align-content: center; margin-top: 20px; margin-bottom: 10px;" class="no-print">
    <h1>{{ selectedName || 'Southeast Michigan' }} - 2050 Forecast Summary Report</h1>
    <lineChart v-bind:chartData="summaryChart[0]"
               v-bind:options="summaryChart[1]"
               v-bind:style="chartStyle"/>

    <h2 class="page-break">Population and Households</h2>
    <table style="width: 100%; box-shadow: 2px 2px 17px #cbc7c7;">
      <thead>
      <tr>
        <th style="width: 20%"></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="tableChangGap"></th>
        <th colspan="2" style="width: 15%">Change 2020 - 2050</th>
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
        <td v-if="report_data[ind]">{{filterPercent((report_data[ind]['yr2050'] - report_data[ind]['yr2020']) / report_data[ind]['yr2020'])}}</td>
      </tr>
      </tbody>
    </table>

    <h2 v-if="!(geotype=== 'schooldistrict' || geotype === 'isd')" class="page-break">Employment by Sector</h2>
    <table v-if="!(geotype=== 'schooldistrict' || geotype === 'isd')"
        style="width: 100%; box-shadow: 2px 2px 17px #cbc7c7;">
      <thead>
      <tr>
        <th style="width: 25%"></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="tableChangGap"></th>
        <th colspan="2" style="width: 15%">Change 2019 - 2050</th>
      </tr>
      <tr>
        <th></th>
        <th>2019</th>
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
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2030'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2040'])}}</td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2050'])}}</td>
        <td class="tableChangGap"></td>
        <td v-if="report_data[ind]">{{format(report_data[ind]['yr2050'] - report_data[ind]['yr2019'])}}</td>
        <td v-if="report_data[ind]">{{filterPercent((report_data[ind]['yr2050'] - report_data[ind]['yr2019']) / report_data[ind]['yr2019'])}}</td>
      </tr>
      </tbody>
    </table>

    <lineChart
        v-if="!(geotype=== 'schooldistrict' || geotype === 'isd')"
        v-bind:chartData="jobChart[0]"
               v-bind:options="jobChart[1]"
               v-bind:style="chartStyle"/>
    <div>
      <p class="report-footer">1001 Woodward, Suite 1400  •  Detroit, Michigan 48226  •  (313) 961-4266  •  Fax (313) 961-4869  •
        <a href="https://semcog.org">semcog.org</a></p>
    </div>
  </div>
</template>

<script>
import * as query from "@arcgis/core/rest/query"
import Query from "@arcgis/core/rest/support/Query"
import * as d3 from 'd3'
import debounce from 'lodash.debounce'
import lineChart from "./lineChart.vue"
import "@esri/calcite-components/dist/components/calcite-button";

export default {
  name: 'reportComponent',
  components: {
    lineChart
  },
  props: ['selectedFeature', 'geotype', 'namesFromGeotype'],
  data: function () {
    return {
      report_data: null,
      loaded: false,
      queryUrl: "https://gis.semcog.org/server/rest/services/Hosted/whatnots_13sectors_refinement_combined/FeatureServer/0",
      selectedId: this.selectedFeature.geoid || 8999,
      chartStyle: {width: '100%', height: '500px'},
      large_area_ids: [3, 5, 93, 99, 115, 125, 147, 161],
      not_indent: {"pop": true, "housing_units": true, "hhsize": true, "hh": true},
      dash: {"hh_pop": true, "pop_age_00_04": true, "housing_units": true, 'pop_race_1': true, "hh": true},
      years: ['yr2020', 'yr2025', 'yr2030', 'yr2035', 'yr2040', 'yr2045', 'yr2050'],
      job_years: ['yr2019', 'yr2020', 'yr2025', 'yr2030', 'yr2035', 'yr2040', 'yr2045', 'yr2050'],
      hh_table_inds: ["pop", "hh_pop", "gq_pop",
      "pop_age_00_04","pop_age_05_17","pop_age_18_24", "pop_age_25_64","pop_age_65_84", "pop_age_85_inf",
      "housing_units", "hhsize", "hh", "with_children", "without_children", "with_seniors", "without_seniors", "hh_size_1"],
      hh_inds: ["pop", "hh_pop", "gq_pop",
        "pop_age_00_04", "pop_age_05_17", "pop_age_18_24","pop_age_25_64", "pop_age_65_84", "pop_age_85_inf",
        "housing_units", "hhsize", "hh", "with_children","without_children", "with_seniors", "without_seniors", 'hh_size_1'],
      age_inds: ["pop_age_85_inf", "pop_age_65_84", "pop_age_25_64", "pop_age_18_24", "pop_age_05_17", "pop_age_00_04"],
      summary_inds_colors: {
        'pop': '#5F4690',
        'pop_age_05_17': '#cebc3f',
        'hh': '#1D6996',
        'housing_units': '#38A6A5',
        'jobs_total': '#0F8554',
      },
      job_inds: ["jobs_sec_02", "jobs_sec_04", "jobs_sec_06", "jobs_sec_07", "jobs_sec_10"],
      job_ind_colors: {
        'jobs_sec_02': '#ba00ff',
        'jobs_sec_04': '#f39e9e',
        'jobs_sec_06': '#e11b08',
        'jobs_sec_07': '#0a6ea9',
        'jobs_sec_10': '#f50578'
      },
      indicators_jobs: ["jobs_total", "jobs_sec_01", "jobs_sec_02", "jobs_sec_03", "jobs_sec_04",
        "jobs_sec_05", "jobs_sec_06", "jobs_sec_07", "jobs_sec_08",
        "jobs_sec_09", "jobs_sec_10", "jobs_sec_11", "jobs_sec_12",
        "jobs_sec_13"],
      indicators_table_jobs:["jobs_total", "jobs_sec_01", "jobs_sec_02", "jobs_sec_03", "jobs_sec_04",
        "jobs_sec_05", "jobs_sec_06", "jobs_sec_07", "jobs_sec_08",
        "jobs_sec_09", "jobs_sec_10", "jobs_sec_11", "jobs_sec_12",
        "jobs_sec_13"],
      indNameLookup: {
        'jobs_total': 'Total Jobs',
        'hh': 'Households',
        'hh_pop': 'Household Population',
        'hhsize': 'Household Size',
        'housing_units': 'Housing Units',
        'jobs_sec_01': 'Nat Res & Construction',
        'jobs_sec_02': 'Manufacturing',
        'jobs_sec_03': 'Wholesale Trade',
        'jobs_sec_04': 'Retail Trade',
        'jobs_sec_05': 'Transportation & Utlities',
        'jobs_sec_06': 'Info. & Fin. Activities',
        'jobs_sec_07': 'Prof./Tech. Serv. & Corp HQ',
        'jobs_sec_08': 'Admin, Supp., & Waste Serv.',
        'jobs_sec_09': 'Education Services',
        'jobs_sec_10': 'Healthcare Services',
        'jobs_sec_11': 'Leisure and Hospitality',
        'jobs_sec_12': 'Other Services',
        'jobs_sec_13': 'Public Administration',
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
        "pop_age_18_inf": "Population Age 18+",
        "pop_race_1": "Population Non Hispanic White",
        "pop_race_2": "Population Non Hispanic Black",
        "pop_race_3": "Population Hispanic",
        "pop_race_4": "Population Non Hispanic Other",
        "with_children": "With Children (Age 0-17)",
        "without_children": "Without Children (Age 0-17)",
        "with_seniors": "With Seniors (Age 65+)",
        "without_seniors": "Without Seniors (Age 65+)",
        "hh_size_1": "With One Person Only",
        "hh_no_car_or_lt_workers": "With Fewer Cars than Workers",
    }
    }
  },
  computed: {
    selectedName: function () {
      let name = ''
      if (this.geotypeLookup) {
        name = this.geotypeLookup[this.selectedId]
      }
      return name
    },
    selectedGeoType: function () {
      return this.namesFromGeotype[this.geotype].singularName
    },
    geotypeLookup: function () {
      let lookup = {}
      if (this.namesFromGeotype[this.geotype].lookup){
        lookup = this.namesFromGeotype[this.geotype].lookup
      }
      return lookup
    },
    queryStats: function () {
      let stats = [{
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
        }]

      if (this.geotype === 'schooldistrict' || this.geotype === 'isd') {
        stats = [{
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
          }]
      }
      return stats
    },
    summary_inds: function () {
      return ["pop", "hh", "jobs_total", "housing_units"]
    },
    summarySchool_inds: function () {
      return ["pop", "pop_age_05_17", "hh", "housing_units"]
    },
    jobChart: function () {
      return [{
        labels: ['1/1/2019', '1/1/2020', '1/1/2025', '1/1/2030', '1/1/2035', '1/1/2040', '1/1/2045', '1/1/2050'],
        datasets: this.job_inds.map((i) => {
          return {
            label: this.indNameLookup[i],
            fill: false,
            pointRadius: 6,
            borderColor: this.job_ind_colors[i],
            data: this.job_years.map(y => this.report_data[i] ? this.report_data[i][y] : 0 ),
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
          labels: {
            fontColor: "black",
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: 'black',
              fontStyle: 'bold',
              beginAtZero: true,
              callback: (value) => {
                return this.format(value);
              }
            }
          }],
          xAxes: [{
            type: 'time',
            time: {
              unit: 'year',
              displayFormats: {
                year: 'YYYY'
              }
            },
            distribution: 'linear',
            ticks: {
              source: 'labels',
              fontColor: 'black',
              fontStyle: 'bold',
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
            title: (tooltipItem) => {
              let year = new Date(tooltipItem[0].label).getFullYear()
              return year
            },
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
      let datasets = []
      if ((this.geotype === 'schooldistrict' || this.geotype === 'isd')) {
        datasets = this.summarySchool_inds.map((i) => {
          return {
            label: this.indNameLookup[i],
            fill: false,
            pointRadius: 6,
            backgroundColor: this.summary_inds_colors[i],
            borderColor: this.summary_inds_colors[i],
            data: this.years.map(y =>  this.report_data[i] ? this.report_data[i][y] : 0),
          }
        })
      } else {
        datasets = this.summary_inds.map((i) => {
          return {
            label: this.indNameLookup[i],
            fill: false,
            pointRadius: 6,
            backgroundColor: this.summary_inds_colors[i],
            borderColor: this.summary_inds_colors[i],
            data: this.years.map(y =>  this.report_data[i] ? this.report_data[i][y] : 0),
          }
        })

        let line_job_data_2019 = this.report_data['jobs_total'] ? this.report_data['jobs_total']['yr2019'] : 0
        let line_job_data_2025 = this.report_data['jobs_total'] ? this.report_data['jobs_total']['yr2025'] : 0

        let line_continue = {
          fill: false,
          label: '2019-2025 Total Jobs',
          pointRadius: 6,
          backgroundColor: this.summary_inds_colors['jobs_total'],
          borderColor: this.summary_inds_colors['jobs_total'],
          borderDash: [6, 6],
          data: [line_job_data_2019, line_job_data_2025]
        }
        let scatter = {
          label: '2019 Total Jobs Level',
          type: 'scatter',
          pointRadius: 7,
          backgroundColor: '#e50707',
          data: [{
            x: 2020,
            y: line_job_data_2019
          }],
        }

        datasets.push(scatter)
        datasets.push(line_continue)
      }
      return [{
        labels: [2020, 2025, 2030, 2035, 2040, 2045, 2050],
        datasets: datasets,
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
          labels: {
            fontColor: "black",
             usePointStyle: true
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: 'black',
              fontStyle: 'bold',
              beginAtZero: true,
              callback: (value) => {
                return this.format(value);
              }
            }
          }],
          xAxes: [{
            ticks:{
              fontColor: 'black',
              fontStyle: 'bold',
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
    formatPercent: d3.format('.1%'),
    filterPercent: function (percent) {
      if (!isNaN(percent) && isFinite(percent)) {
        percent = d3.format('.1%')(percent)
      } else {
        percent = "N/A"
      }
      return percent
    },
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
        ratio = 0
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
    get_report_data: debounce(async function () {
      let id = parseInt(this.selectedId, 10)
      let areas = `city_id = ${id}`;
      let indicators_query = this.hh_inds.concat(this.indicators_jobs);
      if (this.geotype === 'zone') {
        areas = `zone_id = ${id}`;
      }
      if (this.geotype === 'schooldistrict') {
        areas = `school_id = ${id}`;
        indicators_query = this.hh_inds
      }
      if (this.geotype === 'isd') {
        areas = `isd_id = ${id}`;
        indicators_query = this.hh_inds
      }
      if (id === 5) {
        areas = `large_area_id in (5)`;
      }
      if (id === 3 && this.geotype === 'county') {
        areas = `large_area_id in (3)`;
      }
      if (id === 93 && this.geotype === 'county') {
        areas = `large_area_id in (93)`;
      }
      if (id === 99 && this.geotype === 'county') {
        areas = `large_area_id in (99)`;
      }
      if (id === 115 && this.geotype === 'county') {
        areas = `large_area_id in (115)`;
      }
      if (id === 125 && this.geotype === 'county') {
        areas = `large_area_id in (125)`;
      }
      if (id === 147 && this.geotype === 'county') {
        areas = `large_area_id in (147)`;
      }
      if (id === 161 && this.geotype === 'county') {
        areas = `large_area_id in (161)`;
      }
      if (id === 163 && this.geotype === 'county') {
        areas = `large_area_id in (5, 3)`;
      }
      if (id === 8005) {
        areas = `city_id in (1080, 3045)`;
      }
      if (id === 8020) {
        areas = `city_id in (2165, 1130)`;
      }
      if (id === 8015) {
        areas = `city_id in (5080, 4070)`;
      }
      if (id === 8010) {
        areas = `city_id in (3065, 6120)`;
      }
      if (id === 8025) {
        areas = `city_id in (3090, 6142)`;
      }

      if (id === 8999) {
        areas = `region_id = 8999`;
      }

      let inds = `indicator_ in (${indicators_query.map(f => `'${f}'`).join(',')})`;
      // create the Query object
      let queryObject = new Query();
      console.log(areas)
      queryObject.where = areas + ` AND ` + inds
      queryObject.returnGeometry = false;

      queryObject.outStatistics = this.queryStats;
      queryObject.groupByFieldsForStatistics = ["indicator_"];

      queryObject.outFields = ["indicator_, yr2019, yr2020, yr2025, yr2030, yr2035, yr2040, yr2045, yr2050"];
      let report_data = {}
      // call the executeQueryJSON() method
      if (this.geotype === 'schooldistrict' || this.geotype === 'isd') {
        queryObject.outFields = ["indicator_, yr2020, yr2025, yr2030, yr2035, yr2040, yr2045, yr2050"];
      }
      await query.executeQueryJSON(this.queryUrl, queryObject).then(function (results) {
        let records = results.features
        records.map((r) => report_data[r.attributes.indicator_] = r.attributes)
      }).then(() => this.loaded = true);
      report_data['hhsize'] = {};
      this.years.map((d) => {
        report_data['hhsize'][d] = this.filterRatio((report_data['hh_pop'][d] / report_data['hh'][d]))
      })
      this.report_data = report_data
    }, 500)
  },
  watch: {
    selectedFeature: function () {
      this.loaded = false
      this.get_report_data()
      if (this.selectedFeature['geoid']) {
        this.selectedId = this.selectedFeature.geoid
      }
    },
    selectedId: {
      immediate: true,
      handler: function () {
        this.loaded = false
        this.get_report_data()
        this.$emit('selected-id', this.selectedId)
        this.$emit('geotype', this.geotype)
      }
    },
  },
  mounted() {
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
  padding: 0 5% 5% 5%;
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

.report-footer {
  text-align: center;
  padding-top: 20px;
  margin-top: 25px;
}

@media print {
  .report-footer {
    text-align: center;
    padding-top: 20px;
    margin-top: 25px;
    position: relative;
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
  font-size: medium;
  font-weight: bolder;
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

  #report{
    display: block !important;
    grid-row: unset !important;
    grid-column: unset !important;
    margin: auto !important;
    padding: unset !important;
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
