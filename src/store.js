import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pet: {
      id: null,
      hunger: 100,
      thirst: 100,
      poop: 0,
      love: 100,
    },
    user: {
      name: null,
      date_created: null,
      type: 'standard',
      numberOfPets: 0,
    },
    addOns: {
      decor: {},
      clothes: {},
    },
  },
  mutations: {

  },
  actions: {

  }
})
