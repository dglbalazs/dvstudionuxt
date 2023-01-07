<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eum
        expedita quasi, esse sunt voluptatum, labore commodi repellat libero
        maxime dolore modi natus. Iusto natus pariatur, enim error voluptas
        porro?
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
