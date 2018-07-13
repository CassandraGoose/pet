<template>
  <div>
    <button @click="feedPet">Feed Pet</button>
    
    <button @click="waterPet">Water Pet</button>

    <button @click="petPet">Pet Pet</button>

    <button @click="cleanPoop">Clean Poop</button>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  methods: {
    feedPet() {
      console.log('feed')
    },
    waterPet() {
      console.log('water')
    },
    petPet() {
      console.log('pet')
    },
    cleanPoop() {
      console.log('poop')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
