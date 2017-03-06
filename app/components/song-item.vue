<template lang="html">
    // we can call track anything
  <div v-for="track in tracks" class="media">
    <div class="media-left">
      <img src="#" alt="" class="media-img">
    </div>
    <div class="media-content">
      <h2>{{tracks.items[0].album.artists[0].name}}</h2>
      <p>{{tracks.items[0].album.name}}</p>
    </div>
    <div class="media-right">
      <span class="icon is-small"><i class="fa fa-spotify" aria-hidden="true"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['track'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
