<template>
  <section class="animation_container">
    <div class="FirstWrap">
      <div class="bgimg1">
        <span class="catch no1">桜は咲いた、</span>
      </div>
    </div>
    <div class="SecondWrap">
      <div class="bgimg2">
        <span class="catch no2">次は祭だ。</span>
        <div class="gradation_wrap">
          <p class="gradation_p">Scroll</p>
          <div class="gradation_arrows"></div>
          <div class="gradation_arrows"></div>
          <div class="gradation_arrows"></div>
        </div>
      </div>
    </div>
    <main>
      <section class="top"></section>
      <greeting />
      <sepDiamond />
      <section class="contents">
        <div class="contents_box">
          <div class="contents_box_img about"></div>
          <div class="contents_box_textarea type1">
            <h4>早稲田祭について</h4>
            <BrainLine />
            <p>日本最大級の学園祭</p>
            <p>である早稲田祭と、</p>
            <p>それを運営する私たちに</p>
            <p>ついてご紹介します。</p>
            <div class="contents_box_aWrap">
              <nuxt-link :to="'about'" class="contents_box_a">詳しくみる</nuxt-link>
            </div>
          </div>
        </div>
        <div class="contents_box">
          <div class="contents_box_textarea type2">
            <h4>新歓イベント</h4>
            <BrainLine />
            <p>早稲田祭2019</p>
            <p>運営スタッフが企画する、</p>
            <p>4つの新歓イベントを</p>
            <p>ご紹介します。</p>
            <div class="contents_box_aWrap">
              <nuxt-link :to="'events'" class="contents_box_a">詳しくみる</nuxt-link>
            </div>
          </div>
          <div class="contents_box_img events"></div>
        </div>
        <div class="contents_box">
          <div class="contents_box_img activity"></div>
          <div class="contents_box_textarea type1">
            <h4>活動について</h4>
            <BrainLine />
            <p>運営スタッフの</p>
            <p>活動の詳細、</p>
            <p>当日の様子などを</p>
            <p>ご覧いただけます。</p>
            <div class="contents_box_aWrap">
              <nuxt-link :to="'activity'" class="contents_box_a">詳しくみる</nuxt-link>
            </div>
          </div>
        </div>
        <div class="contents_box">
          <div class="contents_box_textarea type2">
            <h4>入会について</h4>
            <BrainLine />
            <p>入会期間や</p>
            <p>受付に関する注意事項は、</p>
            <p>こちらからまとめて</p>
            <p>ご覧いただけます。</p>
            <div class="contents_box_aWrap">
              <nuxt-link :to="'entry'" class="contents_box_a">詳しくみる</nuxt-link>
            </div>
          </div>
          <div class="contents_box_img entry"></div>
        </div>
        <div class="contents_box contact">
          <div class="contents_box_img_contact"></div>
          <div class="contents_box_textarea type3">
            <h4>お問い合わせ</h4>
            <BrainLine />
            <p>運営スタッフの活動、</p>
            <p>入会に関することなど</p>
            <p>お問い合わせの方法について</p>
            <p>掲載しています。</p>
            <div class="contents_box_aWrap">
              <nuxt-link :to="'contact'" class="contents_box_a">詳しくみる</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import BrainLine from '~/components/CenteredBrainLine'
import greeting from '~/components/greeting'
import sepDiamond from '~/components/sep_Diamond'

export default {
  data(){
  },
  components: {
    BrainLine,
    greeting,
    sepDiamond
  },
  
  mounted(){
    if ( window.sessionStorage && sessionStorage.getItem('isConfirmed') !== 'yes' ) {
      this.flash()
    }else{
      this.flash_bb()
    }
  },
  methods: {
    // 以下アニメーション
    flash(){
      TweenMax.to('.bgimg1', 1.6, {
        opacity: 1,
      }),
      TweenMax.to('.SecondWrap', 1.3, {
        width: '100vmin',
        delay: 2,
        ease: Expo.easeInOut
      }),
      TweenMax.to('.bgimg2', 1.3, {
        opacity: 0.9,
        delay: 3.5,
        ease: Expo.easeInOut
      }),
      TweenMax.to('main', 0.5, {
        opacity: 1,
        zIndex: 99,
        delay: 4,
        display: 'block'
      })
    },
    flash_bb(){
      TweenMax.to('.SecondWrap', 0, {
        width: '100vmin',
        ease: Expo.easeInOut
      }),
      TweenMax.to('.bgimg2', 0, {
        opacity: 0.9,
        ease: Expo.easeInOut
      }),
      TweenMax.to('main', 0, {
        opacity: 1,
        zIndex: 99,
        display: 'block'
      })
    },
    // bbしたかチェックする
    bbcheck(){
      window.addEventListener('popstate', function(e){
        this.flash_bb()
      })
    }
  }
  
}
</script>

