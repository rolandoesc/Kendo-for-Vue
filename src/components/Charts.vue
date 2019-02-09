<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <kendo-chart :title-text="'Gráfica por Sexo'"
                 :series="series"
                 :category-axis-categories="categories"
                 :theme="'sass'">
          </kendo-chart>

        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Chart,
  ChartSeriesItem } from '@progress/kendo-charts-vue-wrapper'
  export default {
    components: {
      Chart
    },
    props: ['peopleData'],
    data: function () {
      return {
        series: [this.peopleData.filter(p => p['sex'] === 'F').length, this.peopleData.filter(p => p['sex'] === 'M').length],
        categories: ['Femenino', 'Masculino']
        
      }

    },
    mounted: function() {
      console.log(this.peopleData)
      console.log(this.series)
    }
    
  }
</script>

<style scoped>

</style>