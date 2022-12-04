<template>
  <div class="slide active">
    <div class="subtext">
      <p>Céges Imázs</p>
    </div>
    <div class="maintext">
      <p>Új Köntös</p>
      <p>a márkádnak.</p>
    </div>
    <div class="pageno">
      <p>2 - 4</p>
    </div>
    <div class="more-section">
      <p>Részletesebben</p>
    </div>
    <!-- <div class="title-text">Esküvő</div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// Slide wrapper settings
// ----------------------
.slide {
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

  $bg-color: hsl(2, 21%, 34%);
  $font-color1: hsl(2, 41%, 84%);

  $desktop-grid-col: 0.3fr 0.5fr 3fr 1fr;
  $desktop-grid-row: 1fr 1fr 0.5fr 1.25fr 0.775fr;
  $desktop-grid-area: '. . . logo' '. . . .' '. pageno subtitle .'
    '. . title title' '. . more .';

  $mobile-grid-col: 0.3fr 0.5fr 3fr 1fr;
  $mobile-grid-row: 1fr 0.1fr 0.5fr 1.25fr 0.775fr;
  $mobile-grid-area: '. . . .' '. . . .' '. pageno subtitle .' '. . title title'
    '. . more .';
  width: 100vw;
  min-height: 100vh;
  display: grid;
  // justify-content: center;
  // justify-items: center;
  // align-items: center;

  grid-template-columns: $mobile-grid-col;
  grid-template-rows: $mobile-grid-row;
  grid-template-areas: $mobile-grid-area;

  background: url('~/assets/media/_ceg_bg2.png');
  background-blend-mode: hard-light;
  background-color: $bg-color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // filter: brightness(0.9) saturate(0.9) contrast(0.9);

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

  // T E X T   S E T U P
  // ----------------
  .subtext {
    grid-area: subtitle;

    font-family: $ff-ss-2;
    font-weight: 100;
    font-size: clamp(0.85rem, 1.5vw, 1.25rem);

    color: $font-color1;

    line-height: 1.5rem;
    text-transform: uppercase;
  }

  .maintext {
    grid-area: title;

    font-family: $ff-ss-6;
    font-weight: 200;
    font-size: clamp(2.3rem, 4.3vw, 9.5rem);
    letter-spacing: -0.015em;

    color: $font-color1;

    text-transform: capitalize;
    vertical-align: text-top;
    width: 100%;
    line-height: 1.225;
    position: relative;
  }

  .pageno {
    grid-area: pageno;

    font-family: $ff-ss-2;
    font-weight: 100;
    font-size: clamp(0.85rem, 1.5vw, 1.25rem);
    line-height: 1.5rem;

    color: $font-color1;

    text-align: center;
    text-transform: uppercase;
  }

  // See more section
  // ------------------
  .more-section {
    grid-area: more;
    color: $font-color1;
    font-size: clamp(1.1rem, 1.3vw, 3rem);
    font-family: $ff-ss-6;

    letter-spacing: 0.3em;

    .arrow {
      font-size: 0.8em;
    }
  }
}
</style>
