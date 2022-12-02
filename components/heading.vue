<template>
  <nav
    class="fixed mx-auto p-6 top-0 left-0 w-[100vw] z-50 border-b-2 border-white"
  >
    <!-- Flex container -->
    <div class="flex items-center justify-between container">
      <!-- Logo -->
      <div class="logo">
        <img
          src="~/assets/logos/transparent_black_notext.png"
          alt="DV Studio"
          srcset=""
          class="w-auto h-16 invert object-cover"
        />
      </div>
      <!-- Menu items -->
      <div class="ml-6 hidden md:flex items-center justify-between space-x-6">
        <div class="p-2" tabindex="0">menu item</div>
        <div class="p-2" tabindex="0">menu item</div>
        <div class="p-2" tabindex="0">menu item</div>
        <nuxt-link to="/cica2">
          <div class="p-2" tabindex="0">menu item</div>
        </nuxt-link>
      </div>
      <!-- CTA Button -->
      <div
        class="bg-white text-black rounded-full flex items-center baseline p-3 px-6"
      >
        Egyeztessünk
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'heading',
}
</script>
<style scoped></style>
