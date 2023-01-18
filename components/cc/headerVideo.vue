<template>
  <div class="relative">
    <div class="head-video-wrapper">
      <video
        autoplay="autoplay"
        loop="loop"
        preload="auto"
        muted
        playsinline
        webkit-playsinline
        :asrc="videoSrc"
        class="w-full h-full object-cover"
      >
        <source :src="videoSrc" type="video/mp4" />
        <!-- <source src="~/assets/media/hero_bg_720p_bw.webm" type="video/webm" /> -->
      </video>
    </div>
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
</template>

<script>
export default {
  props: ['videoSrc'],
}
</script>

<style lang="scss">
.head-video-wrapper {
  height: 400px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1920/540;
  }
  overflow: hidden;
}
</style>
