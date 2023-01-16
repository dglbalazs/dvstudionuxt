export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  targert: "static",
  ssr: false,
  generate :{ 
    fallback : true
  },
  head: {
    title: 'dvstudionuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel:'stylesheet',
        href:"https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Meddon&family=Oooh+Baby&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Quicksand:wght@300;400;500;600;700&family=Reenie+Beanie&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tangerine&display=swap"
      }
      // font-family: 'Arbutus Slab', serif;
      // font-family: 'Heebo', sans-serif;
      // font-family: 'Meddon', cursive;
      // font-family: 'Oooh Baby', cursive;
      // font-family: 'Open Sans', sans-serif;
      // font-family: 'Quicksand', sans-serif;
      // font-family: 'Reenie Beanie', cursive;
      // font-family: 'Roboto', sans-serif;
      // font-family: 'Roboto Condensed', sans-serif;
      // font-family: 'Roboto Flex', sans-serif;
      // font-family: 'Tangerine', cursive;
    ],

    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vuetify.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    }
  },
}
