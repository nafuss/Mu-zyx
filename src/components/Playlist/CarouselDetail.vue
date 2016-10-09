<template>
  <div class="list">
    <transition name="slide-bounce" appear>
      <ol class="song-list" v-show="showDetails">
        <slot></slot>
      </ol>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showDetails: Boolean
  },
  data: () => {
    return {
    }
  },
  components: {
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*Song List*/
.list{
  width: 100%;
  height: 48vh;
  box-shadow: 0 0 2em 0.5em #000;
  overflow-y: hidden;
}
.song-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin: 0;
}
.song-items{
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 1em 0;
    align-items: center;
    counter-increment: song;
    opacity: 1;
    border-bottom: 1px solid #000;
}
.song-items.played{
  opacity: 0.7;
}
.song-items:hover{
  opacity: 1;
  transform: translateX(-5%);
  background-color: #333;
  box-shadow: 0 0 4em 0.5em #000;
}
.song-items:before{
    content: counter(song);
    display: flex;
    position: relative;
    align-items: center;
    padding-right: 0.75em;
    padding-left: 1em;
    width: 10px;
    height: 60px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-align: center;
    font-size: 2em;
    background-color: #000;
    opacity: 0.8;
    color:#A0A0A0;
    box-shadow: 0 5px 10px #000;

}
.play-thumbnail, .thumbnail{
    position: relative;
    width: 200px;
    height: 120px;
    box-shadow: 0 5px 10px 5px #333;
}
.song-items .song-info{
    background-color: #000;
    opacity: 0.7;
    color: #A0A0A0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 5px 10px 2px #000;
    font-size: 2em;
}
.song-info span{
  width: 20vw;
}
.play-button{
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    background-color: #000;
    opacity: 0.45;
    z-index: 10;
}
/*.slide-thumbnail{
  position: relative;
  width: 80vw;
  height: 30vh;
}*/
.slide-bounce-enter-active{
  transition: all .5s ease-out;
}
.slide-bounce-leave-active{
  transition: all .3s ease-in;
}
.slide-bounce-enter{
  transform: translateY(-100%);
  opacity: 0;
}
.slide-bounce-leave-active{
  /*transform: translateY(100%);*/
  opacity: 0;
}
</style>
