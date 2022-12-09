<template>
  <div>
    <heading></heading>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
body {
  background: #161616;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}

body:has(.slide-down-enter-active),
body:has(.slide-up-enter-active),
body:has(.slide-down-leave-active),
body:has(.slide-up-leave-active) {
  overflow-y: hidden;
}

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
  .wrapper {
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
  .wrapper::after {
    translate: 0 100%;
  }
}

.slide-down-leave-to {
  .wrapper::after {
    translate: 0 0;
  }
}

// Slide down enter animation for the wedding page

.slide-down-enter-active {
  &.wedding::after {
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
  }
}

.slide-down-enter-from {
  &.wedding::after {
    translate: 0 0;
  }
}

.slide-down-enter-to {
  &.wedding::after {
    translate: 0 -100%;
  }
}

// ------------------------------

// Slide up enter animation for the index page
.slide-up-enter-active {
  .wrapper {
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
  .wrapper::after {
    translate: 0 0%;
  }
}

.slide-up-enter-to {
  .wrapper::after {
    translate: 0 100%;
  }
}

// Slide up leave animation for the wedding page

.slide-up-leave-active {
  &.wedding::after {
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
  }
}

.slide-up-leave-from {
  &.wedding::after {
    translate: 0 -100%;
  }
}

.slide-up-leave-to {
  &.wedding::after {
    translate: 0 0%;
  }
}
</style>
