<template>
  <div>
    <Grid :style="{height: '280px'}"
          :data-items="peopleRef"
          :columns="columns">
    </Grid>
  </div>
</template>

<script>
import { Grid } from '@progress/kendo-vue-grid';
  export default {
    components: {
      Grid
    },
    props: ['peopleRef'],
    data: function() {
      return {
        columns: [
                { field: 'name', title: 'Nombre'},
                { field: 'lastName', title: 'Apellido' },
                { field: 'sex', title: 'Sexo'},
                { field: 'country', title: 'País' },
                { field: 'city', title: 'Ciudad'}
            ]
      }
    }
    
  }
</script>

<style scoped>

</style>