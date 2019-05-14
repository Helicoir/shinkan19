<template>
  <section class="contaner">
    <MainVisuial>
      <img src="../../../assets/images/annual.jpg" class="top_wrap_img">
    </MainVisuial>
    <main>
      <h1>運営スタッフの一年</h1>
      <BrainLine />
      <div class="timeline">
    <h5>4月</h5>
  <div class="container left">
    <div class="content">
      <h3>新歓</h3>
      <p>まだ見ぬ新入生を求めて新歓活動をします。新歓企画の詳細は最後のページに紹介しているので要チェック！</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h3>新規入会</h3>
      <p>いよいよ新入生が入会。既存スタッフ一同みんなに会えるのを心待ちにしています！</p>
    </div>
  </div>
        <h5>5月</h5>
        <div class="container right">
        <div class="content">
            <h3>局配属</h3>
            <p>どきどきの局配属。どの局に入っても楽しい運営スタッフ生活が待っています！</p>
        </div>
        </div>
        <h5>6月</h5>
        <div class="container right">
        <div class="content">
            <h3>新歓合宿</h3>
                <p>新入生が入って初めての宿泊行事。たくさんの友達ができること間違いなし！</p>
            </div>
            </div>
            <h5>8月</h5>
            <div class="container right">
        <div class="content">
            <h3>運スタ夏休み(約2週間)</h3>
                <p>運営スタッフの活動は一旦お休み！この期間で旅行に行ったり、のんびりしたりします。ONとOFFがはっきりしているのも運営スタッフの魅力です。また、夏合宿などの楽しいレクも盛りだくさんです。</p>
            </div>
            </div>
            <h5>10月</h5>
        <div class="container right">
            <div class="content">
            <h3>稲門祭</h3>
                <p>早稲田大学の卒業生の集まりである稲門会の方々が主催する、早稲田三大祭のひとつ。運営スタッフは企画や警備などのお手伝いをしています！</p>
            </div>
            </div>
            <h5>11月<font size="5">上旬</font></h5>
        <div class="container right">
                <div class="content">
            <h3>早稲田祭</h3>
                <p>待ちに待った早稲田祭当日！ この日のために来る日も来る日も活動してきました。運営スタッフ一人ひとりの思いがさまざまなかたちで実を結ぶ当日は、かけがえのない思い出になるはずです。</p>
            </div>
            </div>
            <h5>11月<font size="5">中旬</font>〜3月</h5>
            <div class="container right">
                <div class="content">
            <h3>準備会期</h3>
                <p>早稲田祭が終わると、すぐに次年度の準備を始めます。新たな代表や各局の局長を選挙で決め、新体制で次の早稲田祭に向けて動き出します。3月には新歓に向けての準備もスタート！</p>
            </div>
            </div>
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

<style scoped>
* {
  box-sizing: border-box;
}

/* Set a background color */
body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 159.9999996vmin;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 1.2vmin;
  background-color: #CE8F9E;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1.5vmin;
}

/* Container around content */
.container {
  padding: 1.33333333vmin 5.33333332vmin;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 3px solid #CE8F9E;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 5vmin;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 5vmin;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 6vmin 4vmin;
  background-color: white;
  position: relative;
  border-radius: 0vmin;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}

p {
  color: #464655; 
  font-size: 3.8vmin;
}

h3 {
    color: #464655;
    line-height: 9vmin;
    font-size: 5.5vmin;
    font-weight: bold;
}

h5 {
    font-size: 8vmin;
    color: white;
    margin: 3vmin 3vmin 0.5vmin 18vmin;
}

</style>