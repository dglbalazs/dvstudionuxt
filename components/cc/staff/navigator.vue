<template>
  <div id="staff-navigator">
    <div class="navbox-container" @click="$nuxt.$emit('staff-select', 1)">
      <div
        :class="['navbox', 'clr-green', staffselect == 1 ? 'activated' : '']"
      ></div>
    </div>
    <div class="navbox-container" @click="$nuxt.$emit('staff-select', 2)">
      <div
        :class="['navbox', 'clr-blue', staffselect == 2 ? 'activated' : '']"
      ></div>
    </div>
    <div class="navbox-container" @click="$nuxt.$emit('staff-select', 3)">
      <div
        :class="['navbox', 'clr-red', staffselect == 3 ? 'activated' : '']"
      ></div>
    </div>
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
  gap: 5.5vmax;
}

.navbox-container {
  display: grid;
  justify-content: center;
  align-items: center;
  @media (orientation: landscape) and (min-width: 50em) {
    align-items: end;
  }
  --container-dimensions: 10vmin;
  //   border: 1px solid pink;
  width: var(--container-dimensions);
  height: var(--container-dimensions);

  &:hover {
    cursor: pointer;
    .navbox {
      background-color: var(--color);
      scale: 1.2;
    }
  }
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
