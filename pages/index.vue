<template>
  <div>
    <index-slides></index-slides>
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
}
</script>

<style></style>
