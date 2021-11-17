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
  userName: '',
  userKana: '',
  userPhoneNumber: '',
  userEmail: '',
  userContent: '',
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
    },
    setUserName(state, userName) {
      state.userName = userName
    },
    setUserKana(state, userKana) {
      state.userKana = userKana
    },
    setUserPhoneNumber(state, userPhoneNumber) {
      state.userPhoneNumber = userPhoneNumber
    },
    setUserEmail(state, userEmail) {
      state.userEmail = userEmail
    },
    setUserContent(state, userContent) {
      state.userContent = userContent
    },
    setUserDataClear(state) {
      state.userName = ''
      state.userKana = ''
      state.userPhoneNumber = ''
      state.userEmail = ''
      state.userContent = ''
    }
  }
  export const actions = {
    async nuxtServerInit({ commit }, { $config }) {
      const resNews = await this.$axios.$get(`${$config.apiUrl}news`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resBlogs = await this.$axios.$get(`${$config.apiUrl}blog`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resPlayers = await this.$axios.$get(`${$config.apiUrl}player-details`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resTeams = await this.$axios.$get(`${$config.apiUrl}team-details`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      commit("setNewsLists", resNews.contents);
      commit("setBlogLists", resBlogs.contents);
      commit("setPlayerLists", resPlayers.contents);
      commit("setTeamLists", resTeams.contents);
     },
     getUserName({ commit }, userName) {
      commit('setUserName', userName)
    },
     getUserKana({ commit }, userKana) {
      commit('setUserKana', userKana)
    },
     getUserPhoneNumber({ commit }, userPhoneNumber) {
      commit('setUserPhoneNumber', userPhoneNumber)
    },
     getUserEmail({ commit }, userEmail) {
      commit('setUserEmail', userEmail)
    },
     getUserContent({ commit }, userContent) {
      commit('setUserContent', userContent)
    },
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
    },
    hasUserName(state) {
      return state.userName
    },
    hasUserKana(state) {
      return state.userKana
    },
    hasUserPhoneNumber(state) {
      return state.userPhoneNumber
    },
    hasUserEmail(state) {
      return state.userEmail
    },
    hasUserContent(state) {
      return state.userContent
    },
  }