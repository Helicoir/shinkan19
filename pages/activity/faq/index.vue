<template>
  <section class="contaner">
    <MainVisuial>
      <img src="../../../assets/images/faq.jpg" alt="" class="top_wrap_img">
    </MainVisuial>
    <main>
      <h1>よくある質問</h1>
      <BrainLine />
      <p>このページでは、みなさんの早稲田祭2019運営スタッフに対する疑問にお答えします！</p>
      <div v-for="question in $store.state.faq" :key="question.A"
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
  margin: 15vmin 0 10vmin 0;
}

.faq_question{
  display: block;
  width: 100%;
  padding: 5vmin;
  border: 0.5px solid white;
}
.faq_question::before{
  content: "Q."
}

.faq_answer{
  display: block;
  width: 100%;
  padding: 5vmin;
  border: 0.5px solid white;
}
.faq_answer::before{
  content: "A."
}
</style>