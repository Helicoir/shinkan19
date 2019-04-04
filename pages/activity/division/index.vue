<template>
  <article class="contaner">
    <MainVisuial>
      <img src="../../../assets/images/sample1.jpg" alt="" class="top_wrap_img">
    </MainVisuial>
    <main>
      <h1>局紹介</h1>
      <BrainLine />
      <p>このページでは、早稲田祭2019運営スタッフを構成する8つの局をご紹介します。</p>
      <section class="contents_wrap">
        <div class=""></div>
      </section>
    </main>
  </article>
</template>

<script>
import MainVisuial from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'

export default {
  components: {
    MainVisuial,
    BrainLine
  },
}
</script>