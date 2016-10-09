import Vue from 'vue'

const api = {
  url: 'https://www.googleapis.com/youtube/v3/',
  user: 'Nightblue3',
  channelId: 'channels?part=id&forUsername=',
  playlist: 'playlists?part=id%2Csnippet&channelId=',
  playlistItems: 'playlistItems?part=snippet&playlistId=',
  rand: '&key=AIzaSyBz1tfiwCyvJfo5hEJ1ysFEWotOglWy9wo'
}

export default {
  getChannelId: () => {
    // Get channel id
    return Vue.http.get(api.url + api.channelId + api.user + api.rand)
      .then((response) => {
        // Return first channel found !if multiple items
        return response.data.items[0].id
      }) // .items[0].id
      .catch((err) => { return err })
  },
  // Get playlist list for this channelId
  getPlaylists: (channelId) => {
    return Vue.http.get(api.url + api.playlist + channelId + api.rand)
    .then((response) => {
      return response.data.items
    })
    .catch((err) => { return err })
  },
  // Get Playlist video list of this playlist
  getPlaylistVideo: (playlistId) => {
    return Vue.http.get(api.url + api.playlistItems + playlistId + api.rand)
    .then((response) => {
      return response.data.items
    })
    .catch((err) => { return err })
  }
}
