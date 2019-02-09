<template>
  <div id="form">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="form">
            <div class="row">
              <div class="col-lg-1">
                <label for="name">Nombre</label>
              </div>
              <div class="col-lg-3">
                <input type="text" placeholder="Pedro" v-model="form.name">
              </div>
              <div class="col-lg-1 offset-lg-1">
                <label for="lastName">Apellido 
                  </label>
              </div>
              <div class="col-lg-3">
                <input type="text" placeholder="Pérez" v-model="form.lastName">
              </div>
            </div>
            <div class="row">
              <div class="col-lg-1"><label for="email">Correo </label></div>
              <div class="col-lg-3"><input type="email" placeholder="pedro.perez@correo.com" v-model="form.email"></div>
              <div class="col-lg-1 offset-lg-1"><label for="gender">Sexo </label></div>
              <div class="col-lg-3">

                <div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input" id="Femenino" name="sex" value="F" v-model="form.sex"><label for="Femenino" class="form-check-label">Femenino</label>
                </div>
                <div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input" id="Masculino" name="sex" value="M" v-model="form.sex"><label for="Masculino" class="form-check-label">Masculino</label>
                </div>
              </div>
              
            </div>
            <div class="row">
              <div class="col-lg-1">
                <label for="country" align="right">País </label>
              </div>
              <div class="col-lg-3">
                <kendo-autocomplete :data-source="countries"
                            :data-text-field="'name'"
                            :placeholder="'País de nacimiento'"
                            :filter="'contains'"
                            :value="countries.value"
                            v-model="form.country">
                </kendo-autocomplete>
              </div>
              <div class="col-lg-1 offset-lg-1">
                <label for="city">Ciudad</label>
              </div>
              <div class="col-lg-3">

                <input type="text" name="city" id="city" placeholder="Acarigua" @blur="getCoords" v-model="form.city">
              </div>
              <div class="col-lg-4"><kendo-button icon="check" @click="sendForm">Enviar</kendo-button></div>
              <kendo-notification ref="popupNotification"></kendo-notification>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';
import { Button } from '@progress/kendo-buttons-vue-wrapper'

import axios from 'axios';
const coordsAPI = process.env.VUE_APP_KEY;
  export default {
    components: {
      Button,
      AutoComplete
    },
    props: ['peopleRef'],
    data: function() {
      return {
        form: {
          name: '',
          lastName: '',
          email: '',
          sex: '',
          country: '',
          city: '',
          latLng: []
        },
        countries: [
          {name: 'México', value: 'MX'},
          {name: 'Venezuela', value: 'VE'},
          {name: 'Estados Unidos', value: 'US'},
          {name: 'Brasil', value: 'BR'},
        ]
      }
    },
    methods: {
      getCoords: function() {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.form.city}&appid=${coordsAPI}`)
          .then(response => {
            console.log(response)
            this.form.latLng[0] = response['data']['coord']['lat'];
            this.form.latLng[1] = response['data']['coord']['lon'];
            return this.latLng;
            }
          )
        console.log(this.latLng);
        return this.latLng
      },
      sendForm: function() {
        if (this.form.latLng.length > 0) {
          this.peopleRef.push(this.form);
          this.form.name = '';
          this.form.lastName = '';
          this.form.email = '';
          this.form.sex = '';
          this.form.country = '';
          this.form.city = '';
          this.form.latLng = [];
          return this.showPopupNotification('Registro agregado correctamente 😊😊😊', 'success');
        } else {
          return this.showPopupNotification('Las coordenadas de la ubicación no son válidas ✋🏽', 'error')
        }
        
      },
      showPopupNotification: function (message, type) {
        this.popupNotificationWidget.show(message, type);
      }

    },
    mounted: function () {
      this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();
    }
    
  }
</script>

<style scoped>

</style>