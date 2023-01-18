<template>
  <div class="wedding level2">
    <CcBackButton destination="/"></CcBackButton>
    <CcHeaderVideo
      :videoSrc="require('~/assets/media/ceges720.mp4')"
    ></CcHeaderVideo>
    <div class="subpage-content__wrapper">
      <!-- <v-row align="center" justify="center">
        <v-col class="text-center" id="page-header" cols="12">
          Tapasztalt esküvői csapat, modern technikával
        </v-col>
      </v-row>
      <v-divider></v-divider> -->
      <v-row align="center" justify="space-between" id="page-header_wrapper">
        <v-col class="text-left" id="page-header_main" cols="6">
          Branding
        </v-col>
        <v-col class="text-right" id="page-subheader_sub" cols="6">
          Céges imázs
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center" justify="space-between" id="page-content_wrapper">
        <!-- <ccVerticalInfoCard></ccVerticalInfoCard> -->

        <CcInfoCard
          :title="infoCards.card1.title"
          :subtitle="infoCards.card1.subtitle"
          :content="infoCards.card1.content"
        >
        </CcInfoCard>
        <CcInfoCard
          :title="infoCards.card2.title"
          :subtitle="infoCards.card2.subtitle"
          :content="infoCards.card2.content"
        >
        </CcInfoCard>
        <CcInfoCard
          :title="infoCards.card3.title"
          :subtitle="infoCards.card3.subtitle"
          :content="infoCards.card3.content"
        >
        </CcInfoCard>
      </v-row>
      <ccSPPhotoCollection
        :images="images"
        :pagemiddletext="pagemiddletext"
      ></ccSPPhotoCollection>
      <ccFooter></ccFooter>
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
      infoCards: {
        card1: {
          title: 'A Te média partnered!',
          subtitle: 'komplex média-megoldások',
          content:
            'Stúdiónk hatékony és megbízható partnered lehet a tartalomgyártásban. Legyen szó akár céged arculatáról vagy marketingjéről. Számunkra mindegy, hogy B2C vagy B2B vonalon van jelen kommunikációd, bárhol kapcsolódunk. Szívesen dolgozunk együtt marketing és grafikai cégekkel is. Állunk rendelkezésedre komplex fotó, videó, grafikai szolgáltatásokkal.',
        },
        card2: {
          title: 'Meglévő és induló',
          subtitle: 'vállalkozásoknak',
          content:
            'Több, mint 10 éves szakmai tapasztalattal segítjük az induló és a több éves piaci múlttal rendelkező vállalkozásokat is. Legyen szó folyamatos vagy projekt alapú együttműködésről, mi mindig a megbízhatóság és a minőség maximalizálás jegyében vállaljuk a megkereséseket. 2013-tól 2016-ig folyamatos együttműködéseink voltak startup cégekkel és befektetőkkel, dolgoztunk mind két oldalnak, így pontosan ismerjük, mire van szüksége egy induló vállalkozásnak.',
        },
        card3: {
          title: 'Sokszínűség és szakértelem',
          subtitle: 'a szolgáltatásainkban',
          content:
            'Stábunk képzett szakemberekből áll, akik szakmai orientációjuk, valamint kvalitások tekintetében is különböznek, de egyenként állnak össze úgy csapattá, hogy a legjobbat hozzák ki vállalkozásod megjelenéséből. Van köztünk, másodszakmánkat tekintve, rendező, pszichológus, médiaszakértő - mindezen területek tudáshalmazát felhasználva új perspektívákat nyitunk meg munkáinkban.',
        },
      },
      pagemiddletext: {
        middleText: 'Mi tudjuk, hogy nincs két egyforma esküvő',
        subText:
          'ezért miután kinéztétek a Hozzátok illő csomagajánlatunkat, mi azt személyre szabjuk Nektek, hogy olyan szépen és kifinomultan illeszkedjen Hozzátok, mint az esküvői ruhátok',
      },
      images: [
        {
          //https://drive.google.com/uc?export=view&id=1uChRHboKVRowqPLJydEyjEmE8klfdGpT
          src: 'https://dvstudio.hu/external/ceg_1_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/StXWmS0mwwlnJJdJ3rv8tPP7gHjSlr--2m2sruESeDoGzKxJRe7uAYbY09XpFH6b1J4=w100',
          alt: 'Image 1',
        },
        {
          src: 'https://dvstudio.hu/external/ceg_2_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/UjXSS_VNfdHmKhvUYOU0duZQ3McqUzy7yU_k0y0wM1ABoLYSUF1oFyCHfN9Yp3BN2sQ=w100',
          alt: 'Image 2',
        },
        {
          src: 'https://dvstudio.hu/external/ceg_3_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/fxVNbuRxmKri9JPXY28zTzK_J56BqqgWnW7gG_f0Bu-jn0wtfW3duJeNdj7POfVIQp0=w100',
          alt: 'Image 3',
        },
        {
          src: 'https://dvstudio.hu/external/ceg_4_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/oyXiU5XdU5icWt6MmdS9OSW_VRMP9eLdd-KyKqZhNJtMbQuRsRdJVW6STK0NDEcYSxg=w100',
          alt: 'Image 4',
        },
        {
          src: 'https://dvstudio.hu/external/ceg_5_medium.jpg',
          // lazysrc:
          //   'https://lh5.googleusercontent.com/mndg6fEBIt38d5NJWBADb-vhkgM9qoiS_hRmEkPUrmnjvcFV4XBlVQK81Jvj9wcgK6Y=w100',
          alt: 'Image 5',
        },
        {
          src: 'https://dvstudio.hu/external/ceg_6_medium.jpg',
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

  .price-activator-floating {
    position: fixed;
    right: 5vw;
    bottom: 10vh;
    z-index: 999;
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
