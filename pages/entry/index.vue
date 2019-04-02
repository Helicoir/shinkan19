<template>
  <article class="container">
    <MainVisual>
      <img src="../../assets/images/entry.jpg" alt="" class="top_wrap_img">
    </MainVisual>
    <main>
      <h1>入会について</h1>
      <BrainLine />
      <section>
        <h2>入会までの流れ</h2>
        <p>運営スタッフへの入会方法についてご紹介します。</p>
        <div class="entryStep">
          <ol class="entryStep_wrap">
            <li>各キャンパスのブースに来る</li>
            <li>ブースで説明を受け、書類を受け取る</li>
            <li><span>個人プロフィール用紙</span>、<span>倫理規定用紙</span>を記入し、学生証を持って再度ブースに来る</li>
            <li>個人プロフィール用紙、倫理規定用紙を提出する</li>
            <li>完了！</li>
          </ol>
        <p class="note">※ 厳正なる選考を経て、後日こちらから入会の可否をメールにて連絡いたします</p>
        </div>
        <Caution>
          <p>提出の際には書類不備にご注意ください。</p>
          <p class="caution_note">※よくある不備の例</p>
          <ul>
            <li>黒のボールペンではなく、シャープペンシルや消せるボールペンで書かれている</li>
            <li>メールアドレスにフリガナを付け忘れている</li>
            <li>顔写真を貼り忘れている</li>
            <li>しっかり捺印されていない</li>
            <li>訂正印が押されていない</li>
          </ul>
        </Caution>
      </section>
      <section>
        <h2>受付場所・時間</h2>
        <h3>・場所について</h3>
        <p>各キャンパスの受付場所は以下の通りです。</p>
        <Caution>
        <ul class="caution_ul">
          <li>早稲田キャンパス：大隈銅像付近</li>
          <li>戸山キャンパス：戸山カフェテリア入口付近</li>
          <li>西早稲田キャンパス：51号館2階ラウンジ</li>
        </ul>
        </Caution>
        <h3>・時間について</h3>
        <p>受付日は以下の4日間です。</p>
        <p>日付欄をタップすると、その日の受付時間をご覧いただけます。</p>
        <div class="detail_wrap" @click="showDay1=!showDay1">
          <p class="day">4月15日（月）</p>
          <transition>
            <div class="pulldown_area" v-show="showDay1">
              <div class="pulldow_area_inner">
                <p>早稲田キャンパス：10:00～17:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>戸山キャンパス：10:00～17:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>西早稲田キャンパス：<br>12:00～17:00</p>
              </div>
            </div>
          </transition>
          </div>
          <div class="detail_wrap" @click="showDay2=!showDay2">
          <p class="day">4月16日（火）</p>
          <transition>
            <div class="pulldown_area" v-show="showDay2">
              <div class="pulldow_area_inner">
                <p>早稲田キャンパス：10:00～17:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>戸山キャンパス：10:00～17:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>西早稲田キャンパス：<br>12:00～17:00</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="detail_wrap" @click="showDay3=!showDay3">
          <p class="day">4月17日（水）</p>
          <transition>
            <div class="pulldown_area" v-show="showDay3">
              <div class="pulldow_area_inner">
                <p>早稲田キャンパス：10:00～17:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>戸山キャンパス：10:00～17:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>西早稲田キャンパス：<br>12:00～17:00</p>
              </div>
            </div>
          </transition>
        </div>
        <div class="detail_wrap" @click="showDay4=!showDay4">
          <p class="day">4月18日（木）</p>
          <transition>
            <div class="pulldown_area" v-show="showDay4">
              <div class="pulldow_area_inner">
                <p>早稲田キャンパス：10:00～16:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>戸山キャンパス：10:00～16:00</p>
              </div>
              <div class="pulldow_area_inner">
                <p>西早稲田キャンパス：<br>12:00～16:00</p>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </main>
  </article>
</template>

<script>
import MainVisual from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'
import Caution from '~/components/Caution'

export default {
  data(){
    return{
      showDay1: false,
      showDay2: false,
      showDay3: false,
      showDay4: false
    }
  },
  components: {
    MainVisual,
    BrainLine,
    Caution
  }
}
</script>

<style>
li span{
  font-size: 6vmin;
  text-decoration: underline;
}
ol{
  margin: 4vmin 0 8vmin 0;
  padding: 7vmin 0;

}
li {
  margin-bottom: 3vmin;
  font-size: 5vmin;
  line-height: 1.3;
  color: white;
}

ol li{
  display: list-item;
  list-style: decimal;
}
ul li{
  width: 90%;
  margin: 4vmin 0 0 6vmin;
  display: list-item;
  list-style: disc;
}

section{
  margin-bottom: 14vmin;
}

.entryStep_wrap{
  margin-left: 7vmin;
}
.note{
  font-size: 4.5vmin;
}
.caution_note{
  margin-top: 6vmin;
}
.caution_ul{
  margin-top: 0vmin;
}
/* pulldow */

.v-enter-active, .v-leave-active{
}

.detail_wrap{
  width: 100%;
  margin: 7vmin 0;
  padding: 3vmin;
  border: solid 1px white;
}

.day{
  text-align: center;
}
.day::after{
  content: "▽";
}

.pulldown_area{
  margin-top: 4vmin;
  padding-top: 4vmin;
  border-top :solid 1px white; 
}

.pulldow_area_inner p{
  margin: 2vmin 0;
  text-align: center;
} 

</style>