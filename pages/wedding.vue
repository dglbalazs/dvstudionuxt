<template>
  <div class="wedding">
    <!-- a video -->
    // a video with mp4 and webm source
    <div class="relative">
      <div class="head-video-wrapper">
        <video
          autoplay="autoplay"
          loop="loop"
          preload="auto"
          muted
          playsinline
          webkit-playsinline
          asrc="~/assets/media/hero_bg_720p_bw.webm"
          class="w-full h-full object-cover"
        >
          <source
            src="~/assets/media/hero_bg_480p_nosound.mp4"
            type="video/mp4"
          />
          <source src="~/assets/media/hero_bg_720p_bw.webm" type="video/webm" />
        </video>
      </div>
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <!-- 2 col layout -->
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2">
        <div class="p-4">
          <h1 class="text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquam nunc nisl sit amet lorem. Sed euismod, nisl nec aliquam
            aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet
            lorem.
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="p-4">
          <h1 class="text-2xl font-bold">Lorem ipsum dolor sit amet</h1>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquam nunc nisl sit amet lorem. Sed euismod, nisl nec aliquam
            aliquam, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet
            lorem.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wedding {
  .head-video-wrapper {
    height: 400px;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 1920/540;
    }
  }
}
</style>
