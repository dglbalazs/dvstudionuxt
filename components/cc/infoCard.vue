<template>
  <v-card class="mx-auto" max-width="344" dark>
    <!-- <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img> -->

    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

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
          {{ content }}
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
  props: {
    title: String,
    subtitle: String,
    content: String,
  },
}
</script>

<style lang="scss" scoped>
v-card,
.v-card {
  width: 100%;
  height: min-content;
  // width: 80vw !important;
  // max-width: 80vw !important;
  // max-width:344px;
  max-width: none !important;
  width: 71vw !important;

  .v-btn--icon {
    // display: none !important;
  }

  @media (min-width: 67em) {
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
