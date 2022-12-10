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
}
</style>
