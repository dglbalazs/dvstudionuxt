<template>
  <div>
    <div class="head-video-wrapper">
      <video
        autoplay="autoplay"
        loop="loop"
        preload="auto"
        muted
        playsinline
        webkit-playsinline
        :asrc="videoSrcWebm"
        class="w-full h-full object-cover"
      >
        <source :src="videoSrcWebm" type="video/webm" />
        <source :src="videoSrcMp4" type="video/mp4" />
      </video>
    </div>
    <div class="absolute inset-0 bg-black opacity-0"></div>
    <div class="head-video-bridge"></div>
  </div>
</template>

<script>
export default {
  props: ['videoSrcWebm', 'videoSrcMp4'],
}
</script>

<style lang="scss">
.head-video-wrapper {
  // position: relative;
  // z-index: 4;
  min-height: 500px;
  height: 55vh;
  video {
    object-position: 45% 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
  overflow: hidden;
}
.head-video-bridge {
  // border: 1px solid pink;
  width: 100vw;
  min-height: 500px;
  height: 55vh;
  position: absolute;
  top: 0%;
  translate: 0% 2%;
  // translate: 0% -100%;
  // z-index: 5;
  background-image: url('~/assets/media/wave-haikei.svg');
  // opacity: 0.9;
  background-size: cover;
  background-position: center bottom;
}
</style>
