<template>
  <v-card dark>
    <v-tabs color="deep-purple accent-4" right>
      <v-tab>Landscape</v-tab>
      <v-tab>City</v-tab>
      <v-tab>Abstract</v-tab>

      <v-tab-item v-for="n in 3" :key="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4">
              <v-img
                dark
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.v-image {
  cursor: pointer;
  transition: 250ms ease-in-out;
  filter: brightness(0.75) grayscale(80%);
  &:hover {
    border: 1px solid white;
    // box-shadow: 2px 2px 2px grey;
    border: 1px solid grey;
    scale: 1.025;
    filter: brightness(1) grayscale(0);
  }
}
</style>
