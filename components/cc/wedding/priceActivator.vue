<template>
  <div class="text-center">
    <v-btn
      class="price-activator__button"
      rounded
      color="primary"
      dark
      @click="showPriceCalculator"
    >
      Árkalkulátor
    </v-btn>
  </div>
</template>

<script>
import { emit } from 'process'

export default {
  methods: {
    showPriceCalculator() {
      console.log('showPriceActivator')
      $nuxt.$emit('showPriceCalculator')
      this.$router.push('/price')
    },
  },
}
</script>

<style scoped>
.price-activator__button {
  padding: 1.5rem 1.25rem !important;
  border: 2px solid #d4b068;
  box-shadow: 0 0 0 0 rgba(212, 176, 104, 0.7);
}
</style>
