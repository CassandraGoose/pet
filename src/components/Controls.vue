<template>
  <div>
      <v-btn slot="activator" @click="feedPet">Feed Pet</v-btn>
      <v-btn slot="activator" @click="waterPet">Water Pet</v-btn>
      <v-btn slot="activator" @click="petPet">Pet Pet</v-btn>
      <v-btn slot="activator" @click="cleanPoop">Clean Poop</v-btn>
      <v-snackbar
        v-model="snackbar"
        >
        {{buttonResult}}
      </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Controls',
  data() {
    return {
      snackbar: false,
      buttonResult: '',
    }
  },
  computed: {
    ...mapState(['pet', 'user', 'addOns']),
  },
  methods: {
    ...mapMutations(['LOVE_PET', 'CLEAN_POOP', 'FEED_PET', 'WATER_PET']),
    feedPet() {
      if (this.pet.hunger < 100) {
        this.FEED_PET()
        this.buttonResult = "Your pet's hunger has decreased.";
        this.snackbar = true;
      } else {
        this.buttonResult = 'You cannot feed your pet anymore.';
        this.snackbar = true;
      }
    },
    waterPet() {
      if (this.pet.thirst < 100) {
        this.WATER_PET()
        this.buttonResult = "Your pet's thirst has decreased.";
      } else {
        this.buttonResult = 'You cannot water your pet anymore.';
      }
    },
    petPet() {
      if (this.pet.love < 100) {
        this.LOVE_PET()
        this.buttonResult = "Your pet's love has increased.";
        this.snackbar = true;
      } else {
        this.buttonResult = 'You cannot love your pet anymore.';
        this.snackbar = true;
      }
    },
    cleanPoop() {
      if (this.pet.poop > 0) {
        this.CLEAN_POOP()
        this.buttonResult = 'All clean!';
        this.snackbar = true;
      } else {
        this.buttonResult = 'There is no poop to clean.';
        this.snackbar = true;
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
