<template>
  <article class="contaner">
    <MainVisuial />
    <main>
      <h1>{{ $route.params.commons }}</h1>
      <BrainLine />
      <p :id=$route.params.commons>{{ $store.state.division.id }}</p>
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