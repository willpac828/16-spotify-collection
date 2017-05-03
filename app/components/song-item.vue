<template lang="html">
    // we can call track anything
  <div class="media is-fullwidth">
    <div class="media-left">
      <img :src="track.album.images[0].url" alt="" class="media-img">
    </div>
    <div class="media-content">
      <h2>{{track.album.artists[0].name}}</h2>
      <p>{{track.album.name}}</p>
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

  created() {

  },

  methods: {

  },
};
</script>
