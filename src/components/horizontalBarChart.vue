<script>
  import {HorizontalBar, mixins} from 'vue-chartjs'
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  export default {
    extends: HorizontalBar,
    components: {
      ChartDataLabels,
    },
    mixins: [mixins.reactiveProp],
    props: ['options'], // chartData added by the reactiveProp
    name: "horizontalBar",
    mounted() {
      this.renderChart(this.chartData, this.options)
    },
  }
</script>

<style scoped>

</style>
