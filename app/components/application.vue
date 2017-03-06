<template lang="html">
  <div class="app">
    <div class="section">
      <div class="panel">
        <div class="panel-block">
          <input type="text" class="input is-small">
           <!-- We need to use variable "tracks" b/c we put it in our data() -->
          <div class="tracks">

          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
import SongItem from './song-item.vue';
export default {
  components: {
    SongItem,
  },

  created() {
    fetch('https://api.spotify.com/v1/search?query=katy&type=track&offset=0&limit=20')
    .then(response => response.json())
    .then((tracks) => {
      this.tracks = tracks;
    });
  },

  data() {
    return {
      tracks: [],
    };
  },

  methods: {

  },
};
</script>
