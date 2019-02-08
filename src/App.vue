<template>
  <div id="app">
    <Grid :style="{height: '280px'}"
          :data-items="items"
          :columns="columns">
    </Grid>


  </div>
</template>

<script>
import { Button } from '@progress/kendo-buttons-vue-wrapper'
import { Grid } from '@progress/kendo-vue-grid';

export default {
  name: 'app',
  components: {
    Button,
    Grid
  },
  data: function () {
        return {
            items: [],
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' }
            ]
        };
    },
    methods: {
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
            }));
        }
    },
    mounted() {
        this.items = this.createRandomData(50);
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
