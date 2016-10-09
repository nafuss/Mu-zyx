<template>
  <div>
    <nav class="selector">
      <ol>
        <li v-on:click="setActive('carousel')" :class="{ active: isActive == 'carousel' }">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </li>
        <li v-on:click="setActive('list')" :class="{ active: isActive == 'list'}">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </li>
        <li v-on:click="setActive('module')" :class="{ active: isActive == 'module' }">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: 'carousel'
    }
  },
  methods: {
    setActive (select) {
      // set wich view is active
      this.$emit('select', [ select ])
      this.isActive = select
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selector{
  color: #FFF;
  width: 30vw;
}

.selector ol{
  list-style-type: none;
  background-color: #555;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding-left: 0;
  margin: 0;
}
.selector li.active{
  transform: scale(1.30);
  background-color: #777;
  box-shadow: 0 0 10px #000;
}
.selector svg{
  width: 70px;
  height: 70px;
}
</style>
