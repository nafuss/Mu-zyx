<template>
  <transition :name="transition">
    <div v-show="visible" v-touch:tap="selectPlaylist">
        <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  computed: {
    transition () {
      if (this.$parent.direction) {
        return this.$parent.direction
      }
    },
    visible () {
      return this.index === this.$parent.current
    }
  },
  methods: {
    selectPlaylist () {
      this.$emit('selection', this.$parent.current)
    }
  }
}
</script>

<style lang="css">
/*To Left*/
.slideToLeft-enter-active {
  animation: slideLeftIn .5s;
}
.slideToLeft-leave-active {
  animation: slideLeftOut .5s;
  position: absolute;
  margin-left: 10vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 90%;
}
@keyframes slideLeftIn{
  from {
    transform: translateX(100vw);
    opacity: .25;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideLeftOut{
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100vw);
    opacity: .25;
  }
}

/*To Right*/
.slideToRight-enter-active {
  animation: slideRightIn .5s;
  position: absolute;
  margin-left: 10vw;
  top: 0;
  right: 0vw;
  left: 0vw;
  bottom: 0;
  width: 100%;
}
.slideToRight-leave-active {
  animation: slideRightOut .5s;
}
@keyframes slideRightIn{
  from {
    transform: translateX(-100vw);
    opacity: .25;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideRightOut{
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100vw);
    opacity: .25;
  }
}

.playlist-title {
  position: absolute;
  z-index: 20;
  background-color: #000;
  color: #FFF;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 15;
}
.play-button svg{
    width: 100px;
    height: 100px;
    fill: #FFF;
}
.slide-thumbnail{
  width: 100%;
  height: 100%;
}
</style>
