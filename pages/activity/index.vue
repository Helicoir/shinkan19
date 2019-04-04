<template>
  <article class="container">
    <MainVisual>
      <img src="../../assets/images/sample1.jpg" alt="" class="top_wrap_img">
    </MainVisual>
    <main>
      <h1>活動について</h1>
      <BrainLine />
      <p>早稲田祭2019運営スタッフの活動について詳しく解説！</p>
      <nuxt-link to="/activity/division" class="contents_wrap">
        <div class="contents_wrap_titlewrap">
          <h3 class="contents_wrap_title">局紹介</h3>
        </div>
        <div class="contents_wrap_detailwrap">
          <p>運営スタッフを</p>
          <p>構成する</p>
          <p>8つの局を</p>
          <p>ご紹介します。</p>
        </div>
      </nuxt-link>
    </main>
  </article>
</template>

<script>
import MainVisual from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'

export default {
  components: {
    MainVisual,
    BrainLine,
  },
}
</script>

<style scoped>
.contents_wrap{
  display: flex;
  width: 100%;
  margin: 10vmin 0;
  border: solid 1px white
}
.contents_wrap_titlewrap{
  width: 40%;
  height: inherit;
  background: url(../../assets/images/Kouhouseisaku.jpg) no-repeat;
  background-size: cover;
}
.contents_wrap_title{
  text-align: center;
  margin-top: 50%;
}
.contents_wrap_detailwrap{
  width: 60%;
  padding: 5vmin;
  background: black;
}
.contents_wrap_detailwrap p{
  text-align: center;
}
</style>