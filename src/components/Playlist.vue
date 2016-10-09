<template>
  <div class="view">
    <!-- Separate components ?-->
    <div class="title">
      <h1>{{ title }}</h1>
      <view-controller v-on:select="selectView"></view-controller>
    </div>

    <div class="playlist">
      <carousel v-if="carousel" :playlist="playlist">
        <carousel-slide class="slides thumbnail-stacks" v-for="(i, index) of playlist" :key="index" :index="index" v-on:selection="loadDetails">
          <div class="playlist-title">
            <h2>{{ index }} - {{ i.snippet.title }}</h2>
          </div>
          <!-- <button class="play-button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button> -->
          <img :src="i.snippet.thumbnails.maxres.url" class="slide-thumbnail" alt="Thumbnail">
        </carousel-slide>
      </carousel>
      <carousel-detail v-show="videos" :showDetails="showDetails">
        <li class="song-items" v-for="(video, index) of videos" :key="index" :index="index">
          <span class="play-thumbnail">
            <button class="play-button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
            <img class="thumbnail" :src="video.snippet.thumbnails.maxres.url">
          </span>

          <span class="song-info">
            <h5>{{ video.snippet.title }}</h5>
            <span>01 : 30</span>
          </span>
        </li>
      </carousel-detail>
      <!-- <list v-if="list" :playlist="playlist"></list> -->
      <!-- <module v-if="module"></module> -->
    </div>
  </div>
</template>

<script>
import ViewController from './ViewController'
import Carousel from './Playlist/Carousel'
import CarouselSlide from './Playlist/CarouselSlide'
import CarouselDetail from './Playlist/CarouselDetail'
import List from './Playlist/List'
import Module from './Playlist/Module'

import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      title: 'Playlist',
      playlist: [],
      display: 'carousel',
      carousel: true,
      list: '',
      module: '',
      selectedPlaylist: 'PLEgNqLmZpLuKrkk5KOP0jcBgG0Fv_MT_5',
      videos: [],
      showDetails: false
    }
  },
  methods: {
    ...mapActions([
      'getChannelId',
      'getPlaylists',
      'getPlaylistVideo'
    ]),
    selectView (selected) {
      this.display = selected[0]
    },
    displayPlaylists () {
      this.getChannelId().then((response) => {
        this.getPlaylists().then((response) => {
          this.playlist = this.playlists
          this.loadDetails(0)
        })
      })
    },
    loadDetails (index) {
      this.showDetails = false
      this.selectedPlaylist = this.playlist[index].id
      this.getPlaylistVideo(this.selectedPlaylist).then((response) => {
        this.videos = this.getVideos
        this.showDetails = true
      })
    }
  },
  computed: {
    ...mapGetters([
      'playlists',
      'getVideos'
    ])
  },
  mounted () {
    this.displayPlaylists()
  },
  components: {
    ViewController,
    Carousel,
    CarouselSlide,
    CarouselDetail,
    List,
    Module,
    mapActions,
    mapGetters
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    background-color: #000;
    color: #EEEEEE;
    width: 100%;
    margin: 0;
    box-shadow: 0 0 10px 2px #333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.title h1{
    margin: auto 0;
    padding: 0 10px;
    font-size: 5em;
}

.playlist{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 83.6vh;
}

.slides{
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
/* Thumbnails stacks*/
.thumbnail-stacks{
    width: 80%;
    height: 80%;
    margin: auto auto;
    z-index: 3;
}
.thumbnail-stacks img{
    position: relative;
    z-index: 4;
    box-shadow: 0 0 1em 10px black;
}
.thumbnail-stacks::before{
    display: block;
    position: absolute;
    content: '-';
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 1em 10px black;
    top: 0.5em;
    left: 0.5em;
    z-index: 4;
}
.thumbnail-stacks::after{
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 1em 10px black;
    top: 1em;
    left: 1em;
    z-index: 1;
}
</style>
