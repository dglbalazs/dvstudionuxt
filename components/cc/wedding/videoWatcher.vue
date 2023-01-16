<template>
  <v-carousel v-model="model" id="video-watcher">
    <v-carousel-item v-for="link in links" :key="link">
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <iframe
            title="vimeo-player"
            :src="link"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    links: [
      'https://player.vimeo.com/video/667713502?h=165d093552',
      'https://player.vimeo.com/video/667713114?h=5f6cb103f8',
      'https://player.vimeo.com/video/651067666?h=7066d1f12f',
      'https://player.vimeo.com/video/651066840?h=f6bafced8a',
      'https://player.vimeo.com/video/438157969?h=1094cd438f',
      'https://player.vimeo.com/video/369541325?h=b372883503',
      'https://player.vimeo.com/video/358129993?h=d417ffc675',
      'https://player.vimeo.com/video/356380775?h=965a6477de',
      'https://player.vimeo.com/video/344549404?h=5e1817729a',
      'https://player.vimeo.com/video/272164528?h=9a7f36661b',
      'https://player.vimeo.com/video/250092652?h=e3999d63d4',
      'https://player.vimeo.com/video/240384844?h=53576df960',
      'https://player.vimeo.com/video/237904629?h=1a6b686392',
      'https://player.vimeo.com/video/237630522?h=55f353623e',
      'https://player.vimeo.com/video/232524167?h=c5538ad2b0',
    ],
  }),
}
</script>

<style lang="scss">
#video-watcher {
  .v-window__next {
    right: 0;
  }

  .v-window__next,
  .v-window__prev {
    border: 1px solid #d4b068;
  }

  .fill-height {
    background: #161616;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-carousel__controls {
    display: none;
  }
}
</style>
