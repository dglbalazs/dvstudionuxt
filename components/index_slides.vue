<template>
  <div
    class="wrapper level1"
    :style="{
      '--current-font-color': slider.currentColor,
      '--current-bg-color': slider.currentBgColor,
    }"
  >
    <!-- <div class="leftarrow" @click="navigation('left')">-</div>
    <div class="rightarrow" @click="navigation('right')">-</div> -->
    <div
      :class="{ 'arrow arrow-left': true, inactive: slider.slideChange }"
      @click="navigation('left')"
      tabindex="0"
    >
      <font-awesome-icon icon="fa-solid fa-circle-left" />
    </div>
    <div
      :class="{ 'arrow arrow-right': true, inactive: slider.slideChange }"
      @click="navigation('right')"
      tabindex="0"
    >
      <font-awesome-icon icon="fa-solid fa-circle-right" />
    </div>

    <!-- <ccHelperBackground1></ccHelperBackground1> -->
    <!-- Dynamically create slides -->
    <slide
      v-for="(slide, index) in slider.slides"
      :key="index"
      :id="slide.id"
      :subtext="slide.subtext"
      :maintext1="slide.maintext1"
      :maintext2="slide.maintext2"
      :ctatext="slide.ctatext"
      :bgcolor="slide.bgcolor"
      :fontcolor="slide.fontcolor"
      :subcolor="slide.subcolor"
      :fontcolor2="slide.fontcolor2"
      :button_hover_color="slide.button_hover_color"
      :button_hover_bg="slide.button_hover_bg"
      :bgimage="slide.bgimage"
      :backgroundblend="slide.backgroundblend"
      :subtext_different="slide.subtext_different"
      :ctaUrl="slide.ctaUrl"
      :class="{
        visible:
          slider.currentName == slide.name || slider.newName == slide.name,
        incomingLeft:
          slider.newName == slide.name && slider.slideChangeDirection == 'left',
        incomingRight:
          slider.newName == slide.name &&
          slider.slideChangeDirection == 'right',
        exitingLeft:
          slider.currentName == slide.name &&
          slider.slideChangeDirection == 'left' &&
          slider.slideChange == true,
        exitingRight:
          slider.currentName == slide.name &&
          slider.slideChangeDirection == 'right' &&
          slider.slideChange == true,
      }"
      :type="slide.type"
    ></slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: {
        current: 0,
        slides: ['landing', 'eskuvo', 'ceg', 'rendezveny'],
        currentName: 'landing',
        newName: '',
        maxNumber: 3,
        slideChange: false,
        slideChangeDirection: undefined,
        currentColor: 'hsl(0, 0%, 75%)',
        currentBgColor: 'hsl(0, 0%, 9%)',
        slides: [
          {
            id: 1,
            name: 'landing',
            subtext: 'Lapozzon jobbra vagy balra',
            maintext1: 'Kreatív média',
            maintext2: 'megoldások',
            bgcolor: 'hsla(0, 0%, 9%, 0)',
            fontcolor: 'hsl(0, 0%, 90%)',
            subcolor: 'hsl(0, 0%, 100%)',
            fontcolor2: 'hsl(0, 0%, 100%)',
            button_hover_color: 'black',
            button_hover_bg: 'hsl(0, 0%, 75%)',
            bgimage: require('~/assets/media/fooldal_logonelkul.png'),
            backgroundblend: false,
            subtext_different: false,
            ctatext: '',
            ctaUrl: '/staff',
            type: 'promo-site',
          },
          {
            id: 2,
            name: 'eskuvo',
            subtext: 'Profi Esküvői Csapat',
            maintext1: 'Értjük az egyszeri',
            maintext2: 'Pillanatok Fontosságát.',
            bgcolor: 'hsla(0, 0%, 9%, 0)',
            fontcolor: 'hsl(0, 0%, 90%)',
            subcolor: 'hsl(0, 0%, 100%)',
            fontcolor2: 'hsl(0, 0%, 100%)',
            button_hover_color: 'black',
            button_hover_bg: 'hsl(0, 0%, 75%)',
            bgimage: require('~/assets/media/eskuvo.png'),
            backgroundblend: true,
            subtext_different: true,
            ctatext: 'Részletesebben',
            ctaUrl: '/wedding',
            type: 'real-site',
          },
          {
            id: 3,
            name: 'ceg',
            subtext: 'Céges Imázs',
            maintext1: 'Új Köntös',
            maintext2: 'A Márkádnak.',
            bgcolor: 'hsla(0, 0%, 9%, 0)',
            fontcolor: 'hsl(0, 0%, 90%)',
            subcolor: 'hsl(0, 0%, 100%)',
            fontcolor2: 'hsl(0, 0%, 100%)',
            button_hover_color: 'black',
            button_hover_bg: 'hsl(0, 0%, 75%)',
            bgimage: require('~/assets/media/ceges.png'),
            backgroundblend: true,
            subtext_different: true,
            ctatext: 'Részletesebben',
            ctaUrl: '/branding',
            type: 'real-site',
          },
          {
            id: 4,
            name: 'rendezveny',
            subtext: 'Nagyszabású rendezvények',
            maintext1: 'Digitálisan is éld',
            maintext2: 'újra az élményt.',
            bgcolor: 'hsla(0, 0%, 9%, 0)',
            fontcolor: 'hsl(0, 0%, 90%)',
            subcolor: 'hsl(0, 0%, 100%)',
            fontcolor2: 'hsl(0, 0%, 100%)',
            button_hover_color: 'black',
            button_hover_bg: 'hsl(0, 0%, 75%)',
            bgimage: require('~/assets/media/rendezvenyek.png'),
            backgroundblend: true,
            subtext_different: true,
            ctatext: 'Részletesebben',
            ctaUrl: '/events',
            type: 'real-site',
          },
          // {
          //   id: 5,
          //   name: 'photo_booth',
          //   subtext: 'DV Mediabox',
          //   maintext1: 'Egyedülálló fotó és videó',
          //   maintext2: 'automata rendezvényekre',
          //   bgcolor: 'hsla(0, 0%, 4%, 1)',
          //   fontcolor: 'hsla(0, 0%, 84%, 1)',
          //   subcolor: 'hsla(0, 0%, 84%, 1)',
          //   fontcolor2: 'hsla(0, 0%, 84%, 1)',
          //   button_hover_color: 'black',
          //   button_hover_bg: 'hsla(0, 0%, 84%, 1)',
          //   bgimage: require('~/assets/media/photo_booth_bg.png'),
          //   backgroundblend: false,
          //   subtext_different: false,
          //   ctatext: 'Hamarosan...',
          //   ctaUrl: '/events',
          //   type: 'promo-site',
          // },
        ],
      },
    }
  },
  computed: {
    ActiveSlide() {
      return this.$store.getters['slide/getSlide']
    },
  },
  created() {
    let currentStore = this.ActiveSlide
    window.addEventListener('keydown', this.keydown)
    this.slider.current = currentStore.current
    this.slider.currentName = currentStore.currentName
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keydown)
  },
  methods: {
    // Event Handler for Key Down
    keydown(e) {
      //Arrow left
      if (e.keyCode == 37) this.navigation('left')

      //Arrow right
      if (e.keyCode == 39) this.navigation('right')
    },

    // Function to slide to the next slide
    navigation(direction) {
      if (this.slider.slideChange) return
      this.slider.slideChange = true
      this.slider.slideChangeDirection = direction
      this.slider.current = this.navigationResult(direction)
      this.slider.newName = this.slider.slides[this.slider.current].name
      // console.log(this.slider.newName)
      setTimeout(() => {
        this.slider.slideChange = false
        this.slider.currentName = this.slider.newName
        this.slider.newName = ''
        this.slider.currentColor =
          this.slider.slides[this.slider.current].fontcolor
        this.slider.currentBgColor =
          this.slider.slides[this.slider.current].bgcolor
        this.$store.commit('slide/setSlide', {
          current: this.slider.current,
          currentName: this.slider.currentName,
        })
      }, 1200)
    },

    // Function to determine the next slide
    navigationResult(direction) {
      let result
      if (direction == 'left') {
        this.slider.current - 1 < 0
          ? (result = this.slider.maxNumber)
          : (result = this.slider.current - 1)
        // console.log(result)
      }
      if (direction == 'right') {
        this.slider.current + 1 > this.slider.maxNumber
          ? (result = 0)
          : (result = this.slider.current + 1)
        // console.log(result)
      }
      return result
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  color: hsl(0, 0%, 40%);
  color: hsl(0, 0%, 80%);
  color: hsl(210, 50%, 60%);
  color: #7b7b7b;
  color: #f4eff3;

  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  * {
    padding: 0;
    margin: 0;
  }
  --var-clr-tester: hsl(130, 37%, 30%);
  --var-clr-tester: hsl(90, 57%, 80%);
  --var-clr-tester: hsl(2, 21%, 34%);
  --var-clr-tester: hsl(2, 41%, 84%);

  .arrow {
    display: flex;
    z-index: 4;
    // margin-inline: 2em;
    color: White;
    font-size: max(2rem, 2.5vw);
    // font-size: 2.5vw;
    position: absolute;
    width: min-content;
    transition: 500ms;
    cursor: pointer;
    &.inactive {
      color: grey !important;
      scale: 1 !important;
    }
    &.arrow-left {
      // justify-content: flex-end;
      top: 20%;
      left: 5%;
      @media (max-width: 50em) and (orientation: landscape) {
        top: 16.5%;
        left: 5%;
      }
      @media (min-width: 50em) {
        top: 33.25%;
        left: 15%;
      }
    }
    &.arrow-right {
      top: 20%;
      left: 20%;
      @media (max-width: 50em) and (orientation: landscape) {
        top: 16.5%;
        left: 20%;
      }
      @media (min-width: 50em) {
        top: 33.25%;
        left: 25%;
      }
    }
    &:hover,
    &:focus {
      scale: 1.1;
      color: var(--current-font-color);
    }
  }

  .slide {
    $animationtime: 1.2s;
    $animationfunction: cubic-bezier(0.75, -0.02, 0.45, 1);
    position: absolute;
    visibility: hidden;
    z-index: 2;
    animation-timing-function: $animationfunction;

    &.visible {
      visibility: visible;
    }

    // &.maintext1 {
    //   translate: 0;
    //   transition: 1.3s;
    // }
    // &.maintext2 {
    //   translate: 0;
    //   transition: 1.4s;
    // }
    &.incomingLeft {
      z-index: 3;
      animation-timing-function: $animationfunction;
      animation: $animationtime slideChangeLeft $animationfunction forwards;
      // .maintext1 {
      //   translate: -3% 0;
      // }
      // .maintext2 {
      //   translate: -3% 0;
      // }
    }

    &.incomingRight {
      z-index: 3;
      animation-timing-function: $animationfunction;
      animation: $animationtime slideChangeRight $animationfunction forwards;
      // .maintext1 {
      //   translate: 3% 0;
      // }
      // .maintext2 {
      //   translate: 3% 0;
      // }
    }

    &.exitingLeft {
      animation: $animationtime slideExitLeft $animationfunction forwards;
    }
    &.exitingRight {
      animation: $animationtime slideExitRight $animationfunction forwards;
    }
  }
}

@keyframes slideChangeLeft {
  from {
    translate: -100% 0%;
    filter: brightness(0.1);
  }

  to {
    translate: 0;
    filter: brightness(1);
  }
}

@keyframes slideChangeRight {
  from {
    translate: 100% 0%;
    filter: brightness(0.1);
  }

  to {
    translate: 0;
    filter: brightness(1);
  }
}

@keyframes slideExitLeft {
  from {
    translate: 0;
    filter: brightness(1);
  }

  to {
    translate: 25% 0%;
    filter: brightness(0.2);
  }
}

@keyframes slideExitRight {
  from {
    translate: 0;
    filter: brightness(1);
  }

  to {
    translate: -25% 0%;
    filter: brightness(0.2);
  }
}
</style>
