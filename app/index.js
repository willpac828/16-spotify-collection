import 'whatwg-fetch';

import Vue from 'vue';
import application from './components/application.vue';

new Vue({
  ...application,  // using lesson 05-02 as template
  // The class of the element that we want to the template to go to
  el: '.app'
});
