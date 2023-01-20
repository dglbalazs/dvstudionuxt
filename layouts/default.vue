<template>
  <div>
    <transition name="loading">
      <LoadingLoaderDV v-if="!initialized"></LoadingLoaderDV>
    </transition>
    <heading v-if="initialized"></heading>
    <Nuxt v-if="initialized" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialized: false,
    }
  },
  created() {
    this.$nuxt.$on('slideSelect', ($event) => this.slideSelected($event))
  },
  mounted: function () {
    setTimeout(() => {
      this.initialized = true
    }, 2300)
  },
  methods: {
    slideSelected(ctaUrl) {
      this.$router.push(ctaUrl)
    },
  },
}
</script>

<style lang="scss">
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

* {
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
}

html:focus-within {
  scroll-behavior: smooth !important;
}

body {
  background: #161616;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}

//---------------------------------------------------------------
// Custom scrollbar settings
//---------------------------------------------------------------

html {
  scrollbar-color: #d4b068 #f1f1f1;
  scrollbar-width: thin;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 0.4rem;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #d4b068 !important;
}

::-webkit-scrollbar-thumb:hover {
  background: #d4b068;
}

//---------------------------------------------------------------
// Selection settings
//---------------------------------------------------------------

::-moz-selection {
  /* Code for Firefox */
  color: rgb(0, 204, 255);
  text-shadow: 0 0 10px rgb(0, 204, 255);
  background: rgb(89, 0, 255) rgb(9, 5, 19);
}

::selection {
  color: rgb(0, 204, 255);
  text-shadow: 0 0 10px rgb(0, 204, 255);
  background: rgb(89, 0, 255) rgb(9, 5, 19);
}

body:has(.slide-down-enter-active),
body:has(.slide-up-enter-active),
body:has(.slide-down-leave-active),
body:has(.slide-up-leave-active) {
  overflow-y: hidden;
}

//---------------------------------------------------------------
//  ANIMATIONS
//---------------------------------------------------------------

// LOADING START

.loading-enter-active {
  animation: bounce-in 0.6s reverse;
}

.loading-leave-active {
  animation: bounce-in 0.6s;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

// LOADING END

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  $transition-time: 0.75s;
  $transition-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition: all $transition-time $transition-function;
}

// .slide-down-enter,
// .slide-up-leave-active {
//   // opacity: 0;
//   // transform: translate(0, 10%);
// }

// .slide-down-leave-active,
// .slide-up-enter {
//   // opacity: 0;
//   // transform: translate(0, -10%);
// }

// Slide down animation for the index page
.slide-down-leave-active {
  .level1 {
    // transition: all 2s;
    &::after {
      $transition-time: 0.75s;
      $transition-function: cubic-bezier(0.86, 0, 0.07, 1);
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      translate: 0 100%;
      transition: all $transition-time $transition-function;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      z-index: 4;
    }
  }
}

.slide-down-leave-from {
  .level1::after {
    translate: 0 100%;
  }
}

.slide-down-leave-to {
  .level1::after {
    translate: 0 0;
  }
}

// Slide down enter animation for the level2 page

.slide-down-enter-active {
  &.level2::after {
    $transition-time: 0.75s;
    $transition-function: cubic-bezier(0.86, 0, 0.07, 1);
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // translate: 0 100%;
    transition: all $transition-time $transition-function;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 4;
  }
}

.slide-down-enter-from {
  &.level2::after {
    translate: 0 0;
  }
}

.slide-down-enter-to {
  &.level2::after {
    translate: 0 -100%;
  }
}

// ------------------------------

// Slide up enter animation for the index page
.slide-up-enter-active {
  .level1 {
    // transition: all 2s;
    &::after {
      $transition-time: 0.75s;
      $transition-function: cubic-bezier(0.86, 0, 0.07, 1);
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      translate: 0 0%;
      transition: all $transition-time $transition-function;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      z-index: 4;
    }
  }
}

.slide-up-enter-from {
  .level1::after {
    translate: 0 0%;
  }
}

.slide-up-enter-to {
  .level1::after {
    translate: 0 100%;
  }
}

// Slide up leave animation for the level2 page

.slide-up-leave-active {
  &.level2::after {
    $transition-time: 0.75s;
    $transition-function: cubic-bezier(0.86, 0, 0.07, 1);
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    translate: 0 -100%;
    transition: all $transition-time $transition-function;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 4;
  }
}

.slide-up-leave-from {
  &.level2::after {
    translate: 0 -100%;
  }
}

.slide-up-leave-to {
  &.level2::after {
    translate: 0 0%;
  }
}
</style>
