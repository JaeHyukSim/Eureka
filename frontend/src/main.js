import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import "./filters"
import Chat from 'vue-beautiful-chat'
import firebase from 'firebase'

import vueMoment from 'vue-moment'
Vue.use(vueMoment)

require("firebase/firestore");
// var firebaseConfig = {
//   apiKey: "AIzaSyCxsTzWbVyhonjACmIQ2LIuszBqiy_fvUw",
//   authDomain: "vue-chat-46968.firebaseapp.com",
//   projectId: "vue-chat-46968",
//   storageBucket: "vue-chat-46968.appspot.com",
//   messagingSenderId: "1034073840289",
//   appId: "1:1034073840289:web:e96b6a96300eadbe2caee0",
//   measurementId: "G-DHZVJ4ZFMC"
// };
var firebaseConfig = {
  apiKey: "AIzaSyC3kKewULtMzCWV2TNUYh17G5TxEyPgEHg",
  authDomain: "chat-b5174.firebaseapp.com",
  projectId: "chat-b5174",
  storageBucket: "chat-b5174.appspot.com",
  messagingSenderId: "267859312711",
  appId: "1:267859312711:web:ef517cdef75843a2e1f162",
  measurementId: "G-KWVN929F4Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
window.db = db;
Vue.config.productionTip = false;
Vue.use(Chat)

db.settings({
  timestampsInSnapshots: true
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
  mounted () {
    const IMP = window.IMP;
    IMP.init("imp06841011")
  }
}).$mount('#app')
