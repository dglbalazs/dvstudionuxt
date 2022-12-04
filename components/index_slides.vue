<template>
  <div class="wrapper">
    <div class="leftarrow" @click="navigation('left')">-</div>
    <div class="rightarrow" @click="navigation('right')">-</div>
    <slide
      :subtext="eskuvo.subtext"
      :maintext1="eskuvo.maintext1"
      :maintext2="eskuvo.maintext2"
      :bgcolor="eskuvo.bgcolor"
      :fontcolor="eskuvo.fontcolor"
      :fontcolor2="eskuvo.fontcolor2"
      :bgimage="eskuvo.bgimage"
      v-if="slider.currentName == 'eskuvo'"
    ></slide>
    <slide
      :subtext="ceg.subtext"
      :maintext1="ceg.maintext1"
      :maintext2="ceg.maintext2"
      :bgcolor="ceg.bgcolor"
      :fontcolor="ceg.fontcolor"
      :fontcolor2="ceg.fontcolor2"
      :bgimage="ceg.bgimage"
      v-if="slider.currentName == 'ceg'"
    ></slide>
    <slide
      :subtext="rendezveny.subtext"
      :maintext1="rendezveny.maintext1"
      :maintext2="rendezveny.maintext2"
      :bgcolor="rendezveny.bgcolor"
      :fontcolor="rendezveny.fontcolor"
      :fontcolor2="rendezveny.fontcolor2"
      :bgimage="rendezveny.bgimage"
      v-if="slider.currentName == 'rendezveny'"
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
        maxNumber: 2,
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
    navigation(direction) {
      let tempNumber
      if (direction == 'left') {
        tempNumber = this.slider.current - 1
        console.log(tempNumber)
        if (tempNumber < 0) {
          this.slider.current = this.slider.maxNumber
        } else {
          this.slider.current = tempNumber
        }
      }
      if (direction == 'right') {
        tempNumber = this.slider.current + 1
        console.log(tempNumber)
        if (tempNumber > this.slider.maxNumber) {
          this.slider.current = 0
        } else {
          this.slider.current = tempNumber
        }
      }
      console.log(this.current)
      this.slider.currentName = this.slider.slides[this.slider.current]
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

  .leftarrow,
  .rightarrow {
    position: fixed;
    height: 100vh;
    width: 8vw;
    top: 0px;
    color: white;
    font-size: 4rem;
    backdrop-filter: blur(2px) brightness(0.9);
    z-index: 50;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .leftarrow {
    left: 0px;
  }
  .rightarrow {
    right: 0px;
  }
}
</style>
