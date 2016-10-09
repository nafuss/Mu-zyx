<template>
  <div>
    <!-- Separate components ?-->
    <h2>{{ state }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    playlist: [Array]
  },
  data () {
    return {
      state: 'list'
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
