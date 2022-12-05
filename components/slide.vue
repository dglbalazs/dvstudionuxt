<template>
  <div
    class="slide active"
    :style="{
      '--bg-color': bgcolor,
      '--font-color': fontcolor,
      '--font-color2': fontcolor2,
      backgroundImage: `url(${bgimage})`,
    }"
  >
    <div class="subtext">
      <p>{{ subtext }}</p>
    </div>
    <div class="pageno">
      <p>1 - 4</p>
    </div>
    <div class="maintext" tabindex="0">
      <p class="maintext1">{{ maintext1 }}</p>
      <p class="maintext2">{{ maintext2 }}</p>
    </div>
    <div class="more-section">
      <p>
        Részletesebben
        <span class="more-icon">
          <font-awesome-icon icon="fa-solid fa-arrow-turn-down" />
        </span>
      </p>
    </div>
    <!-- <div class="title-text">Esküvő</div> -->
  </div>
</template>

<script>
export default {
  props: [
    'subtext',
    'maintext1',
    'maintext2',
    'bgcolor',
    'fontcolor',
    'fontcolor2',
    'bgimage',
  ],
}
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

  $desktop-grid-col: 0.3fr 0.5fr 3fr 1fr;
  $desktop-grid-row: 1fr 1fr 0.5fr 1.25fr 0.775fr;
  $desktop-grid-area: '. . . logo' '. arrowleft arrowright .'
    '. pageno subtitle .' '. . title title' '. . more .';

  $mobile-grid-col: 0.1fr 0.5fr 3fr 1fr;
  $mobile-grid-row: 0.5fr 0.5fr 0.5fr 1.25fr 0.775fr;
  $mobile-grid-area: '. . . logo' '. arrowleft arrowright .'
    '. pageno subtitle .' '. . title title' '. . more more';
  width: 100vw;
  min-height: 100vh;
  display: grid;
  // justify-content: center;
  // justify-items: center;
  // align-items: center;

  grid-template-columns: $mobile-grid-col;
  grid-template-rows: $mobile-grid-row;
  grid-template-areas: $mobile-grid-area;

  //   --bg-url: url('~/assets/media/' + var(--bg-img));
  //   background: $bg-image;
  // background-blend-mode: hard-light;
  background-color: var(--bg-color);
  background-position: center 40%;
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

  .arrow {
    display: flex;
    // margin-inline: 2em;
    color: White;
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    position: absolute;
    width: min-content;
    transition: 500ms;
    cursor: pointer;
    &.arrow-left {
      // justify-content: flex-end;
      grid-area: arrowleft;
      top: 50%;
      right: 0vw;
    }
    &.arrow-right {
      top: 50%;
      left: 5vw;
      grid-area: arrowright;
    }

    &:hover,
    &:focus {
      scale: 1.1;
      color: var(--font-color);
    }
  }

  // T E X T   S E T U P
  // ----------------
  .subtext {
    grid-area: subtitle;

    font-family: $ff-ss-2;
    font-weight: 100;
    font-size: clamp(0.85rem, 1.5vw, 1.25rem);

    color: var(--font-color);

    line-height: 1.5rem;
    text-transform: uppercase;
  }

  .maintext {
    grid-area: title;

    font-family: $ff-ss-6;
    font-weight: 200;
    font-size: clamp(2.3rem, 4.3vw, 9.5rem);
    letter-spacing: -0.015em;

    color: var(--font-color);

    text-transform: capitalize;
    vertical-align: text-top;
    width: max-content;
    max-width: 66vw;
    width: 100%;
    line-height: 1.225;
    position: relative;
    background: -webkit-linear-gradient(var(--font-color), var(--font-color2));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;

    &:hover + .more-section p,
    &:focus + .more-section p {
      background: var(--font-color);
      color: black;
      padding: 0.4em 1.25em;
      translate: 0;
    }
  }

  .pageno {
    grid-area: pageno;

    font-family: $ff-ss-2;
    font-weight: 100;
    font-size: clamp(0.85rem, 1.5vw, 1.25rem);
    line-height: 1.5rem;

    color: var(--font-color);

    text-align: center;
    text-transform: uppercase;
  }

  // See more section
  // ------------------

  .more-section {
    grid-area: more;
    color: var(--font-color);
    font-size: clamp(1rem, 1.3vw, 3rem);
    font-family: $ff-ss-6;

    letter-spacing: 0.3em;

    p {
      border-radius: 2em;
      transition-property: padding, background, color, translate;
      transition-duration: 400ms, 600ms, 600ms, 600ms;
      transition-delay: 0ms, 200ms, 200ms, 200ms;
      width: fit-content;
      padding: 0.4em 1.25em;
      translate: -1em -1em;
      cursor: pointer;
      &:hover,
      &:focus {
        background: var(--font-color);
        color: black;
        padding: 0.4em 1.25em;
        translate: 0;
      }
      .more-icon {
        font-size: clamp(0.8rem, 1.2vw, 3rem);
        svg {
          animation: bounce 2s ease infinite;
        }
      }
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-0.2em);
        }
        60% {
          transform: translateY(-0.1em);
        }
      }
    }
  }
}
</style>
