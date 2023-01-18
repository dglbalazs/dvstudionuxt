<template>
  <div class="staff level2">
    <CcBackButton destination="/"></CcBackButton>
    <div
      v-for="staff in staff_info"
      :key="staff.id"
      :class="[
        'subpage-content__wrapper',
        current_selection == staff.id ? 'active' : 'inactive',
      ]"
      :style="{
        '--bg-color-grad1': staff.clr1,
        '--bg-color-grad2': staff.clr2,
      }"
    >
      <div class="bg-grad"></div>
      <img :src="staff.img" />
      <CcText
        class="staff_name"
        :txt="staff.name"
        subtxt=""
        light
        center
        biggest
        ss6
        bold
        doubleline
        letterspace-big
        stroke-light
        fitcontent
      ></CcText>
      <CcText
        class="staff_position"
        :txt="staff.position"
        :subtxt="staff.description"
        light
        right
        big
        ss3
        bold
        doubleline
        letterspace-medium
        fitcontent
      ></CcText>
    </div>
    <ccStaffNavigator
      class="staff-nav"
      :staffselect="current_selection"
    ></ccStaffNavigator>
  </div>
</template>

<script>
export default {
  created() {
    this.$nuxt.$on('staff-select', (data) => {
      this.current_selection = data
    })
  },
  data() {
    return {
      current_selection: 1,
      staff_info: {
        Ati: {
          id: 1,
          name: 'Ati',
          position: 'Az alapító',
          description: 'Fotó, videó, utómunka',
          img: require('~/assets/media/Ati.png'),
          clr1: 'rgba(7, 82, 7, 0.15)',
          clr2: 'rgba(7, 150, 7, 0.15)',
        },
        Vera: {
          id: 2,
          name: 'Vera',
          position: 'Az intézkedő',
          description: 'Fotó, videó, utómunka',
          img: require('~/assets/media/Vera.png'),
          clr1: 'rgba(7, 18, 82, 0.15)',
          clr2: 'rgba(7, 18, 150, 0.15)',
        },
        Tomi: {
          id: 3,
          name: 'Tomi',
          position: 'A szakértő',
          description: 'Fotó, videó, utómunka',
          img: require('~/assets/media/TomiStaff.png'),
          clr1: 'rgba(82, 18, 7, 0.15)',
          clr2: 'rgba(150, 18, 7, 0.15)',
        },
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

.staff {
  display: grid;
  grid-template-areas: 'staffmember';
  overflow-y: hidden;
  hr {
    // margin: 1em 0;
    border-color: rgba(255, 255, 255, 0.527);
  }
  .subpage-content__wrapper {
    grid-area: staffmember;
    &.inactive {
      transition: 550ms;
      opacity: 0;
      visibility: hidden;
    }

    &.active {
      transition: 1250ms;
      opacity: 1;
      visibility: visible;
    }

    // --bg-color-grad1: rgba(18, 82, 7, 0.15);
    // --bg-color-grad2: rgba(18, 150, 7, 0.15);
    margin: 0 auto;
    max-width: 90vw;
    height: 100vh;
    // max-width: 1200px;
    @media (min-width: 50em) {
      max-width: 75vw;
    }
    padding: 0 1em;

    // position: relative;

    .bg-grad {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at 50% 50%,
        var(--bg-color-grad1) 0%,
        var(--bg-color-grad1) 25%,
        #161616 50%
      );
    }

    img {
      position: absolute;
      bottom: 5vh;
      left: 50%;
      transform: translateX(-50%);
      height: 80vh;
    }

    .staff_name {
      position: absolute;
      top: 15vh;
      left: 7.5vw;
      //   transform: translateX(-50%);
      //   border: 1px solid pink;
      @media (orientation: landscape) and (min-width: 50em) {
        left: 25vw;
      }
    }

    .staff_position {
      position: absolute;
      top: 75vh;
      right: 7.5vw;
      //   transform: translateX(-50%);
      //   border: 1px solid pink;
      @media (orientation: landscape) and (min-width: 50em) {
        top: 30vh;
        right: 10vw;
      }
    }
  }
  .staff-nav {
    position: fixed;
    bottom: 5vh;
    left: 50%;
    translate: -50%;
    @media (orientation: landscape) and (min-width: 50em) {
      bottom: 5vh;
    }
  }
}
</style>
