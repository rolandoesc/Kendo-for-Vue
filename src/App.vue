<template>
  <div id="app">
    <Map :peopleLocation="people"></Map>
    <Charts :peopleData="people"></Charts>
    <Grid :peopleRef="people"></Grid>
    <Form :peopleRef="peopleRef"></Form>


  </div>
</template>

<script>

import Form from './components/Form'
import Grid from './components/Grid'
import Map from './components/Map'
import Charts from './components/Charts'
import Firebase from 'firebase'
// let config = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASEURL,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGINGID
// }

let config = {
    apiKey: "AIzaSyDU-wj9n-oXUv22gwhji-PyvTUES0zydj4",
    authDomain: "fs1prod-956c5.firebaseapp.com",
    databaseURL: "https://fs1prod-956c5.firebaseio.com",
    projectId: "fs1prod-956c5",
    storageBucket: "fs1prod-956c5.appspot.com",
    messagingSenderId: "461230123514"
  };

let app = Firebase.initializeApp(config);
let db = app.database();

let peopleRef = db.ref('people');

export default {
  name: 'app',
  components: {
    Grid,
    Form,
    Map,
    Charts
  },
  firebase: {
    people: peopleRef
  },
  data: function () {
        return {
            peopleRef : peopleRef
        };
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
