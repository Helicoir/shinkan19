<template>
  <article class="container">
    <MainVisual>
      <img src="../../assets/images/sample1.jpg" alt="" class="top_wrap_img">
    </MainVisual>
    <main>
      <h1>入会について</h1>
      <BrainLine />
      <UC />
    </main>
  </article>
</template>

<script>
import MainVisual from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'
import UC from '~/components/UC'

export default {
  components: {
    MainVisual,
    BrainLine,
    UC
  },
}
</script>