<template>
  <v-btn
    id="back-button"
    class="ma-2"
    :loading="loading"
    :disabled="loading"
    color="secondary"
    @click="loader = 'loading'"
  >
    Vissza
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => {
        this.$router.push('/')
      }, 600)
      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>

<style lang="scss">
#back-button {
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 100;
  background-color: #1e1e1e !important;
  color: white !important;
  height: max(36px, 3em) !important;
  font-size: max(0.875rem, 0.675vw) !important;
  padding: 0 max(16px, 1.28em) !important;
}
.custom-loader {
  animation: back-button-loader 1s infinite;
  display: flex;
}
@-moz-keyframes back-button-loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes back-button-loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes back-button-loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes back-button-loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