<style scoped>
main{
  display: none;
  z-index: 0;
  width: 85%;
  max-width: 765px;
  margin: 0 auto;
  padding-top: 10vh;
}

p {
  text-align: center;
  font-size: 5vmin;
  margin-bottom: 2vmin;
}
a{
  font-size: 4vmin;
}

/* ============== Animation area ================================================= */
.FirstWrap{
  position: absolute;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1;
  opacity: 1;
}
.FirstWrap .bgimg1{
  width: inherit;
  height: inherit;
  background: url(../assets/images/top_1.jpg) pink no-repeat;
  background-size: cover;
  opacity: 0;
}
.catch{
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 33%;
  left: 38%;
  border: white 0.1vmin solid;
  font-size: 10vmin;
  opacity: 0.9;
}
.catch.no1{
  padding: 4vmin 2vmin 0vmin 1.2vmin;
}
.catch.no2{
  padding: 4vmin 2vmin 0vmin 1.2vmin;
}

.SecondWrap{
  position: absolute;
  width: 0;
  height: 100vh;
  background: #464655;
  opacity: 1;
  z-index: 2;
}

.SecondWrap .bgimg2{
  width: inherit;
  height: inherit;
  background: url(../assets/images/top_2.jpg) #464655  no-repeat;
  background-size: cover;
  opacity: 0;
}

.gradation_wrap{
  position: absolute;
  top: 75vh;
  width: 100%;
  height: 25vh;
  background: linear-gradient(to bottom,rgba(0,0,0,0), #464655)
}
.gradation_p{
  margin-left: 1vmin;
  letter-spacing: 1vmin;
  font-size: 7vmin;
  opacity: 0.9;
}

/* ============= contents css ================================================= */

.gradation_arrows{
  width: 7vmin;
  height: 7vmin;
  margin: 0 auto;
  border-right: solid 1px #e4e4e4;
  border-bottom: solid 1px #e4e4e4;
  transform: rotate(45deg);
  opacity: 0.8;
}

.top{
  width: 100%;
  height: 100vh;
}

.contents_box{
  display: flex;
  width: 100%;
  height: 60vh;
  margin: 40vmin 0;
}
.contents_box.contact{
  flex-direction: column;
  height: 65vh;
}
.contents_box_img{
  align-self: center;
  width: 43%;
  height: 115vmin;
  background: white;
}
.contents_box_img.about{
  background: url(../assets/images/aboutWasedasai.jpg) white 120vmin;
  background-size: 230vmin;
}
.contents_box_img.events{
  background: url(../assets/images/events.jpg) white 130vmin -50vmin;
  background-size: 250vmin;
}
.contents_box_img.activity{
  background: url(../assets/images/sample1.jpg) white 110vmin;
  background-size: 180vmin;
}
.contents_box_img.entry{
  background: url(../assets/images/entry.jpg) white 108vmin;
  background-size: 170vmin;
}


.contents_box_img_contact{
  width: 100%;
  height: 30vw;
  background: url(../assets/images/contact.jpg) white 140vmin 50vmin;
  background-size: 200vmin;
}
.contents_box_textarea{
  align-self: center;
  width: 73%;
  height: 90vmin;
  background: white;
}
.contents_box_textarea.type1{
  margin-left: -13vw;
}
.contents_box_textarea.type2{
  margin-right: -13vw;
  z-index: 10
}
.contents_box_textarea.type3{
  align-self: center;
  margin-top: -13vw;
}

  .centeredBrainLine_square{
    margin: 10vmin auto;
    width: 20vmin;
    height: 0.3vmin;
    background: #464655;
  }
  .contents_box_textarea h4{
    margin: 6vh 0 4vh 0;
    color: #464655;
    font-size: 5.5vmin;
    letter-spacing: 0.8vmin;
    text-align: center;
  }
  .contents_box_textarea p{
    margin: 2vmin 0;
    color: #464655;
    font-size: 4vmin;
    text-align: center;
  }
  .contents_box_aWrap{
    width: 50%;
    margin: 0 auto;
    padding: 1vmin;
    margin-top: 6vmin;
    border: #767680 solid 0.2vmin;
  }
  .contents_box_a{
    display: block;
    margin: 0 auto;
    padding: 3vmin;
    border: #767680 solid 0.2vmin;
    color: #464655;
    text-align: center;
  }

</style>