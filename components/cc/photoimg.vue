<!-- INSERT INTO THE Template section -->

<!-- <CcPhotoimg
:image="CcPhotoImg1.image"
:borderDir="CcPhotoImg1.borderDir"
:height="CcPhotoImg1.height"
:width="CcPhotoImg1.width"
:scaleVw="CcPhotoImg1.scaleVw"
:mobileScaleVw="CcPhotoImg1.mobileScaleVw"
:minW="CcPhotoImg1.minW"
></CcPhotoimg> -->

<!-- INSERT INTO THE data() api -->

<!-- CcPhotoImg1: {
    image: require('~/assets/media/_wedding_bg.png'),
    borderDir: 'ru',
    height: 400,
    width: 400,
    scaleVw: '30vw',
    mobileScaleVw: '50vw',
    minW: '300px',
  }, -->

<template>
  <div>
    <div
      :class="['photoimg', borderDir]"
      :style="{
        '--height': height,
        '--width': width,
        '--scale': scaleVw,
        '--mobile-scale': mobileScaleVw,
        '--min-width': minW,
        backgroundImage: `url(${image})`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    borderDir: {
      type: String,
      required: true,
    },
    scaleVw: {
      type: String,
      required: true,
    },
    mobileScaleVw: {
      type: String,
      required: true,
    },
    minW: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.photoimg {
  --height: 486;
  --width: 302;
  --scale: 20vw;
  --background-url: '';
  --mobile-scale: '';
  --min-width: '';
  // left down;
  &.ld {
    --border-x: -5%;
    --border-y: 5%;
  }
  // right down;
  &.rd {
    --border-x: 5%;
    --border-y: 5%;
  }
  // left up;
  &.lu {
    --border-x: -5%;
    --border-y: -5%;
  }
  // left down;
  &.ru {
    --border-x: 5%;
    --border-y: -5%;
  }
  grid-area: img;
  aspect-ratio: var(--width) / var(--height);
  width: var(--scale);
  min-width: var(--min-width);
  @media (max-width: 50em) {
    width: var(--mobile-scale);
  }
  background: var(--background-url);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  // translate: 0% 0% !important;
  // outline: 2px solid white;
  // outline-offset: 10px left;
  &::after {
    content: ' ';
    width: 100%;
    height: 100%;
    background: transparent;
    border: 3px solid white;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate(var(--border-x), var(--border-y));
  }
}
</style>
