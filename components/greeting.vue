<template>
  <section class="greeting">
    <h3>ごあいさつ</h3>
    <div class="centeredBrainLine_greeting"></div>
    <p>早稲田大学には、自分の好きなことにひたむきに打ち込む人が<br>たくさんいます。</p>
    <p>そんな陰ながらの努力があってこそ、早大生はキラキラと<br>輝くのではないでしょうか。</p>
    <p>早大生の汗と涙が詰まった<br>魅力あふれる祭、それが<br>早稲田祭2019です。</p>
    <p>そして、早稲田祭2019を<br>主催・運営するのが私たち<br>早稲田祭2019運営スタッフです。</p>
    <p class="sep">さあ、桜は咲きました。</p>
    <p>次は、私たちと一緒に</p>
    <p>えんじのはっぴを着て、</p>
    <p>背中に「祭」を背負い、</p>
    <p>ひたむきだから魅せられる早稲田祭を<br>創りませんか。</p>
    <div class="namearea">
      <div class="rightBrainLine"></div>
      <p>早稲田祭2019運営スタッフ 代表</p>
      <p>社会科学部3年 </p>
      <p>田村真璃子</p>
    </div>
  </section>
</template>

<style scoped>
/* brainline */

.centeredBrainLine_greeting{
    margin: 10vmin auto;
    width: 30vmin;
    height: 0.5px;
    background: white;
  }

  *{
    text-align: center;
  }
  h3{
    font-size: 6vmin;
    color: white;
    text-align: center;
  }
  p{
    line-height: 1.5;
    font-size: 5vmin;
    margin-top: 5vmin;
  }

  .sep{
    margin-top: 13vmin;
  }

  .namearea{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 10vmin 0;
  }

  .namearea p{
    margin-top: 1vmin;
    font-size: 5vmin;
    text-align: right;
  }

  .rightBrainLine{
    width: 30%;
    height: 1px;
    margin-bottom: 4vh;
    background: white;
    align-self: flex-end;
  }
</style>