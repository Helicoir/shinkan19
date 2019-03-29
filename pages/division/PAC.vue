<template>
  <article class="contaner">
    <MainVisuial />
    <main>
      <h1>広報制作局</h1>
      <BrainLine />
      <h2>局長のことば</h2>
      <p>｢早稲田祭｣と聞いてみなさんは何をイメージしますか？</p>
      <p>日本一を誇る知名度の高さ、当日のにぎやかな会場、キャンパス内を彩る装飾物…… きっとさまざまなものを思い浮かべるのではないでしょうか。</p>
      <p>このように世の中から見た早稲田祭のイメージ、すなわち「早稲田祭の顔」をつくり上げているのが、広報制作局なのです。</p>
      <p>私たちは、早稲田祭のイメージをより良いものにするため、6つのチームに分かれて日々多様な広報活動を行っています。もし広報制作局が魅力的な広報を行っていなければ、早稲田祭当日のキャンパスが大勢の人でにぎわうことはないかも知れません。たった2日間の早稲田祭を成功させるため、私たちは誇りとこだわりを持って、残りの363日間早稲田祭をつくり続けています。</p>
      <p>また局員は、より良い広報を考えることを楽しみながら活動している人たちばかり。みなさんも、私たちと一緒に「楽しませることを楽しむ」プロフェッショナルになりませんか？</p>
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
h2{
  margin-bottom: 10vmin;
}

p {
  margin-bottom: 8vmin;
}

span {
  display: block;
  float:  right;
  margin-bottom: 5vmin;
}

</style>