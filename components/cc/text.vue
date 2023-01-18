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

  &[fitcontent] {
    width: fit-content;
  }

  &[light] {
    color: #fff;
  }

  &[dark] {
    color: #000;
  }

  &[center] {
    text-align: center;
  }

  &[right] {
    text-align: right;
  }

  &[biggest] {
    font-size: max(4.5vw, 3rem);
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

  &[margin-b-mob] {
    @media (max-width: 45em) {
      margin-top: max(10vh) !important;
    }
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

  &[letterspace-medium] {
    letter-spacing: 0.25em;
  }

  &[letterspace-big] {
    letter-spacing: 0.5em;
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

  &[stroke-dark] {
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 2px black;
  }

  &[stroke-light] {
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
  }

  &[stroke-blueneon] {
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
  }

  &[neonText] {
    text-shadow: 0 0 7px #fff, 0 0 10px #161616, 0 0 21px #161616,
      0 0 42px #211ebb85, 0 0 82px #0d0c4e, 0 0 92px #211ebb85,
      0 0 102px #211ebb85, 0 0 151px #211ebb85;
  }

  &[shadow-dark] {
    text-shadow: 0.15em 0.15em 0 rgba(0, 0, 0, 0.3);
  }

  .simple-custom-text__subtext {
    margin-top: 1em;
    font-size: 0.75em;
  }
}
</style>
