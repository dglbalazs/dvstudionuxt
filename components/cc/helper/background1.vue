<template>
  <div class="animated-bg-index"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.animated-bg-index {
  animation: theme 21s linear infinite;
  position: Relative;

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100vw; // IE/Edge
    height: 100vh; // fallback
    width: 100vmax;
    height: 100vmax;
    background: rgba(0, 0, 0, 0.25);
    animation: background 90s linear infinite;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  &:after {
    left: 15vw;
  }

  &:before {
    right: 15vw;
    animation-delay: -30s;
    animation-direction: reverse;
  }
}

@keyframes theme {
  0% {
    background: #74c390;
  }

  16% {
    background: #5dbdb6;
  }

  33% {
    background: #59d4e1;
  }

  50% {
    background: #51bce8;
  }

  66% {
    background: #fa5374;
  }

  83% {
    background: #e46653;
  }

  100% {
    background: #74c390;
  }
}

@keyframes background {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
