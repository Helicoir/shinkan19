<template>
  <nuxt-link to="/activity/freePaper" class="contents_wrap">
    <div class="contents_wrap_bgwrap">
      <h3 class="contents_wrap_title">電子版フリーペーパー</h3>
      <BrainLineC />
      <p>入学式の日、各キャンパスにて</p>
      <p>配布されたフリーペーパー。</p>
      <p>色々あってもらえなかった方も、</p>
      <p>こちらでご覧いただけます。</p>
    </div>
  </nuxt-link>
</template>

<script>
import BrainLineC from '~/components/CenteredBrainLine.white'

export default {
  components: {
    BrainLineC
  },
}
</script>

<style scoped>
.contents_wrap{
  display: flex;
  width: 100%;
  height: 100vmin;
  margin: 20vmin 0;
  border: solid 1px white;
}
.Kaijoseibi{
  background: url(../../assets/images/Kaijoseibi.jpg) -50vmin no-repeat;
  background-size: cover;
}
.Kaihatsu{
  background: url(../../assets/images/Kaihatsu.jpg) -50vmin no-repeat;
  background-size: cover;
}
.Kikaku{
  background: url(../../assets/images/Kikaku.jpg) -50vmin no-repeat;
  background-size: cover;
}
.Kouhouseisaku{
  background: url(../../assets/images/Kouhouseisaku.jpg) -50vmin no-repeat;
  background-size: cover;
}
.Zaimu{
  background: url(../../assets/images/Zaimu.jpg) -50vmin no-repeat;
  background-size: cover;
}
.SankaTaiou{
  background: url(../../assets/images/SankaTaiou.jpg) -50vmin no-repeat;
  background-size: cover;
}
.Shogai{
  background: url(../../assets/images/Shogai.jpg) -50vmin no-repeat;
  background-size: cover;
}
.Soumu{
  background: url(../../assets/images/Soumu.jpg) -50vmin no-repeat;
  background-size: cover;
}


.contents_wrap_bgwrap{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.contents_wrap_title{
  text-align: center;
  margin-top: 20%;
  font-size: 6vmin;
}
.contents_wrap p{
  text-align: center;
  margin-bottom: 3vmin;
}
</style>