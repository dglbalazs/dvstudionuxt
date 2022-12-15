<template>
  <v-card class="mx-auto" max-width="344" dark>
    <!-- <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img> -->

    <v-card-title> Modern technika </v-card-title>

    <v-card-subtitle> 2 drónnal felszerelve</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text @click="show = !show">
        {{ show ? 'Kevesebb' : 'Több infó' }}</v-btn
      >

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          Felszereléseinket mindig igyekszünk a technikai fejlődések mentén
          korszerűsíteni - így a kameráink mellett 2 drónnal is rendelkezünk,
          amelyekkel csodás légi felvételek készíthetőek. Nem csak az eszközre
          van szükség, de a szakmai felkészültségre is, így ezeket hozzáértő és
          képesített szakemberek kezelik, hazánk légi szabályozásainak
          megfelelően.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped>
v-card,
.v-card {
  width: 100%;
  height: min-content;
  // max-width:344px;
  @media (min-width: 100em) {
    max-width: 22vw !important;
    width: 22vw !important;

    .v-card__title {
      font-size: max(1.25rem, 1.25vw) !important;
      line-height: 2em !important;
      padding: max(16px, 0.75em) !important;
    }

    .v-card__subtitle {
      font-size: max(0.875rem, 0.675vw) !important;
      padding: max(16px, 1.28em) !important;
      padding-top: 0 !important;
    }

    .v-card__actions {
      padding: max(8px, 0.575vw) !important;
      padding-bottom: max(16px, 1.15vw) !important;
      button {
        font-size: max(0.875rem, 0.675vw) !important;
        i {
          font-size: max(1.25rem, 1.25vw) !important;
        }
      }
    }

    .v-card__text {
      font-size: max(0.875rem, 0.675vw) !important;
      padding: max(16px, 1.15em) !important;
      line-height: 1.6;
    }
  }
}
</style>
