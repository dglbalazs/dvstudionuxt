<template>
  <div class="simple-custom-text">
    <span>{{ txt }}</span>
    <div class="simple-custom-text__subtext" v-if="subtxt != ''">
      {{ subtxt }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: String,
      default: '',
    },
    subtxt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
$ff-hw-1: 'Reenie Beanie', cursive;
$ff-hw-2: 'Tangerine', cursive;
$ff-hw-3: 'Meddon', cursive;
$ff-hw-4: 'Oooh Baby', cursive;
$ff-s-1: 'Arbutus Slab', serif;
$ff-ss-1: 'Heebo', sans-serif;
$ff-ss-2: 'Quicksand', sans-serif;
$ff-ss-3: 'Roboto', sans-serif;
$ff-ss-4: 'Roboto Condensed', sans-serif;
$ff-ss-5: 'Roboto Flex', sans-serif;
$ff-ss-6: 'Open Sans', sans-serif;

.simple-custom-text {
  font-weight: 200;
  &[light] {
    color: #fff;
  }

  &[dark] {
    color: #000;
  }

  &[center] {
    text-align: center;
  }

  &[superbig] {
    font-size: max(3.3vw, 2.25rem);
  }

  &[big] {
    font-size: max(2.3vw, 1.25rem);
  }

  &[medium] {
    font-size: max(1.25rem, 1.25vw);
  }

  &[small] {
    font-size: max(0.875rem, 0.675vw);
  }

  &[doubleline] {
    line-height: 1.6;
  }

  &[padding-s] {
    padding: max(8px, 0.575vw) !important;
  }

  &[padding-m] {
    padding: max(16px, 1.15em) !important;
  }

  &[ss1] {
    font-family: $ff-ss-1;
  }

  &[ss2] {
    font-family: $ff-ss-2;
  }

  &[ss3] {
    font-family: $ff-ss-3;
  }

  &[ss4] {
    font-family: $ff-ss-4;
  }

  &[ss5] {
    font-family: $ff-ss-5;
  }

  &[ss6] {
    font-family: $ff-ss-6;
  }

  &[hw1] {
    font-family: $ff-hw-1;
  }

  &[hw2] {
    font-family: $ff-hw-2;
  }

  &[hw3] {
    font-family: $ff-hw-3;
  }

  &[hw4] {
    font-family: $ff-hw-4;
  }

  &[s1] {
    font-family: $ff-s-1;
  }

  &[bold] {
    font-weight: 700;
  }

  &[letterspace] {
    letter-spacing: 0.1em;
  }

  &[bordercorner] {
    --b: 0.15rem; /* thickness of the border */
    --c: rgba(255, 255, 255, 1); /* color of the border */
    --w: 2rem; /* width of border */
    --_g: #0000 90deg, var(--c) 0;
    --_g_transp: #0000 90deg, rgba(255, 255, 255, 0) 0;
    --_p: var(--w) var(--w) border-box no-repeat;
    border: var(--b) solid #0000; /* space for the border */
    background: conic-gradient(
          from 90deg at top var(--b) left var(--b),
          var(--_g)
        )
        0 0 / var(--_p),
      conic-gradient(
          from 180deg at top var(--b) right var(--b),
          var(--_g_transp)
        )
        100% 0 / var(--_p),
      conic-gradient(
          from 0deg at bottom var(--b) left var(--b),
          var(--_g_transp)
        )
        0 100% / var(--_p),
      conic-gradient(from -90deg at bottom var(--b) right var(--b), var(--_g))
        100% 100% / var(--_p);
  }

  .simple-custom-text__subtext {
    margin-top: 1em;
    font-size: 0.75em;
  }
}
</style>
