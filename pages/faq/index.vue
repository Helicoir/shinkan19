<template>
  <section class="contaner">
    <MainVisuial />
    <main>
      <h1>よくある質問</h1>
      <BrainLine />
      <div v-for="question in $store.state.faq" :key="question.Q"
      class="faq_container">
        <p class="faq_question">{{question.Q}}</p>
        <p class="faq_answer">{{question.A}}</p>
      </div>
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
.faq_container{
  margin-bottom: 7vmin;
}

.faq_question{
  display: block;
  width: 100%;
  padding: 5vmin;
  border: 0.5px solid white;
}

.faq_answer{
  display: block;
  width: 100%;
  padding: 5vmin;
}
</style>