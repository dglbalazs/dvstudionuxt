<template>
  <nav>
    <!-- Flex container -->
    <div class="flex-container">
      <!-- Logo -->
      <div class="logo">
        <img
          src="~/assets/logos/transparent_black_notext.png"
          alt="DV Studio"
          srcset=""
        />
      </div>
      <!-- Menu items -->
      <!-- <div class="ml-6 hidden md:flex items-center justify-between space-x-6">
        <div class="p-2" tabindex="0">menu item</div>
        <div class="p-2" tabindex="0">menu item</div>
        <div class="p-2" tabindex="0">menu item</div>
        <nuxt-link to="/cica">
          <div class="p-2" tabindex="0">menu item</div>
        </nuxt-link>
      </div> -->
      <!-- CTA Button -->
      <!-- <div
        class="bg-white text-black rounded-full flex items-center baseline p-3 px-6"
      >
        Egyeztessünk
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'heading',
}
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  margin-inline: auto;
  padding: 1.5rem;
  top: 0px;
  right: 0px;
  width: max-content;
  z-index: 999;

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    .logo {
      padding: 1em 3em;
      img {
        width: auto;
        height: clamp(3.5rem, 9vw, 5rem);
        filter: invert(1);
        object-fit: cover;
      }
    }
  }
}
</style>
