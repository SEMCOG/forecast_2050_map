<script>
  import {Line, mixins} from 'vue-chartjs'
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  export default {
    extends: Line,
    components: {
      ChartDataLabels,
    },
    mixins: [mixins.reactiveProp],
    props: ['options'], // chartData added by the reactiveProp
    name: "lineChart",
    mounted() {
      this.renderChart(this.chartData, this.options)
    },
  }
</script>

<style scoped>

</style>
