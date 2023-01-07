<template>
  <div class="sp-photocol__wrapper">
    <div class="sp-photocol__row sp-photocol__doublerow">
      <v-img :src="images[0].src" :lazy-src="images[0].lazysrc"></v-img>
      <v-img :src="images[1].src" :lazy-src="images[1].lazysrc"></v-img>
    </div>
    <div class="sp-photocol__row sp-photocol__singlerow" leftup>
      <v-img :src="images[2].src" :lazy-src="images[2].lazysrc"></v-img>
    </div>
    <div class="sp-photocol__row sp-photocol__singlerow">
      <CcText
        :txt="txt.middleText"
        :subtxt="txt.subText"
        light
        center
        big
        ss3
        doubleline
        letterspace
        bordercorner
        padding-m
      ></CcText>
    </div>
    <div class="sp-photocol__row sp-photocol__singlerow" rightdown>
      <v-img :src="images[3].src" :lazy-src="images[3].lazysrc"></v-img>
    </div>
    <div class="sp-photocol__row sp-photocol__doublerow">
      <v-img :src="images[4].src" :lazy-src="images[4].lazysrc"></v-img>
      <v-img :src="images[5].src" :lazy-src="images[5].lazysrc"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: {
        middleText: 'Mi tudjuk, hogy nincs két egyforma esküvő',
        subText:
          'ezért miután kinéztétek a Hozzátok illő csomagajánlatunkat, mi azt személyre szabjuk Nektek, hogy olyan szépen és kifinomultan illeszkedjen Hozzátok, mint az esküvői ruhátok',
      },
      images: [
        {
          //https://drive.google.com/uc?export=view&id=1uChRHboKVRowqPLJydEyjEmE8klfdGpT
          src: 'https://dvstudio.hu/external/6_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/StXWmS0mwwlnJJdJ3rv8tPP7gHjSlr--2m2sruESeDoGzKxJRe7uAYbY09XpFH6b1J4=w100',
          alt: 'Image 1',
        },
        {
          src: 'https://dvstudio.hu/external/1_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/UjXSS_VNfdHmKhvUYOU0duZQ3McqUzy7yU_k0y0wM1ABoLYSUF1oFyCHfN9Yp3BN2sQ=w100',
          alt: 'Image 2',
        },
        {
          src: 'https://dvstudio.hu/external/4_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/fxVNbuRxmKri9JPXY28zTzK_J56BqqgWnW7gG_f0Bu-jn0wtfW3duJeNdj7POfVIQp0=w100',
          alt: 'Image 3',
        },
        {
          src: 'https://dvstudio.hu/external/3_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/oyXiU5XdU5icWt6MmdS9OSW_VRMP9eLdd-KyKqZhNJtMbQuRsRdJVW6STK0NDEcYSxg=w100',
          alt: 'Image 4',
        },
        {
          src: 'https://dvstudio.hu/external/8_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/mndg6fEBIt38d5NJWBADb-vhkgM9qoiS_hRmEkPUrmnjvcFV4XBlVQK81Jvj9wcgK6Y=w100',
          alt: 'Image 5',
        },
        {
          src: 'https://dvstudio.hu/external/7_medium.jpg',
          // lazysrc:
          //   'https://lh6.googleusercontent.com/Cr7bF1vEj6CoIoanQmvotxkdPtVpe4hqe-6mDGo5bM08quxE2JJJwzd-Y4GCxcmMtoQ=w100',
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
  gap: 1.8rem;

  .sp-photocol__row {
    display: grid;

    @media (min-width: 50em) {
      &[leftup] {
        --border-x: -5%;
        --border-y: -5%;
      }
      &[leftdown] {
        --border-x: -5%;
        --border-y: 5%;
      }
      &[rightup] {
        --border-x: 5%;
        --border-y: -5%;
      }
      &[rightdown] {
        --border-x: 5%;
        --border-y: 5%;
      }
      &[leftup],
      &[leftdown],
      &[rightup],
      &[rightdown] {
        position: relative;
        &::after {
          content: ' ' !important;
          width: 100% !important;
          height: 100% !important;
          background: transparent !important;
          border: 3px solid white !important;
          position: absolute !important;
          left: 0px !important;
          top: 0px !important;
          transform: translate(var(--border-x), var(--border-y)) !important;
          z-index: 1;
        }
      }
    }
    &.sp-photocol__doublerow {
      gap: 1.8rem;
      @media (min-width: 50em) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    &.sp-photocol__singlerow {
    }
  }
}
</style>
