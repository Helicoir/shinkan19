module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '早稲田祭2019運営スタッフ 新歓公式サイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '早稲田祭2019運営スタッフ 新歓公式サイト' },
      { hid: 'og:image', property: 'og:image', content: '/ogp.png' },
      { hid: "og:title", property: 'og:title', content: "早稲田祭2019運営スタッフ 新歓公式サイト"},
      { hid: 'og:type', property: 'og:type', content: 'website' },
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

