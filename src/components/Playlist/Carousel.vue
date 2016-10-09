<template>
  <div class="carousel" v-touch:swipeleft="next" v-touch:swiperight="previous">
    <slot>
    </slot>
      <!-- <span class="scrollbar">
        <div class="bar"></div>
      </span> -->
  </div>
</template>

<script>
export default {
  props: {
    playlist: [Array]
  },
  data: () => {
    return {
      slides: [],
      current: 0,
      direction: 'slideToLeft'
    }
  },
  methods: {
    next (event) {
      this.direction = 'slideToLeft'
      this.current < this.playlist.length - 1 ? this.current++ : this.current = 0
    },
    previous (event) {
      this.direction = 'slideToRight'
      let n = this.slides.length - 1
      this.current > 0 ? this.current-- : this.current = n
    }
  },
  computed: {
  },
  mounted () {
    this.slides = this.$children
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.carousel{
  position: relative;
  background-color: #CCC;
  background-image: url(../../assets/texture-black.jpg);
  box-shadow: 0 0 20px 10px #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  overflow-x: hidden;
}
.scrollbar{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1em;
  background-color: #000;
}
.scrollbar .bar{
  position: relative;
  background-color: #FD7014;
  width: 25%;
  height: 1em;
  left: 1em;
}


</style>
