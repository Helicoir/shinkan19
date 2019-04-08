<template>
  <section class="container">
    <MainVisuial>
      <img src="../../../assets/images/freePaper.jpg" alt="" class="top_wrap_img">
    </MainVisuial>
    <main>
      <h1>電子版フリーペーパー</h1>
      <BrainLine />
      <h2>フリーペーパー公開中！</h2>
      <p>新歓ブースにて、新歓公式フリーペーパーを配布しています。</p>
      <p>運営スタッフの活動内容はもちろん、ここでしか読めないインタビューや赤裸々アンケート、新入生のみなさんへのメッセージなど気になる内容が盛りだくさんです！</p>
      <p class="sep">「貰いそびれてしまった……」そんな方もご心配無用！ PDF版を配布しておりますので、ぜひご覧ください。</p>
      <p class="sep">PDF版フリーペーパーは<a href="../../../assets/docs/freePaper.pdf" target="_blank" class="main_a">こちら</a></p>
    </main>
  </section>
</template>

<script>
import MainVisuial from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'

export default {
  components: {
    MainVisuial,
    BrainLine
  }
}
</script>

<style>
.container{
  margin: 10vmin 0;
}

.sep{
  margin-top: 5vmin;
}
.main_a{
  text-decoration: underline;
}
</style>