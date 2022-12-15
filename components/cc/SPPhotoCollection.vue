<template>
  <div class="sp-photocol__wrapper">
    <div class="sp-photocol__row sp-photocol__doublerow">
      <v-img :src="images[0].src"></v-img>
      <v-img :src="images[1].src"></v-img>
    </div>
    <div class="sp-photocol__row sp-photocol__singlerow">
      <v-img :src="images[2].src"></v-img>
    </div>
    <div class="sp-photocol__row sp-photocol__singlerow">
      <v-img :src="images[3].src"></v-img>
    </div>
    <div class="sp-photocol__row sp-photocol__doublerow">
      <v-img :src="images[4].src"></v-img>
      <v-img :src="images[5].src"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          //https://drive.google.com/uc?export=view&id=1uChRHboKVRowqPLJydEyjEmE8klfdGpT
          src: 'https://lh5.googleusercontent.com/StXWmS0mwwlnJJdJ3rv8tPP7gHjSlr--2m2sruESeDoGzKxJRe7uAYbY09XpFH6b1J4=w1800',
          alt: 'Image 1',
        },
        {
          src: 'https://lh5.googleusercontent.com/UjXSS_VNfdHmKhvUYOU0duZQ3McqUzy7yU_k0y0wM1ABoLYSUF1oFyCHfN9Yp3BN2sQ=w1800',
          alt: 'Image 2',
        },
        {
          src: 'https://lh5.googleusercontent.com/fxVNbuRxmKri9JPXY28zTzK_J56BqqgWnW7gG_f0Bu-jn0wtfW3duJeNdj7POfVIQp0=w1800',
          alt: 'Image 3',
        },
        {
          src: 'https://lh5.googleusercontent.com/oyXiU5XdU5icWt6MmdS9OSW_VRMP9eLdd-KyKqZhNJtMbQuRsRdJVW6STK0NDEcYSxg=w1800',
          alt: 'Image 4',
        },
        {
          src: 'https://lh5.googleusercontent.com/mndg6fEBIt38d5NJWBADb-vhkgM9qoiS_hRmEkPUrmnjvcFV4XBlVQK81Jvj9wcgK6Y=w1800',
          alt: 'Image 5',
        },
        {
          src: 'https://lh6.googleusercontent.com/Cr7bF1vEj6CoIoanQmvotxkdPtVpe4hqe-6mDGo5bM08quxE2JJJwzd-Y4GCxcmMtoQ=w1800',
          alt: 'Image 6',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.sp-photocol__wrapper {
  display: grid;
  gap: 1rem;
  .sp-photocol__row {
    display: grid;
    &.sp-photocol__doublerow {
      gap: 1rem;
      @media (min-width: 50em) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    &.sp-photocol__singlerow {
    }
  }
}
</style>
