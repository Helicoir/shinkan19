<template>
  <article class="container">
    <MainVisual>
      <img src="../../assets/images/sample1.jpg" alt="" class="top_wrap_img">
    </MainVisual>
    <main>
      <h1>活動について</h1>
      <BrainLine />
      <p>早稲田祭2019運営スタッフの活動について詳しく解説！</p>
      <nuxt-link to="/activity/division" class="contents_wrap content1">
        <div class="contents_wrap_bgwrap">
          <h3 class="contents_wrap_title">局紹介</h3>
          <BrainLineC />
          <p>早稲田祭2019運営スタッフを</p>
          <p>構成する、</p>
          <p>8つの局を</p>
          <p>ご紹介します。</p>
        </div>
        <div class="contents_wrap_detailwrap">
        </div>
      </nuxt-link>
      <nuxt-link to="/activity/annual" class="contents_wrap content2">
        <div class="contents_wrap_bgwrap">
          <h3 class="contents_wrap_title">運営スタッフの一年</h3>
          <BrainLineC />
          <p>とある運営スタッフの</p>
          <p>一年間をご紹介。</p>
          <p>入会から早稲田祭までの</p>
          <p>流れが丸わかり！</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/activity/faq" class="contents_wrap content3">
        <div class="contents_wrap_bgwrap">
          <h3 class="contents_wrap_title">よくある質問</h3>
          <BrainLineC />
          <p>活動・入会・その他</p>
          <p>運営スタッフに関連する</p>
          <p>よくある質問を</p>
          <p>まとめています。</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/activity/freePaper" class="contents_wrap content4">
        <div class="contents_wrap_bgwrap">
          <h3 class="contents_wrap_title">電子版フリーペーパー</h3>
          <BrainLineC />
          <p>入学式の日、各キャンパスにて</p>
          <p>配布されたフリーペーパー。</p>
          <p>色々あってもらえなかった方も、</p>
          <p>こちらでご覧いただけます。</p>
        </div>
      </nuxt-link>
    </main>
  </article>
</template>

<script>
import MainVisual from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'
import BrainLineC from '~/components/CenteredBrainLine.white'

export default {
  components: {
    MainVisual,
    BrainLine,
    BrainLineC,
  },
}
</script>

<style scoped>
.contents_wrap{
  display: flex;
  width: 100%;
  height: 100vmin;
  margin: 20vmin 0;
  border: solid 1px white;
}
.content1{
  background: url(../../assets/images/Kouhouseisaku.jpg) -50vmin no-repeat;
  background-size: cover;
}
.content2{
  background: url(../../assets/images/annual.jpg) -35vmin no-repeat;
  background-size: cover;
}
.content3{
  background: url(../../assets/images/faq.jpg) -30vmin no-repeat;
  background-size: cover;
}
.content4{
  background: url(../../assets/images/freePaper.jpg) -50vmin no-repeat;
  background-size: cover;
}

.contents_wrap_bgwrap{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.contents_wrap_title{
  text-align: center;
  margin-top: 20%;
  font-size: 6vmin;
}
.contents_wrap p{
  text-align: center;
  margin-bottom: 3vmin;
}
</style>