module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '19shinkan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Wasedasai2019 staff recruit site' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Noto+Serif+JP"}
    ],
    script:[
      { src: '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*☄
  ** Webfontloader
  */  
  modules: [['nuxt-webfontloader']],
    webfontloader: {
      typekit: {
        id: 'blm3vtb'
      }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
