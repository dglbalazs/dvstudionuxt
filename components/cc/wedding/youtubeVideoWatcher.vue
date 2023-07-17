<template>
  <div class="youtube-video-watcher__wrapper">
    <iframe
      class="youtube-video-watcher"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/videoseries?list=PLJ6xWMvX8BnNULmDZdwkRFBhTNNEBcsgP"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.youtube-video-watcher__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
