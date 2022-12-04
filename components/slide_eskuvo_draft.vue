<template>
  <div class="slide active">
    <div class="slide-text">
      <p class="subtext">Esküvő</p>
      <p class="maintext">Közös életetek kezdete</p>
    </div>
    <!-- <div class="title-main">Közös életetek kezdete</div> -->
    <div class="more-section">
      <!-- <div class="title-sub">Közös életetek kezdete</div> -->
      <div class="arrow">More</div>
    </div>
    <!-- <div class="title-text">esküvő</div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// Slide wrapper settings
// ----------------------
.slide {
  $ff-fam1: 'Arbutus Slab', serif;
  $ff-fam2: 'Heebo', sans-serif;
  $ff-fam3: 'Quicksand', sans-serif;
  $ff-fam4: 'Reenie Beanie', cursive;
  $ff-fam5: 'Tangerine', cursive;
  $ff-fam6: 'Meddon', cursive;
  $ff-fam7: 'Oooh Baby', cursive;
  $ff-fam8: 'Roboto', sans-serif;
  $ff-fam9: 'Roboto Condensed', sans-serif;
  $ff-fam10: 'Roboto Flex', sans-serif;

  $desktop-grid-col: 0.3fr 0.5fr 3fr 1fr;
  $desktop-grid-row: 1fr 1fr 0.5fr 1.5fr;
  $desktop-grid-area: '. . . .' '. . . .' '. . . .' '. . title title';

  $mobile-grid-col: 0.3fr 3fr 1fr;
  $mobile-grid-row: 1fr 1fr 2fr;
  $mobile-grid-area: '. . .' '. . .' '. title title';
  width: 100vw;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;

  grid-template-columns: $mobile-grid-col;
  grid-template-rows: $mobile-grid-row;
  grid-template-areas: $mobile-grid-area;

  background: url('~/assets/media/wedding_bg.png');
  background-position: center 75%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.9) saturate(0.9) contrast(0.9);

  transition-property: translate, scale;
  transition-duration: 1500ms, 1500ms;
  transition-delay: 0ms, 1500ms;

  scale: 0.2;
  translate: 0 -50vh;

  &.active {
    translate: 0;
    scale: 1;
  }
  // Desktop wrapper settings
  // ------------------------
  @media (min-width: 50em) {
    grid-template-columns: $desktop-grid-col;
    grid-template-rows: $desktop-grid-row;
    grid-template-areas: $desktop-grid-area;
  }

  // New Text setup
  // ----------------
  .slide-text {
    grid-area: title;
    position: absolute;
    // bottom: 10vh;
    color: hsl(175, 85%, 82%);
    width: 100%;

    .subtext {
      font-weight: 100;
      font-size: 1rem;
      line-height: 1.5rem;
      text-transform: uppercase;
    }

    .maintext {
      font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
      font-family: $ff-fam10;
      font-weight: 300;
      font-size: 4.5rem;
      font-size: clamp(3.5rem, 4.5vw, 10.5rem);
      vertical-align: text-top;
      // vertical-align: middle;
      width: 100%;
      line-height: 1.625;
      position: relative;

      // &::before {
      //   content: '';
      //   width: 1px;
      //   height: 100%;
      //   position: absolute;
      //   left: -5vw;
      //   bottom: 0.5ch;
      //   display: block;
      //   background-color: white;
      // }
    }
  }

  // Mid text setup
  // ---------------
  .title-main {
    width: 100%;
    border-left: 3px solid pink;
    text-align: center;
    grid-area: title;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-family: $ff-fam8;
    font-weight: 400;
    font-size: clamp(1.3rem, 2.2vw, 4.4rem);
    padding: 1em 8vw;
    backdrop-filter: blur(1px);
    position: relative;
    text-shadow: 0.05em 0.05em 2px rgba(0, 0, 0, 0.371);
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0.05em;
      height: 100%;
      background: white;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      width: 0.05em;
      height: 100%;
      background: white;
    }
  }

  // See more section
  // ------------------
  .more-section {
    grid-area: more;
    .title-sub {
      color: white;
      backdrop-filter: blur(5px) brightness(0.6);
      box-shadow: 5px 2px 10px grey;
      padding: 0.75em 1.5em;
      font-size: clamp(1.1rem, 1.3vw, 3rem);
      font-family: $ff-fam7;
      letter-spacing: 0.25vw;
      text-shadow: 0.1em 0.1em 0.1em black;
      font-weight: 100;
      text-align: center;
    }
    .arrow {
      font-size: 0.8em;
    }
  }

  // Outline Text
  // -----------------
  .title-text {
    position: fixed;
    font-size: 10vw;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 2px white;
    /*text-shadow:
         1vw 1vw 0 #000,
       -0.3vw -0.3vw 0 #000,  
        0.3vw -0.3vw 0 #000,
        -0.3vw 0.3vw 0 #000,
         0.3vw 0.3vw 0 #000;*/
    opacity: 0.8;
    position: fixed;
    bottom: 6vh;
    left: 10vw;
    letter-spacing: 2.5vw;
    z-index: -1;
    font-family: $ff-fam2;
  }
}
</style>
