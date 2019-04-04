<template>
  <article class="contaner">
    <MainVisuial></MainVisuial>
    <main>
      <h1> 企画局</h1>
      <BrainLine />
      <p>工事中です。</p>
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
  computed: {
  }
}
</script>

<style scoped>
.introduction_h2{
  margin-bottom: 10vmin;
}

.introduction_p {
  margin-bottom: 8vmin;
}

</style>