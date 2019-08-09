import Vue from 'vue'
import Vuex from 'vuex'
import {makeState} from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex)

export default new Vuex.Store({
  state: makeState(),
  actions,
  mutations,
  getters,
})
