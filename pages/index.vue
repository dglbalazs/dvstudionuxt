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
    console.log(to.path, from.path)
    return to.path < from.path ? 'slide-up' : 'slide-down'
  },
  name: 'IndexPage',
  methods: {
    // Function that triggers a page change to the /cica page
    SlideSelected() {
      this.$router.push('/wedding')
    },
  },
}
</script>

<style></style>
