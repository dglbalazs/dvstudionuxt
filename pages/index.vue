<template>
  <div>
    <index-slides @slide-selected="SlideSelected()"></index-slides>
  </div>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-down'
    }
    return +to.query.page < +from.query.page ? 'slide-down' : 'slide-down'
  },
  name: 'IndexPage',
  methods: {
    // Function that triggers a page change to the /cica page
    SlideSelected() {
      this.$router.push('/cica')
    },
  },
}
</script>

<style>
/* CSS sliding down transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.8s;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
