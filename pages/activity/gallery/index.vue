<template>
  <article class="contaner">
    <MainVisuial>
      <img src="../../../assets/images/sample1.jpg" alt="" class="top_wrap_img">
    </MainVisuial>
    <main>
      <h1>ギャラリー</h1>
      <BrainLine />
      <UC />
      <section class="contents_wrap">
      </section>
    </main>
  </article>
</template>

<script>
import BrainLineC from '~/components/CenteredBrainLine'
import MainVisuial from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'
import UC from '~/components/UC'

export default {
  components: {
    MainVisuial,
    BrainLine,
    BrainLineC,
    UC
  },
}
</script>