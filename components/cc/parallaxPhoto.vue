<template>
  <v-parallax :src="parallax.image"></v-parallax>
</template>

<script>
export default {
  data() {
    return {
      parallax: {
        image: require('~/assets/media/_ceg_bg.png'),
      },
    }
  },
}
</script>

<style></style>
