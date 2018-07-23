<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs2>
          
        </v-flex>
        <v-flex xs2>
          Name
        </v-flex>
        <v-flex xs2>
          Hunger
        </v-flex>
        <v-flex xs2>
          Thirst
        </v-flex>
        <v-flex xs2>
          Love
        </v-flex>
        <v-flex xs2>
          Health
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs2>
          Stats:
        </v-flex>
        <v-flex xs2>
          {{pet.name}}
        </v-flex>
        <v-flex xs2>
          {{pet.hunger}}
        </v-flex>
        <v-flex xs2>
          {{pet.thirst}}
        </v-flex>
        <v-flex xs2>
          {{pet.love}}
        </v-flex>
        <v-flex xs2>
          : \
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PetStats',
  computed: {
    ...mapState(['pet']),
  },
}
</script>

<style scoped>
</style>
