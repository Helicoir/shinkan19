<template>
  <div>
    <nuxt/>
    <footer>
      <p><span>早稲田祭2019運営スタッフ</span></p>
      <p><span>新歓公式サイト</span></p>
      <BrainLine />
      <section class="footer_navWrap">
        <nuxt-link :to="'about'" class="footer_navWrap_a">早稲田祭について</nuxt-link>
        <nuxt-link :to="'events'" class="footer_navWrap_a wrapped">新歓イベント</nuxt-link>
        <nuxt-link :to="'activity'" class="footer_navWrap_a wrapped">活動について</nuxt-link>
        <nuxt-link :to="'entry'" class="footer_navWrap_a wrapped">入会について</nuxt-link>
        <nuxt-link :to="'contact'" class="footer_navWrap_a wrapped">お問い合わせ</nuxt-link>
      </section>
      <aside class="copyright">
        <p class="copyright_p">©︎早稲田祭2019運営スタッフ All Rights Reserved.</p>
      </aside>
    </footer>
  </div>
</template>

<script>
import BrainLine from '~/components/BrainLine'
import Modal from '~/components/Modal'
import globalNav from '~/components/globalNav'

export default {
  data(){
    return {
      modal: false,
    }
  },
  components: {
    BrainLine,
    Modal,
    globalNav
  },
  methods: {
    open(){
      this.modal = true
    },
    close(){
      this.modal = false
    }
  }
}

// Insert Adobe Typekit 

</script>

<style>

/* reset CSS start */
html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed,figure, figcaption, footer, header, hgroup,menu, nav, output, ruby, section, summary,time, mark, audio, video {	margin: 0;	padding: 0;	border: 0;	font-size: 100%;	font: inherit;	vertical-align: baseline;}/* HTML5 display-role reset for older browsers */article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {	display: block;}body {	line-height: 1;}ol, ul {	list-style: none;}blockquote, q {	quotes: none;}blockquote:before, blockquote:after,q:before, q:after {	content: '';	content: none;}table {	border-collapse: collapse;	border-spacing: 0;}
/* reset CSS end */

html {
  font-family: 'Noto Serif JP', serif, "Yu Mincho", serif, "YuMincho", serif, "Source Sans Pro", -apple-system, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #464655;
  font-weight: 300;
  font-style: normal;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

/* Global */
main{
  width: 85%;
  margin: 0 auto;
  margin-top: 3vmin;
}

h1{
  font-size: 8vmin;
  color: white;
}

h2{
  font-size: 6vmin;
  color: white;
  margin-bottom: 6vmin;
}
h2::before{
  content: "□";
  margin-right: 2vmin;
}
h3{
  color: white;
  font-size: 5vmin;
  margin: 3vmin 0;

}

p, span{
  color: white;
  font-size: 5vmin;
  line-height: 1.45;
  text-decoration: none;
}

a{
  text-decoration: none;
  color: white;
}


/* Footer */
footer{
  width: 100%;
  padding: 10vmin 10vmin 3vmin 10vmin;
  background: #1D1D1D;
}

.footer_navWrap{
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 8vmin 0 0 3vmin;
}

.wrapped{
  display: inline-block;
  width: 50%;
  margin-top: 4vmin;
}
.footer_navWrap_a::before{
  content: "◇";
}

.copyright{
  margin-top: 8vmin;
}
.copyright p{
  text-align: center;
  font-size: 3vmin;
}

</style>

