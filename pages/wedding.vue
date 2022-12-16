<template>
  <div class="wedding">
    <CcBackButton></CcBackButton>
    <CcHeaderVideo></CcHeaderVideo>
    <div class="subpage-content__wrapper">
      <!-- <v-row align="center" justify="center">
        <v-col class="text-center" id="page-header" cols="12">
          Tapasztalt esküvői csapat, modern technikával
        </v-col>
      </v-row>
      <v-divider></v-divider> -->
      <v-row align="center" justify="space-between" id="page-header_wrapper">
        <v-col class="text-left" id="page-header_main" cols="6">
          Esküvők
        </v-col>
        <v-col class="text-right" id="page-subheader_sub" cols="6">
          100+ esemény
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center" justify="space-between" id="page-content_wrapper">
        <CcInfoCard></CcInfoCard>
        <CcInfoCard></CcInfoCard>
        <CcInfoCard></CcInfoCard>
      </v-row>
      <ccSPPhotoCollection></ccSPPhotoCollection>
      <!-- <CcWeddingPriceCalculator></CcWeddingPriceCalculator> -->
    </div>
    <!-- <CcPhotoimg
      :image="CcPhotoImg1.image"
      :borderDir="CcPhotoImg1.borderDir"
      :height="CcPhotoImg1.height"
      :width="CcPhotoImg1.width"
      :scaleVw="CcPhotoImg1.scaleVw"
      :mobileScaleVw="CcPhotoImg1.mobileScaleVw"
      :minW="CcPhotoImg1.minW"
    ></CcPhotoimg> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      CcBorderedPhoto1: {
        image: require('~/assets/media/_wedding_bg.png'),
        borderDir: 'ru',
        height: 400,
        width: 400,
        scaleVw: '30vw',
        mobileScaleVw: '50vw',
        minW: '300px',
      },
    }
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

.wedding {
  overflow-y: hidden;
  hr {
    // margin: 1em 0;
    border-color: rgba(255, 255, 255, 0.527);
  }
  .subpage-content__wrapper {
    margin: 0 auto;
    max-width: 90vw;
    // max-width: 1200px;
    @media (min-width: 50em) {
      max-width: 75vw;
    }
    padding: 0 1em;
  }
  #page-header_wrapper {
    align-items: center;
    margin: max(3vh, 1em) 0;
    #page-header_main {
      color: rgb(255, 255, 255);
      font-family: $ff-ss-6;
      font-size: max(2.3vw, 1.25rem);
      font-weight: 700;
      text-shadow: 0.1em 0.1em 0.1em rgb(0, 0, 0);
      letter-spacing: 0.1em;
      // padding: 0 0.2em;
      // line-height: 1.8;
      scale: 1 0.95;
    }
    #page-subheader_sub {
      color: rgba(255, 255, 255, 0.805);
      font-family: $ff-ss-4;
      font-size: max(1.3vw, 0.75rem);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      scale: 1 0.95;

      // line-height: 1.8;
    }
  }
  #page-content_wrapper {
    margin: 2em 0;
    color: white;
    font-family: $ff-ss-2;
    font-weight: 400;
    gap: 2em;
  }
  .information-card {
    margin: 0 auto;
    // background: #1e1e1e;
    h1 {
      font-family: $ff-ss-4;
      font-size: 3vw;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin: 0;
      padding: 0;
    }
  }

  .v-parallax__image-container {
    filter: grayscale(100%) !important;
  }
}
</style>
