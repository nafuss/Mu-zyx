import V3Service from '../../services/V3Service'

// Initial state
const state = {
  channelId: '',
  playlists: [],
  videos: []
}

// Mutations
const mutations = {
  GET_CHANNEL_ID: (state, id) => {
    state.channelId = id
  },
  GET_PLAYLISTS: (state, playlists) => {
    state.playlists = playlists
  },
  GET_PLAYLIST_VIDEO: (state, videos) => {
    state.videos = videos
    // videos.forEach((video) => {})
  }
}

// Actions
const actions = {
  getChannelId: ({commit}) => {
    return new Promise((resolve, reject) => {
      V3Service.getChannelId().then((response) => {
        commit('GET_CHANNEL_ID', response)
        resolve(response)
      })
      .catch((err) => console.log('Failed retrieving channel id: ' + err))
    })
  },
  getPlaylists: ({commit}) => {
    return new Promise((resolve, reject) => {
      V3Service.getPlaylists(state.channelId).then((response) => {
        commit('GET_PLAYLISTS', response)
        resolve()
      })
      .catch((err) => console.log('Failed retrieving list of playlist: ' + err))
    })
  },
  getPlaylistVideo: ({commit}, index) => {
    return new Promise((resolve, reject) => {
      V3Service.getPlaylistVideo(index).then((response) => {
        commit('GET_PLAYLIST_VIDEO', response)
        resolve()
      })
      .catch((err) => console.log('Failed retrieving videos of playlist: ' + err))
    })
  }
}

export default {
  state,
  mutations,
  actions
}
