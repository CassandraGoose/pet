<template>
  <div>
    <button @click="feedPet">Feed Pet</button>
    
    <button @click="waterPet">Water Pet</button>

    <button @click="petPet">Pet Pet</button>

    <button @click="cleanPoop">Clean Poop</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Controls',
  computed: {
    ...mapState(['pet', 'user', 'addOns']),
  },
  methods: {
    ...mapMutations(['LOVE_PET', 'CLEAN_POOP', 'FEED_PET', 'WATER_PET']),
    feedPet() {
      if (this.pet.hunger < 100) {
        this.FEED_PET()
      } else {
        console.log('You cannot feed your pet anymore.')
      }
    },
    waterPet() {
      if (this.pet.thirst < 100) {
        this.WATER_PET()
      } else {
        console.log('You cannot water your pet anymore.')
      }
    },
    petPet() {
      if (this.pet.love < 100) {
        this.LOVE_PET()
      } else {
        console.log('You cannot love your pet anymore.')
      }
    },
    cleanPoop() {
      if (this.pet.poop > 0) {
        this.CLEAN_POOP()
      } else {
        console.log('There is no poop to clean.')
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
