<template>
  <article class="container">
    <MainVisual>
      <img src="../../assets/images/sample1.jpg" alt="" class="top_wrap_img">
    </MainVisual>
    <main>
      <h1>早稲田祭について</h1>
      <BrainLine />
      <h2>早稲田祭とは</h2>
      <p>早稲田祭は約18万人の来場者、450を超える企画、約3500万円の予算規模を誇る日本最大級の学園祭です。</p>
      <p>早大生のひたむきな努力の集大成が花開く、年に1度の早稲田文化の祭典とも言えるでしょう。</p>
      <BrainLine />
      <h2>運営スタッフとは</h2>
      <p>そんな早稲田祭2019を運営しているのが私たち早稲田祭2019運営スタッフです。</p>
      <p>運営スタッフには現在約300人の早大生が在籍しており、早稲田祭2019を成功させるために日々活動しています。</p>
      <p>局・チームによって異なりますが、主に毎週月・木曜日にミーティングを開いています。そこでの話し合いをもとに、それぞれがより良い早稲田祭を実現するための準備を進めています。</p>
      <p>えんじのはっぴを身にまとい、みなさんと共に早稲田祭2019を創る日を楽しみにしています！</p>
    </main>
  </article>
</template>

<script>
import MainVisual from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'

export default {
  components: {
    MainVisual,
    BrainLine
  },
}
</script>

<style scoped>
  p{
    line-height: 1.7;
    margin-bottom: 5vmin;
  }
</style>