import moment from 'moment-timezone'
const TZ = 'Asia/Tokyo'

export const state = () => ({
  currentTime: Date.now(),
  TZ: process.env.TZ || 'Asia/Tokyo',
  route: {},
  playerLists: [],
  });
  
  export const mutations = {
    setcurrentTime(state, value) {
      state.currentTime = value
    },
    setRoute(state, value) {
      state.route = value
    },
    setPlayerLists(state, playerLists) {
      state.playerLists = playerLists.contents
    }
    
  }
  export const actions = {
    async getPlayersList({commit, $microcms}) {
      const playerLists = await $microcms.get({
        endoPoint: 'team-details'
      })
      commit('setPlayerLists', playerLists)
    },
  }

  export const getters = {
    isDay6(state) {
      const now = state.currentTime
      return [20].includes(moment.tz(now, state.TZ || TZ).date())
    },
    getPlayersList(state) {
      return state.playerLists
    }
  }