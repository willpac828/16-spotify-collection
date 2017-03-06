import 'whatwg-fetch';

import Vue from 'vue';
import application from './components/application.vue'

new Vue({
  ...application,  // using lesson 05-02 as template
  el: '.app'
})
