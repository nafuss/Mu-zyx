<template>
  <div class="nav">
    <nav class="tiny-left">
      <ol>
          <li></li>
          <li>
            <!-- Wrap svg with <router-link to="">-->
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h48v48h-48z" fill="none"/>
              <path d="M6 26h16v-20h-16v20zm0 16h16v-12h-16v12zm20 0h16v-20h-16v20zm0-36v12h16v-12h-16z"/>
              </svg>
          </li>
          <li>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
          </li>
          <li>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
              </svg>
          </li>
      </ol>
      <!-- <ol class="logout">
          <li>
          <svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="miu" stroke="none" stroke-width="1"><g id="Artboard-1" transform="translate(-395.000000, -407.000000)"><g id="slice" transform="translate(215.000000, 119.000000)"/><path d="M396,408 L396,430 L411,430 L411,424 L409,424 L409,428 L398,428 L398,410 L409,410 L409,414 L411,414 L411,408 L396,408 Z M411.636039,415.464466 L413.050253,414.050253 L418,419 L413.050253,423.949747 L411.636039,422.535534 L414.170485,420.001088 L403.000499,420.001088 L403.000499,418.00265 L414.174223,418.00265 L411.636039,415.464466 Z" fill="#000000" id="common-logout-signout-exit-glyph"/></g></g></svg>
          </li>
      </ol> -->
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  methods: {
  },
  components: {}
}
</script>

<style lang="css">
.tiny-left{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;;
  border-right: 2px solid #000;
  background: -webkit-linear-gradient(to right, #911F27 10%, #630A10 60%); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(to right, #911F27 10%, #630A10 60%); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(to right, #911F27 10%, #630A10 60%); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, #911F27 10%, #630A10 60%); /* Standard syntax */
  z-index: 100;
}
.tiny-left ol{
  list-style-type: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.tiny-left li{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10em;
  border-bottom: 0.04em solid #000;
}
.tiny-left svg{
  width: 4em;
  height: 4em;
  fill: #FFF;
}
.tiny-left .logout{
}
/*.nav-active*/
.tiny-left li:hover{
  border: none;
  transform: scale(1.15);
  background-color: #fff;
  z-index: 10;
  box-shadow: 0 0 1em #000;
}
.tiny-left li:hover svg{
  fill: #630A10;
}
</style>
