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
        :txt="pagemiddletext.middleText"
        :subtxt="pagemiddletext.subText"
        :listtxt="pagemiddletext.listtxt"
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
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    pagemiddletext: {
      type: Object,
      default: () => ({}),
    },
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
