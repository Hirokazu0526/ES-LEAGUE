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
  competitionLists: [],
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
    setCompetitionLists(state, competitionLists) {
      state.competitionLists = competitionLists
      for (const item of state.competitionLists) {
        const itemDate = moment.tz(item.date, state.TZ || TZ).format('YYYY.MM.DD ddd.')
        item.date = itemDate
      }
      state.competitionLists.sort(function(a, b) {
        return (a.date < b.date) ? -1 : 1;  // オブジェクトの昇順ソート
      });
      
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
      const resCompetitions = await this.$axios.$get(`${$config.apiUrl}schedule_result`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      commit("setNewsLists", resNews.contents);
      commit("setBlogLists", resBlogs.contents);
      commit("setPlayerLists", resPlayers.contents);
      commit("setTeamLists", resTeams.contents);
      commit("setCompetitionLists", resCompetitions.contents);
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
    // 第1週目の期間
    // ※TODO:リリース時点では期間を修正すること
    firstWeek(state) {
      const now = state.currentTime
      return moment.tz(now, state.TZ || TZ).isBetween('2021-11-15', '2022-02-28', undefined, '[]')
      
    },
    // 第2週目の期間
    secondWeek(state) {
      const now = state.currentTime
      return moment.tz(now, state.TZ || TZ).isBetween('2022-03-01', '2022-03-31', undefined, '[]')
      
    },
    // 第3週目の期間
    thirdWeek(state) {
      const now = state.currentTime
      return moment.tz(now, state.TZ || TZ).isBetween('2022-04-01', '2022-04-30', undefined, '[]')
      
    },
    // 第4週目の期間
    fourthWeek(state) {
      const now = state.currentTime
      return moment.tz(now, state.TZ || TZ).isBetween('2022-05-01', '2022-05-31', undefined, '[]')
      
    },
    // 第5週目の期間
    fifthWeek(state) {
      const now = state.currentTime
      return moment.tz(now, state.TZ || TZ).isBetween('2022-06-01', '2022-06-30', undefined, '[]')
      
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
    getCompetitionList(state) {
      return state.competitionLists
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