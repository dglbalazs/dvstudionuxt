<template>
  <div>
    <div
      name="heroupper"
      class="w-screen max-h-[80vh] overflow-hidden relative"
    >
      <video
        class="w-full h-[80vh] object-cover object-center xl:object-[center_-20vh] -z-10 opacity-70"
        id="hero_bg_video"
        ref="herovid"
        autoplay="autoplay"
        loop="loop"
        preload="auto"
        muted
        playsinline
        webkit-playsinline
        asrc="~/assets/media/hero_bg_720p_bw.webm"
      >
        <source
          src="~/assets/media/hero_bg_480p_nosound.mp4"
          type="video/mp4"
        />
        <source src="~/assets/media/hero_bg_720p_bw.webm" type="video/webm" />
      </video>
      <div class="absolute bottom-[10vh] z-40 mx-6 md:left-[10vw]">
        <p class="font-thin text-base uppercase text-white md:-translate-x-4">
          Professzionális megoldások
        </p>
        <p
          class="font-serif text-7xl align-text-bottom text-white w-[12ch] leading-relaxed before:w-[1px] before:absolute before:left-[-5vw] before:bottom-[.5ch] before:block before:h-3/4 before:z-40 before:bg-white"
        >
          Fotó & videó stúdió
        </p>
      </div>
      <div name="geolocation"></div>
      <div name="team"></div>
    </div>
    <div
      name="herolower"
      class="w-screen shadow-[0px_-2vh_3.5vh_4vh_#161616] z-40 relative"
    >
      <p class="text-[grey]">
        Kreatív szakembereink mind céges, mind magán jellegű felkérésekben
        vállalnak együttműködést.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index_video',
}
</script>

<style></style>
