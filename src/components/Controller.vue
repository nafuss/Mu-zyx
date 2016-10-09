<template>
  <div class="player">
    <div class="controller">
      <button class="button-controller">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
      </button>
      <button class="button-controller" @clcik="">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
      </button>
      <button class="button-controller" @click="next()">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
      </button>
    </div>

    <!-- <youtube-player></youtube-player> -->
    <!-- <div id="ytplayer"></div> -->

    <div class="time-controller">
        <div class="time-ellapsed"></div>
        <div class="time-shime"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        videoID: 'LWIaq62kU44',
        playlistID: 'PLEgNqLmZpLuI9ajUy3Hg97NrpssG4repu',
        playPlaylist: '?listType=playlist&list=',
        url: ''
      }
    },
    computed: {
    },
    methods: {
    },
    mounted () {
      this.url = 'http://www.youtube.com/embed' + this.videoID + '?autoplay=1' // + this.playPlaylist + this.playlistID
    },
    components: {
    }
  }
</script>

<style>
.player{
  position: relative;
  z-index: 50;
}
#ytplayer{
  position: absolute;
  bottom: 0;
  height: 10vh; /*8*/
  width: 100%;
  z-index: 1;
  /*visibility: hidden;*/
}
.controller{
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #FFF;
  box-shadow: 0 -1px 1.5em #000;
  width: 100%;
  height: 8vh;
  z-index: 2
}
.button-controller {
  border: none;
  background-color: #FFF;
  background-color: #FFF;
}
.button-controller svg{
  height: 48px;
  width: 48px;
  margin: 0;
  padding: 0;
  fill: #911F27;
}
.button-black svg{
  fill: #000;
}
.time-controller{
  position: relative;
  display: flex;
  flex-direction: row;
  height: 1.5em;
  background-color: #911F27;
  z-index: 3;
}
.time-ellapsed {
  position: relative;
  width: 15%;
  height: 100%;
  background-color: #911F27;
  z-index: 2;
}
.time-shime{
  position: relative;
  flex: 1;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 10;
}
</style>
