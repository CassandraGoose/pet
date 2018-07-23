import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pet: {
      id: null,
      name: '',
      hunger: 90,
      thirst: 90,
      poop: 1,
      love: 90,
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
  getters: {
    getPetItems() {
      const items = [];
      items.push(this.state.pet.name);
      items.push(this.state.pet.hunger);
      items.push(this.state.pet.thirst);
      items.push(this.state.pet.poop);
      items.push(this.state.pet.love);
      return items;
    },
  },
  mutations: {
    FEED_PET() {
      this.state.pet.hunger = this.state.pet.hunger + 10;
    },
    WATER_PET() {
      this.state.pet.thirst = this.state.pet.thirst + 10;
    },
    LOVE_PET() {
      this.state.pet.love = this.state.pet.love + 10;
    },
    CLEAN_POOP() {
      this.state.pet.poop = this.state.pet.poop - 1;
    },
  },
  actions: {

  }
})
