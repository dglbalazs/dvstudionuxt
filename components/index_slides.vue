<template>
  <div class="wrapper">
    <!-- <div class="leftarrow" @click="navigation('left')">-</div>
    <div class="rightarrow" @click="navigation('right')">-</div> -->
    <slide
      @navigate-left="navigation('left')"
      @navigate-right="navigation('right')"
      :subtext="eskuvo.subtext"
      :maintext1="eskuvo.maintext1"
      :maintext2="eskuvo.maintext2"
      :bgcolor="eskuvo.bgcolor"
      :fontcolor="eskuvo.fontcolor"
      :fontcolor2="eskuvo.fontcolor2"
      :bgimage="eskuvo.bgimage"
      :class="{
        visible: slider.currentName == 'eskuvo' || slider.newName == 'eskuvo',
        incomingLeft:
          slider.newName == 'eskuvo' && slider.slideChangeDirection == 'left',
        incomingRight:
          slider.newName == 'eskuvo' && slider.slideChangeDirection == 'right',
      }"
    ></slide>
    <slide
      @navigate-left="navigation('left')"
      @navigate-right="navigation('right')"
      :subtext="ceg.subtext"
      :maintext1="ceg.maintext1"
      :maintext2="ceg.maintext2"
      :bgcolor="ceg.bgcolor"
      :fontcolor="ceg.fontcolor"
      :fontcolor2="ceg.fontcolor2"
      :bgimage="ceg.bgimage"
      :class="{
        visible: slider.currentName == 'ceg' || slider.newName == 'ceg',
        incomingLeft:
          slider.newName == 'ceg' && slider.slideChangeDirection == 'left',
        incomingRight:
          slider.newName == 'ceg' && slider.slideChangeDirection == 'right',
      }"
    ></slide>
    <slide
      @navigate-left="navigation('left')"
      @navigate-right="navigation('right')"
      :subtext="rendezveny.subtext"
      :maintext1="rendezveny.maintext1"
      :maintext2="rendezveny.maintext2"
      :bgcolor="rendezveny.bgcolor"
      :fontcolor="rendezveny.fontcolor"
      :fontcolor2="rendezveny.fontcolor2"
      :bgimage="rendezveny.bgimage"
      :class="{
        visible:
          slider.currentName == 'rendezveny' || slider.newName == 'rendezveny',
        incomingLeft:
          slider.newName == 'rendezveny' &&
          slider.slideChangeDirection == 'left',
        incomingRight:
          slider.newName == 'rendezveny' &&
          slider.slideChangeDirection == 'right',
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
      },
      eskuvo: {
        subtext: 'Profi Esküvői Csapat',
        maintext1: 'Értjük az egyszeri',
        maintext2: 'Pillanatok Fontosságát.',
        bgcolor: 'hsl(175, 28%, 32%)',
        fontcolor: 'hsl(175, 58%, 75%)',
        fontcolor2: 'hsl(186, 78%, 70%)',
        bgimage: require('~/assets/media/wedding_bg3.png'),
      },
      ceg: {
        subtext: 'Céges Imázs',
        maintext1: 'Új Köntös',
        maintext2: 'A Márkádnak.',
        bgcolor: 'hsl(150, 28%, 32%)',
        fontcolor: 'hsl(150, 58%, 75%)',
        fontcolor2: 'hsl(161, 75%, 75%)',
        bgimage: require('~/assets/media/_ceg_bg2.png'),
      },
      rendezveny: {
        subtext: 'Nagyszabású rendezvények',
        maintext1: 'Digitálisan is éld',
        maintext2: 'újra az élményt.',
        bgcolor: 'hsl(2, 28%, 32%)',
        fontcolor: 'hsl(2, 41%, 84%)',
        fontcolor2: 'hsl(10, 61%, 84%)',
        bgimage: require('~/assets/media/_event_bg3.png'),
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
        console.log(this.slider)
      }, 1500)
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

  .slide {
    position: absolute;
    visibility: hidden;
    z-index: 2;
    animation-timing-function: ease;

    &.visible {
      visibility: visible;
    }

    &.incomingLeft {
      z-index: 3;
      animation-timing-function: ease;
      animation: 1.5s slideChangeLeft forwards;
    }

    &.incomingRight {
      z-index: 3;
      animation-timing-function: ease;
      animation: 1.5s slideChangeRight forwards;
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
</style>
