<template>
  <div>
    <Controls/>
    i'm a game base
    <Pet/>
    <PetStats/>
  </div>
</template>

<script>
import Pet from '@/components/Pet.vue';
import Controls from '@/components/Controls.vue';
import PetStats from '@/components/PetStats.vue';

export default {
  name: 'Base',
  components: {
    Controls,
    PetStats,
    Pet,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
