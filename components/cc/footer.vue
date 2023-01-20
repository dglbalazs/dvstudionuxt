<template>
  <v-footer dark padless id="footer_wrap">
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      id="footer_card"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon[0]"
          class="mx-4 white--text"
          icon
          :href="icon[1]"
          target="blank"
        >
          <v-icon size="24px">
            {{ icon[0] }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Látogass el social media felületeinkre, hogy mindig naprakész maradj!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>DV Studio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      ['mdi-facebook', 'https://www.facebook.com/dvstudio2013'],
      [
        'mdi-linkedin',
        'https://www.linkedin.com/in/attila-t%C3%B3th-30a2ba141/',
      ],
      ['mdi-instagram', 'https://www.instagram.com/dvstudio2013/'],
    ],
  }),
}
</script>

<style lang="scss" scoped>
#footer_wrap {
  width: 100% !important;

  #footer_card {
    width: 100% !important;
  }
}
</style>
