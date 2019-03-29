<template>
  <section class="topwrap">
    <div class="FirstWrap">
      <div class="chr_img">
        <span class="catch no1">桜は咲いた、</span>
      </div>
    </div>
    <div class="SecondWrap"></div>
    <div class="ThirdWrap"></div>
  </section>
</template>

<script>
import animejs from 'animejs'

export default {

}
</script>

<style scoped>
/* 白背景と昼桜・「桜は咲いた」 */
.FirstWrap{
  position: absolute;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1;
}
.FirstWrap .chr_img{
  width: inherit;
  height: inherit;
  background: url(../assets/images/top_1.jpg) pink no-repeat;
  background-size: cover;
  opacity: 1.0;
}
.catch{
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 33%;
  left: 38%;
  border: white 0.1vmin solid;
  font-size: 10vmin;
  opacity: 0.9;
}
.catch.no1{
  padding: 4vmin 2vmin 0vmin 1.2vmin;
}

.SecondWrap{
  position: absolute;
  width: 2%;
  height: 100vh;
  background: #464655;
  z-index: 2
}
</style>