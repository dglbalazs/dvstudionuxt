<template>
  <v-app>
    <v-select
      id="ceremony-question"
      :items="items"
      label="Outlined style"
      dense
      outlined
    ></v-select>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style lang="scss"></style>
