<template>
  <article class="contaner">
    <MainVisuial></MainVisuial>
    <main>
      <h1>局紹介</h1>
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
}
</script>