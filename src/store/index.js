import moment from 'moment-timezone'
const TZ = 'Asia/Tokyo'

export const state = () => ({
  currentTime: Date.now(),
  // TZ: process.env.TZ || 'Asia/Tokyo',
  route: {},
  newsLists: [],
  playerLists: [],
  teamLists: [],
  competitionLists: [],
  menRankingData: [],
  womenRankingData: [],
  userName: '',
  userKana: '',
  userPhoneNumber: '',
  userEmail: '',
  contactCategory: null,
  userContent: '',
  policy: '',
  isChecked: false,
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
        moment.locale("ja")
        const itemDate = moment(item.date).format('YYYY年MM月DD日')
        item.date = itemDate
      }
    },
    setPlayerLists(state, playerLists) {
      state.playerLists = playerLists
      for (const item of state.playerLists) {
        moment.locale("ja")
        const itemDate = moment(item.birth).format('YYYY年MM月DD日')
        item.date = itemDate
      }
      state.playerLists.sort(function(a, b) {
        return (a.number < b.number) ? -1 : 1;  // オブジェクトの昇順ソート
      });
    },
    setTeamLists(state, teamLists) {
      state.teamLists = teamLists.reverse()
      for (const item of state.teamLists) {
        moment.locale("ja")
        const itemDate = moment(item.date).format('YYYY年MM月DD日')
        item.date = itemDate
      }
    },
    setCompetitionLists(state, competitionLists) {
      state.competitionLists = competitionLists
      for (const item of state.competitionLists) {
        moment.locale("ja")
        const itemDate = moment(item.date).format('YYYY.M.D(ddd)')
        item.date = itemDate
      }
      state.competitionLists.sort(function(a, b) {
        return (a.date < b.date) ? -1 : 1;  // オブジェクトの昇順ソート
      });
      
    },
    setMenRankingData(state, rankingData) {
      state.menRankingData = rankingData
      const getRankingData = state.menRankingData
      const menRanking = getRankingData.filter((rank) => rank.gender === 'men')
      menRanking.forEach(function(item) {
        item.ranking = 0
      })
      menRanking.sort(function(a, b) {
        return (a.winningPoint > b.winningPoint) ? -1: 1;
      })
      menRanking.forEach(function (item, index, arry) {
        // 前の配列を格納
        const beforeArry = arry[index - 1]

        // 前の配列がundefinedでない場合に勝ち点を比べる
        if (beforeArry !== undefined) {
          if (item.winningPoint === beforeArry.winningPoint) {
            // 勝ち点が０だった場合
            if(item.winningPoint === 0 && beforeArry.ranking === 1) {
              item.ranking = 1
            }
            // 
            else if (item.winningPoints !== 0 && beforeArry.ranking >= 1) {
              item.ranking = index
            }
          } else {
            // 違う場合はindexに+1をした値が順位
            item.ranking = index + 1
          }
        } else {
          // 配列の最初は1位
          item.ranking = 1
        }
      })
      state.menRankingData = menRanking
    },
    setWomenRankingData(state, rankingData) {
      state.womenRankingData = rankingData
      const getRankingData = state.womenRankingData
      const womenRanking = getRankingData.filter(
        (rank) => rank.gender === 'women'
      )
      womenRanking.forEach(function(item) {
        item.ranking = 0
      })
      womenRanking.sort(function(a, b) {
        return (a.winningPoint > b.winningPoint) ? -1: 1;
      })
      womenRanking.forEach(function (item, index, arry) {
        const beforeArry = arry[index - 1]

         // 前の配列がundefinedでない場合に勝ち点を比べる
         if (beforeArry !== undefined) {
          if (item.winningPoint === beforeArry.winningPoint) {
            // 勝ち点が０だった場合
            if(item.winningPoint === 0 && beforeArry.ranking === 1) {
              item.ranking = 1
            }
            // 
            else if (item.winningPoints !== 0 && beforeArry.ranking >= 1) {
              item.ranking = index
            }
          } else {
            // 違う場合はindexに+1をした値が順位
            item.ranking = index + 1
          }
        } else {
          // 配列の最初は1位
          item.ranking = 1
        }
      })
      state.womenRankingData =  womenRanking
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
    setContactCategory(state, contactCategory) {
      state.contactCategory = contactCategory
    },
    setIsChecked(state, isChecked) {
      state.isChecked = isChecked
    },

    setUserDataClear(state) {
      state.userName = ''
      state.userKana = ''
      state.userPhoneNumber = ''
      state.userEmail = ''
      state.contactCategory = ''
      state.userContent = ''
      state.isChecked = false
    },
    setPolicy(state, policy) {
      state.policy = policy
    },
  }



  export const actions = {
    async nuxtServerInit({ commit }, { $config }) {
      const resNews = await this.$axios.$get(`${$config.apiUrl}news`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resPlayers = await this.$axios.$get(`${$config.apiUrl}player-details?limit=50`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resTeams = await this.$axios.$get(`${$config.apiUrl}team-details`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resCompetitions = await this.$axios.$get(`${$config.apiUrl}schedule_result`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resRankingData = await this.$axios.$get(`${$config.apiUrl}rank`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      const resPolicy = await this.$axios.$get(`${$config.apiUrl}policy`, {
       headers: { "X-MICROCMS-API-KEY": $config.apiKey }
      });
      commit("setNewsLists", resNews.contents);
      commit("setPlayerLists", resPlayers.contents);
      commit("setTeamLists", resTeams.contents);
      commit("setCompetitionLists", resCompetitions.contents);
      commit("setMenRankingData", resRankingData.contents);
      commit("setWomenRankingData", resRankingData.contents);
      commit("setPolicy", resPolicy.body);
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
     getContactCategory({ commit }, contactCategory) {
      commit('setContactCategory', contactCategory)
    },
     getUserContent({ commit }, userContent) {
      commit('setUserContent', userContent)
    },
     getIsChecked({ commit }, isChecked) {
      commit('setIsChecked', isChecked)
    },
  }

  export const getters = {
    isDay6(state) {
      const now = state.currentTime
      return [20].includes(moment.tz(now, TZ).date())
    },
    isToday(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-02-11 00:00', '2022-02-12 00:00', undefined, '[)')
    },
    firstGame(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-02-09 11:00', '2022-02-11 14:45', undefined, '[)')
    },
    secondGame(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-02-11 14:45', '2022-02-11 16:00', undefined, '[)')
    },
    thirdGame(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-02-09 15:50', '2022-02-12 00:00', undefined, '[)')
    },
    // 第1週目の期間
    // ※TODO:リリース時点では期間を修正すること
    firstWeek(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-02-11', '2022-03-12', undefined, '[)')
    },
    // 第2週目の期間
    secondWeek(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-03-12', '2022-05-21', undefined, '[)')
    },
    // 第3週目の期間
    thirdWeek(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-05-21', '2022-06-30', undefined, '[)')
    },
    // 第4週目の期間
    fourthWeek(state) {
      const now = state.currentTime
      return moment.tz(now, TZ).isBetween('2022-07-01', '2022-07-23', undefined, '[)')
    },
    // 第5週目の期間
    fifthWeek(state) {
      const now = state.currentTime
      return moment.tz(now, state.TZ || TZ).isBetween('2022-07-25', '2022-08-30', undefined, '[)')
    },
    getNewsList(state) {
      return state.newsLists
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
    getMenRankingData(state) {
      return state.menRankingData
    },
    getWomenRankingData(state) {
      return state.womenRankingData
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
    hasContactCategory(state) {
      return state.contactCategory
    },
    hasUserContent(state) {
      return state.userContent
    },
    isChecked(state) {
      return state.isChecked
    },
    getPolicy(state) {
      return state.policy
    },
  }