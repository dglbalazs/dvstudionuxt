<template>
  <div id="staff-navigator">
    <div
      :class="['navbox', 'clr-green', staffselect == 1 ? 'activated' : '']"
      @click="$nuxt.$emit('staff-select', 1)"
    ></div>
    <div
      :class="['navbox', 'clr-blue', staffselect == 2 ? 'activated' : '']"
      @click="$nuxt.$emit('staff-select', 2)"
    ></div>
    <div
      :class="['navbox', 'clr-red', staffselect == 3 ? 'activated' : '']"
      @click="$nuxt.$emit('staff-select', 3)"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['staffselect'],
}
</script>

<style lang="scss" scoped>
#staff-navigator {
  position: fixed;
  bottom: 50vh;
  left: 95%;
  translate: (-100% 50%);
  @media (orientation: landscape) and (min-width: 50em) {
    bottom: 5vh;
    left: 50%;
    translate: -50%;
  }
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) and (min-width: 50em) {
    flex-direction: row;
  }
  gap: 8vmax;
}
.navbox {
  --dimensions: 4.5vmin;
  width: var(--dimensions);
  height: var(--dimensions);
  display: inline-block;
  border-radius: 50%;
  transition: 250ms;
  box-shadow: 0 0 0.01vmin #fff, 0 0 0.2vmin #fff, 0 0 0.3vmin #fff,
    0 0 0.5vmin var(--color), 0 0 0.8vmin var(--color), 0 0 1.1vmin var(--color),
    0 0 1.5vmin var(--color), 0 0 3.5vmin var(--color);

  &:hover,
  &.activated {
    background-color: var(--color);
  }

  &:hover {
    cursor: pointer;
    scale: 1.2;
  }

  &.clr-green {
    --color: #39ff14;
  }

  &.clr-blue {
    --color: rgb(51, 87, 255);
  }

  &.clr-red {
    --color: rgb(255, 87, 51);
  }
}
</style>
