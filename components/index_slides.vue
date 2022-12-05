<template>
  <div
    class="wrapper"
    :style="{
      '--current-font-color': slider.currentColor,
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
    <slide
      :subtext="eskuvo.subtext"
      :maintext1="eskuvo.maintext1"
      :maintext2="eskuvo.maintext2"
      :bgcolor="eskuvo.bgcolor"
      :fontcolor="eskuvo.fontcolor"
      :fontcolor2="eskuvo.fontcolor2"
      :bgimage="eskuvo.bgimage"
      :backgroundblend="eskuvo.backgroundblend"
      :class="{
        visible: slider.currentName == 'eskuvo' || slider.newName == 'eskuvo',
        incomingLeft:
          slider.newName == 'eskuvo' && slider.slideChangeDirection == 'left',
        incomingRight:
          slider.newName == 'eskuvo' && slider.slideChangeDirection == 'right',
        exitingLeft:
          slider.currentName == 'eskuvo' &&
          slider.slideChangeDirection == 'left' &&
          slider.slideChange == true,
        exitingRight:
          slider.currentName == 'eskuvo' &&
          slider.slideChangeDirection == 'right' &&
          slider.slideChange == true,
      }"
    ></slide>
    <slide
      :subtext="ceg.subtext"
      :maintext1="ceg.maintext1"
      :maintext2="ceg.maintext2"
      :bgcolor="ceg.bgcolor"
      :fontcolor="ceg.fontcolor"
      :fontcolor2="ceg.fontcolor2"
      :bgimage="ceg.bgimage"
      :backgroundblend="ceg.backgroundblend"
      :class="{
        visible: slider.currentName == 'ceg' || slider.newName == 'ceg',
        incomingLeft:
          slider.newName == 'ceg' && slider.slideChangeDirection == 'left',
        incomingRight:
          slider.newName == 'ceg' && slider.slideChangeDirection == 'right',
        exitingLeft:
          slider.currentName == 'ceg' &&
          slider.slideChangeDirection == 'left' &&
          slider.slideChange == true,
        exitingRight:
          slider.currentName == 'ceg' &&
          slider.slideChangeDirection == 'right' &&
          slider.slideChange == true,
      }"
    ></slide>
    <slide
      :subtext="rendezveny.subtext"
      :maintext1="rendezveny.maintext1"
      :maintext2="rendezveny.maintext2"
      :bgcolor="rendezveny.bgcolor"
      :fontcolor="rendezveny.fontcolor"
      :fontcolor2="rendezveny.fontcolor2"
      :bgimage="rendezveny.bgimage"
      :backgroundblend="rendezveny.backgroundblend"
      :class="{
        visible:
          slider.currentName == 'rendezveny' || slider.newName == 'rendezveny',
        incomingLeft:
          slider.newName == 'rendezveny' &&
          slider.slideChangeDirection == 'left',
        incomingRight:
          slider.newName == 'rendezveny' &&
          slider.slideChangeDirection == 'right',
        exitingLeft:
          slider.currentName == 'rendezveny' &&
          slider.slideChangeDirection == 'left' &&
          slider.slideChange == true,
        exitingRight:
          slider.currentName == 'rendezveny' &&
          slider.slideChangeDirection == 'right' &&
          slider.slideChange == true,
      }"
    ></slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: {
        current: 0,
        slides: ['eskuvo', 'ceg', 'rendezveny'],
        currentName: 'eskuvo',
        newName: '',
        maxNumber: 2,
        slideChange: false,
        slideChangeDirection: undefined,
        currentColor: 'hsl(175, 58%, 75%)',
      },
      eskuvo: {
        subtext: 'Profi Esküvői Csapat',
        maintext1: 'Értjük az egyszeri',
        maintext2: 'Pillanatok Fontosságát.',
        bgcolor: 'hsl(175, 28%, 32%)',
        fontcolor: 'hsl(175, 58%, 75%)',
        fontcolor2: 'hsl(186, 78%, 70%)',
        bgimage: require('~/assets/media/wedding_bg3.png'),
        backgroundblend: false,
      },
      ceg: {
        subtext: 'Céges Imázs',
        maintext1: 'Új Köntös',
        maintext2: 'A Márkádnak.',
        bgcolor: 'hsl(150, 28%, 32%)',
        fontcolor: 'hsl(150, 58%, 75%)',
        fontcolor2: 'hsl(161, 75%, 75%)',
        bgimage: require('~/assets/media/_ceg_bg2.png'),
        backgroundblend: false,
      },
      rendezveny: {
        subtext: 'Nagyszabású rendezvények',
        maintext1: 'Digitálisan is éld',
        maintext2: 'újra az élményt.',
        bgcolor: 'hsl(2, 28%, 32%)',
        fontcolor: 'hsl(2, 41%, 84%)',
        fontcolor2: 'hsl(10, 61%, 84%)',
        bgimage: require('~/assets/media/_event_bg3.png'),
        backgroundblend: true,
      },
    }
  },
  methods: {
    navigationResult(direction) {
      let tempNumber
      let result
      if (direction == 'left') {
        tempNumber = this.slider.current - 1
        console.log(tempNumber)
        if (tempNumber < 0) {
          result = this.slider.maxNumber
        } else {
          result = tempNumber
        }
      }
      if (direction == 'right') {
        tempNumber = this.slider.current + 1
        console.log(tempNumber)
        if (tempNumber > this.slider.maxNumber) {
          result = 0
        } else {
          result = tempNumber
        }
      }
      return result
    },
    navigation(direction) {
      if (this.slider.slideChange) return
      this.slider.slideChange = true
      this.slider.slideChangeDirection = direction
      this.slider.current = this.navigationResult(direction)
      this.slider.newName = this.slider.slides[this.slider.current]
      console.log(this.slider.newName)
      setTimeout(() => {
        console.log('asd')
        this.slider.slideChange = false
        this.slider.currentName = this.slider.newName
        this.slider.newName = ''
        this.slider.currentColor = this[this.slider.currentName].fontcolor
      }, 1200)
    },
  },
}
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
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
    font-size: clamp(2rem, 2.5vw, 2.5rem);
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
      top: 22%;
      left: 5%;
      @media (min-width: 50em) {
        top: 33.25%;
        left: 15%;
      }
    }
    &.arrow-right {
      top: 22%;
      left: 20%;
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
    position: absolute;
    visibility: hidden;
    z-index: 2;
    animation-timing-function: ease;
    $animationtime: 1.2s;

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
      animation-timing-function: ease;
      animation: $animationtime slideChangeLeft forwards;
      // .maintext1 {
      //   translate: -3% 0;
      // }
      // .maintext2 {
      //   translate: -3% 0;
      // }
    }

    &.incomingRight {
      z-index: 3;
      animation-timing-function: ease;
      animation: $animationtime slideChangeRight forwards;
      // .maintext1 {
      //   translate: 3% 0;
      // }
      // .maintext2 {
      //   translate: 3% 0;
      // }
    }

    &.exitingLeft {
      animation: $animationtime slideExitLeft forwards;
    }
    &.exitingRight {
      animation: $animationtime slideExitRight forwards;
    }
  }
}

@keyframes slideChangeLeft {
  0% {
    translate: -100% 0%;
    filter: brightness(0.1);
  }

  15% {
    translate: -95% 0%;
    filter: brightness(0.1);
  }

  100% {
    translate: 0;
    filter: brightness(1);
  }
}

@keyframes slideChangeRight {
  0% {
    translate: 100% 0%;
    filter: brightness(0.1);
  }

  15% {
    translate: 95% 0%;
    filter: brightness(0.1);
  }

  100% {
    translate: 0;
    filter: brightness(1);
  }
}

@keyframes slideExitLeft {
  0% {
    translate: 0;
    filter: brightness(1);
  }

  15% {
    translate: 2% 0%;
    filter: brightness(0.95);
  }

  100% {
    translate: 25% 0%;
    filter: brightness(0.2);
  }
}

@keyframes slideExitRight {
  0% {
    translate: 0;
    filter: brightness(1);
  }

  15% {
    translate: -2% 0%;
    filter: brightness(0.95);
  }

  100% {
    translate: -25% 0%;
    filter: brightness(0.2);
  }
}
</style>
