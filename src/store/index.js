import { createStore } from 'vuex'
import * as alert from '@/store/alert'
import * as constant from '@/store/constant'
import * as attribute from '@/store/attribute'
import * as fetchState from '@/store/fetchState'
import * as config from '@/store/config'
import * as auth from '@/store/auth'
import * as user from '@/store/user'

export const store = createStore({
  modules: {
    alert,
    constant,
    attribute,
    fetchState,
    config,
    auth,
    user,
  },

  actions: {
    loggedIn({ dispatch, commit }) {
      // 必要な初期データの読み込みはここに追記する
      commit('user/clear')

      return Promise.all([
        dispatch('constant/fetch'),
        dispatch('config/fetch'),
        dispatch('attribute/fetch'),
      ])
    },
  },
})
