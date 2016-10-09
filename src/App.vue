<template>
  <div id="app"><!--  v-touch:doubletap="onTap" -->
    <header>
      <img class="logo" src="./assets/logo.png">
        <h1>Mu-ZYX</h1>
    </header>
    <div class="content">
      <tiny-left-nav></tiny-left-nav>
      <router-view></router-view>
    </div>
    <controller></controller>
  </div>
</template>

<script>
import Controller from './components/Controller'
import TinyLeftNav from './components/TinyLeftNav'

export default {
  components: {
    Controller,
    TinyLeftNav
  },
  methods: {
    onTap (event) {
      // Zoom in or Zoom out
      console.log(event)
    }
  },
  mounted: () => {
  }
}
</script>

<style>
/**/
html{
  height: 100%;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  overflow-x: hidden;
  /*font-family: 'Code Pro', sans-serif;*/
}
header {
  position: relative;
  width: 100%;
  background: -webkit-linear-gradient(#911F27 10%, #630A10 80%); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#911F27 10%, #630A10 80%); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#911F27 10%, #630A10 80%); /* For Firefox 3.6 to 15 */
    background: linear-gradient(#911F27 10%, #630A10 80%); /* Standard syntax */
  /*background-color: #FD7014;*/
  color: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2em;
  margin: 0;
  font-family: 'Code Pro', sans-serif;
  z-index: 50;
  box-shadow: 0 0 1em 10px #000;
}
header .logo{
  width: 2em;
  height: 2em;
  margin: 0 1em;
}
.content{
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100vw;
}
.view{
  display: flex;
  flex-direction: column;
  margin-left: 8vw;
  height: 100%;
  width: 100%;
}
.nav{
  position: absolute;
  width: 5vh;
  height: 100%;
  z-index: 30;
  flex-grow: 0.5;
}
/*Font*/
@font-face {
  font-family: Code Pro;
  src: url(assets/codepro_regular/Code_Pro_Demo-webfont.ttf);
}

</style>
