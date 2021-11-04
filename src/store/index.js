import moment from 'moment-timezone'
const TZ = 'Asia/Tokyo'

export const state = () => ({
  currentTime: Date.now(),
  TZ: process.env.TZ || 'Asia/Tokyo',
  route: {},
  newsLists: [],
  blogLists: [],
  playerLists: [],
  teamLists: [],
  });
  
  export const mutations = {
    setcurrentTime(state, value) {
      state.currentTime = value
    },
    setRoute(state, value) {
      state.route = value
    },
    setNewsLists(state, newsLists) {
      state.newsLists = newsLists
      for (const item of state.newsLists) {
        const itemDate = moment(item.date).format('YYYY年MM月DD日')
        item.date = itemDate
      }
      
    },
    setBlogLists(state, blogLists) {
      state.blogLists = blogLists
      for (const item of state.blogLists) {
        const itemDate = moment(item.date).format('YYYY年MM月DD日')
        item.date = itemDate
      }
    },
    setPlayerLists(state, playerLists) {
      state.playerLists = playerLists
      for (const item of state.playerLists) {
        const itemDate = moment(item.birth).format('YYYY年MM月DD日')
        item.date = itemDate
      }
    },
    setTeamLists(state, teamLists) {
      state.teamLists = teamLists
      for (const item of state.teamLists) {
        const itemDate = moment(item.date).format('YYYY年MM月DD日')
        item.date = itemDate
      }
    }
    
  }
  export const actions = {
    // async getTeamLists({commit}, {$microcms}) {
    //   const newsLists = await $microcms.get({
    //     endoPoint: 'news'
    //   })
    //   return commit('setNewsLists', newsLists)
    // },
    async nuxtServerInit({ commit }, { $config }) {
      const resNews = await this.$axios.$get(`${$config.apiUrl}news`, {
       headers: { "X-API-KEY": $config.apiKey }
      });
      const resBlogs = await this.$axios.$get(`${$config.apiUrl}blog`, {
       headers: { "X-API-KEY": $config.apiKey }
      });
      const resPlayers = await this.$axios.$get(`${$config.apiUrl}player-details`, {
       headers: { "X-API-KEY": $config.apiKey }
      });
      const resTeams = await this.$axios.$get(`${$config.apiUrl}team-details`, {
       headers: { "X-API-KEY": $config.apiKey }
      });
      commit("setNewsLists", resNews.contents);
      commit("setBlogLists", resBlogs.contents);
      commit("setPlayerLists", resPlayers.contents);
      commit("setTeamLists", resTeams.contents);
     }
  }

  export const getters = {
    isDay6(state) {
      const now = state.currentTime
      return [20].includes(moment.tz(now, state.TZ || TZ).date())
    },
    getNewsList(state) {
      return state.newsLists
    },
    getBlogList(state) {
      return state.blogLists
    },
    getPlayerList(state) {
      return state.playerLists
    },
    getTeamList(state) {
      return state.teamLists
    }
  }