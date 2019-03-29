<template>
  <section class="contaner">
    <MainVisuial />
    <main>
      <h1>お問い合わせ</h1>
      <BrainLine />
      <section>
        <p>早稲田祭2019運営スタッフや新歓企画などについて、何かご質問がございましたら</p>
        <p><a href="mailto:shinkan@wasedasai.net">shinkan@wasedasai.net</a></p>
        <p>までお気軽にお問い合わせください。</p>
      </section>
      <Caution>
      <h2>早稲田祭ツアーへの参加をご希望される方</h2>
      <p>参加をご希望される方は、事前に参加希望フォームの提出をお願いします。
        参加フォームは<a href="https://docs.google.com/forms/d/1mAwUyhA5iQKhSGcwZKMpRT3-si6kRlVwt50xJMQN4NE/viewform?edit_requested=true" target="_blank">こちら</a></p>
      <p>その他の新歓企画は事前申し込み不要です。当日集合場所までお越しください。</p>
      <p>各企画の詳細は、新歓情報ページをご覧ください。</p>
      </Caution>

    </main>
  </section>
</template>

<script>
import MainVisuial from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'
import Caution from '~/components/Caution'

export default {
  components: {
    MainVisuial,
    BrainLine,
    Caution
  }
}
</script>

<style scoped>
section{
  margin-bottom: 8vmin;
}

h2{
  margin-bottom: 5vmin;
}

p{
  margin-bottom: 3vmin;
}
a{
  text-decoration-line: underline;
}

.caution{
  background: #232322;
  padding: 5vmin;
}

</style>