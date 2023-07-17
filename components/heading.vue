<template>
  <nav>
    <!-- Flex container -->
    <div class="flex-container">
      <!-- Logo -->
      <div class="logo">
        <!-- <img
          src="~/assets/logos/transparent_black_notext.png"
          alt="DV Studio"
          srcset=""
        /> -->
        <v-btn
          elevation="2"
          outlined
          rounded
          id="cta_button"
          color="#fff"
          href="mailto:info@dvstudio.hu?subject=DV Stúdió - Egyeztetés kérése&body=Kedves DV Stúdió,%0ASzeretnék egyeztetni az alábbival kapcsolatban Veletek:%0A%0A%0A%0A"
          >Egyeztessünk</v-btn
        >
        <div class="telephone-number">
          <a href="tel:+36202506936">
            <v-icon size="1.5em" color="#fff">mdi-phone </v-icon> +36 20 250
            6936</a
          >
        </div>
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
  methods: {
    navigateTo(pageloc) {
      if (!this.selected) {
        this.selected = true
        setTimeout(() => {
          window.open(pageloc, '_blank')
          setTimeout(() => {
            this.selected = false
          }, 1000)
        }, 100)
      }
    },
  },
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
      padding: 1em 1em;
      img {
        width: auto;
        height: clamp(3.5rem, 9vw, 5rem);
        filter: invert(1);
        object-fit: cover;
      }
      #cta_button {
        mix-blend-mode: difference;
        $color1: #fff;
        $color2: #000;
        color: $color2;
        // background-color: $color1;
        // border-color: $color1;
        // border-radius: 0.25rem;
        // padding: 0.5rem 1rem;
        // font-size: 0.875rem;
        // line-height: 1.5;
        // letter-spacing: 0.02857em;
        // text-transform: uppercase;
        // font-weight: 500;
        // border: 1px solid transparent;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: $color2;
          color: $color1;
          border-color: $color2;
        }
      }
      .telephone-number {
        font-size: 0.75rem;
        color: #fff;
        margin-top: 0.5rem;
        text-align: right;
      }
    }
  }
}
</style>
