<template>
  <article class="contaner">
    <MainVisuial>
      <img src="../../../assets/images/sample1.jpg" alt="" class="top_wrap_img">
    </MainVisuial>
    <main>
      <h1>局紹介</h1>
      <BrainLine />
      <ModalWrapper><!-- 会場整備局 -->
        <p slot="divName">
          会場整備局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">会場整備局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Kaijoseibi.jpg" class="modal_img">
          <p class="modal_p">
            会場整備局は、例年約18万人もの来場者が訪れる早稲田祭の会場を、より快適なものにすることを目標に活動する局です。<br>
            警備、整備、車両の入構の管理、環境対策、備品や電力の管理、会場での来場者案内など、その活動内容は多岐に渡り、さまざまな視点から祭当日の会場の環境改善を図っています。</p>
          <p class="modal_p">
            どの活動も、早稲田祭にとって必要不可欠なものです。私たちの活動は特に当日において非常に大きな責任を伴いますが、だからこそ感じられる楽しさや、やりがいがあります。</p>
          <p class="modal_p">
            また、より良い会場をつくるために活動していく中で、多くの人の早稲田祭への想いに触れることができます。その想いを支え、全てが形となる当日の景色を目にしたときの達成感は、会場整備局ならではの魅力です。
          </p>
          <p class="modal_p"> 
            私たちと一緒に、早稲田祭に関わる全ての人が楽しめる良い会場をつくりましょう！
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">会場整備局 局長</p>
          <p class="modal_p_right">浮津圭太郎</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Kaijoseibi" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
      <ModalWrapper><!-- 開発局 -->
        <p slot="divName">
          開発局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">開発局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Kaihatsu.jpg" class="modal_img">
          <p class="modal_p">
            開発局は、今までになかった新たな企画や取り組みを通して早稲田祭の足りないところを補い、早稲田祭をもっと魅力的なものにする役割を担っています。<br>
            「開発局」という名前の通り、“0から1”を創り出すことができるのは、運営スタッフの中で私たちだけ。そしてそれこそが、私たちの活動の一番の魅力です！
          </p>
          <p class="modal_p">
            そんな開発局のターゲットは森羅万象です。本当です。<br>
            人やモノ、時間や空間まで、あらゆる切り口から早稲田祭の魅力を高める企画や取り組みを考え、祭当日も自分たちの手で運営します。
          </p>
          <p class="modal_p">
            開発局のメンバーはチームの垣根を越えてみんな仲良しです。好奇心旺盛な人、既存の枠にとらわれず新しいことを考えたりつくったりしたい人、とにかく楽しい1年を過ごしたい人…… そんなあなたをお待ちしています！
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">開発局 局長</p>
          <p class="modal_p_right">小寺佳乃</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Kaihatsu" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
      <ModalWrapper><!-- 企画局 -->
        <p slot="divName">
          企画局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">企画局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Kikaku.jpg" class="modal_img">
          <p class="modal_p">
            早稲田祭当日は、さまざまな場所であらゆる早大生の早稲田文化が花開いています。いわばカオスな状態です。
            しかし、ただカオスなだけでは、早稲田祭とは言えません。早稲田祭を早稲田祭たらしめるために企画局があるのです。
          </p>
          <p class="modal_p">
            企画局は「運営スタッフによる、早稲田祭のための企画」を打つことで、カオスな状態になっている早稲田文化をより輝かせ、華やかな「早稲田祭の雰囲気」にします。
            つまり、祭の顔であると同時に祭の基盤となる企画をつくっているのです。
          </p>
          <p class="modal_p">
            早稲田祭にとって欠かせない企画をつくり上げるため、私たちは日々どのような企画が効果的なのか、どうすればたくさんの人に企画を楽しんでもらえるかを考えながら活動しています。
            魅力的な企画をつくるには、アツくてフレッシュな頭脳が必要不可欠です。君だよ！そこの君に言ってるよー！(笑)
          </p>
          <p class="modal_p">
            私たちと一緒に面白い企画を考えたい人を企画局で待ってます。
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">企画局 局長</p>
          <p class="modal_p_right">岩隈潤</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Kikaku" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
      <ModalWrapper><!-- 広報制作局 -->
        <p slot="divName">
          広報制作局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">広報制作局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Kouhouseisaku.jpg" class="modal_img">
          <p class="modal_p">
            ｢早稲田祭｣と聞いてみなさんは何をイメージしますか？ 日本一を誇る知名度の高さ、当日のにぎやかな会場、キャンパス内を彩る装飾物…… きっとさまざまなものを思い浮かべるのではないでしょうか。<br>
            このように世の中から見た早稲田祭のイメージ、すなわち「早稲田祭の顔」をつくり上げているのが、広報制作局なのです。
          </p>
          <p class="modal_p">
            私たちは、早稲田祭のイメージをより良いものにするため、6つのチームに分かれて日々多様な広報活動を行っています。<br>
            もし広報制作局が魅力的な広報を行っていなければ、早稲田祭当日のキャンパスが大勢の人でにぎわうことはないかもしれません。<br>
            たった2日間の早稲田祭を成功させるため、私たちは誇りとこだわりを持って、残りの363日間早稲田祭をつくり続けています。</p>
          <p class="modal_p">
            また局員は、より良い広報を考えることを楽しみながら活動している人たちばかり。みなさんも、私たちと一緒に「楽しませることを楽しむ」プロフェッショナルになりませんか？
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">広報制作局 局長</p>
          <p class="modal_p_right">江口彩乃</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Kouhouseisaku" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
      <ModalWrapper><!-- 財務局 -->
        <p slot="divName">
          財務局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">財務局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Zaimu.jpg" class="modal_img">
          <p class="modal_p">
            財務局は、約3500万円という早稲田祭の膨大な会計を監督する局です。また、ただ予算を監督するだけでなく、他局の活動にも顔を出し、その局での会計活動が適切に行われているか確認もします。つまり、いろいろな局の活動ができるお得な局なんです！ 
          </p>
          <p class="modal_p">
            そんな財務局ですが、実は今年できた新しい局。昨年までは会計会議体と呼ばれる、各局員から構成される組織がこれらの活動を担っていました。<br>
            そのため、活動の内容はまだ細かく決まっておらず、これから1年間かけてみなさんと一緒につくり上げていきたいと思っています。<br>
            少しでも興味を持ったらお近くの財務局員に話しかけてみてくださいね。
          </p>
          <p class="modal_p">
            みなさんにお会いできることを楽しみにしています！
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">財務局 局長</p>
          <p class="modal_p_right">奥村亮輔</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Zaimu" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
      <ModalWrapper><!-- 参加対応局 -->
        <p slot="divName">
          参加対応局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">参加対応局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Sankataiou.jpg" class="modal_img">
          <p class="modal_p">
            参加対応局は、早稲田祭で文化発表を行う早大生をさまざまな形でサポートする活動を行っています。<br>
            共に早稲田祭を創り上げる仲間を募る「参加団体・参加者募集」から、各企画の担当者と当日について話し合う「担当者会議」、そして当日の円滑なステージ運営まで私たちの活動は多岐にわたります。
          </p>
          <p class="modal_p">
            祭の主役である参加団体・参加者を陰ながら支える私たちの仕事は、当然目立つものではありません。ですが、参加団体・参加者と二人三脚で最高の祭を創り上げる日々は何ものにも代えがたく、祭当日に彼らの輝く姿や笑顔を見たときのやりがいは計り知れません！ <br>
            誰かの支えになりたい人、早大生の熱に触れて熱い祭を創りたい人はぜひとも参加対応局にお越しください。
          </p>
          <p class="modal_p">
            参加団体・参加者に寄り添いながら素敵な祭を一緒に創り上げましょう！ 局員一同、みなさんに会えるのを心待ちにしています。
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">参加対応局 局長</p>
          <p class="modal_p_right">山道涼</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Sankataiou" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
      <ModalWrapper><!-- 渉外局 -->
        <p slot="divName">
          渉外局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">渉外局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Shogai.jpg" class="modal_img">
          <p class="modal_p">
            渉外局は、企業や早稲田大学の卒業生である校友、早稲田の街に住んでいる地域の方々という、大学外部の3主体と信頼関係を築く活動をしています。<br>
            そして、これらの活動を通して早稲田祭や運営スタッフの活動へのご理解、早稲田祭の開催に必要な資金や物品などのご支援をいただいています。早稲田祭は学生主体の祭ですが、日本最大級の祭をつくるためには、大人の方の支援も必要だからです。
          </p>
          <p class="modal_p">
            運営スタッフの「顔」として、「理解者」として、大人の方に早稲田祭の魅力や運営スタッフの努力を伝える。早稲田祭および運営スタッフと大学外部の主体、つまり祭と人を繋ぐ「架け橋」になる。それが渉外局です。
          </p>
          <p class="modal_p">
            難しそう…… 大変そう…… と思うかもしれませんが、今いる先輩たちも初めは皆、初心者でした。また責任が伴う分、やりがいも大きいです。きっかけは何でも良いです。<br>
            「普段の大学生活では経験できないことをしたい」「早稲田祭のことを熱く語りたい」「たくさんの人と関わりたい」 そんなあなたを渉外局で待っています！
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">渉外局 局長</p>
          <p class="modal_p_right">木村梨香</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Shogai" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
      <ModalWrapper><!-- 総務局 -->
        <p slot="divName">
          総務局
        </p>
        <div slot="greeting">
          <h3 class="modal_h3">総務局</h3>
          <BrainLine />
          <img slot="img" src="../../../assets/images/Soumu.jpg" class="modal_img">
          <p class="modal_p">
            みなさんは「総務局」と聞いて、何を思い浮かべますか？ いきなり言われてもあまり想像できないかもしれません。<br>
            総務局の活動は、全体合宿などの幹事や備品の管理、内部向けSNSを用いた運営スタッフへの情報発信など、多岐にわたります。私たちは、運営スタッフの活動を縁の下の力持ちとして支え、「みんながよりスムーズに活動できるように」という想いの下、全ての活動を行っています。つまり、総務局とは「運営スタッフのため」の局なんです！
          </p>
          <p class="modal_p">
            そんな総務局の魅力は、なんといっても祭に向けて全力を注ぐ仲間のために活動できることです。「彼らの頑張りを支えたい」 このささやかで温かい想いが総務局の原動力です。<br>
            一瞬で、情熱的で、魅せられる祭を創るために、誰よりも頑張るみんなの力になりたい。そんなあなたを、はっぴの背中を想う場所、総務局で待っています。
          </p>
        </div>
        <div slot="signature">
          <p class="modal_p_right">総務局 局長</p>
          <p class="modal_p_right">佐々木圭</p>
        </div>
        <div slot="pulldown">
          <PullDown v-for="team in this.$store.state.team.Soumu" :key="team.name">
            <p slot="name" class="pulldown_name">{{team.name}}</p>
            <p slot="desc" class="pulldown_desc">{{team.description}}</p>
          </PullDown>
        </div>
      </ModalWrapper>
    </main>
  </article>
</template>

<script>
import BrainLineC from '~/components/CenteredBrainLine'
import MainVisuial from '~/components/TopVisual'
import BrainLine from '~/components/BrainLine'
import ModalWrapper from '~/components/ModalWrapper'
import PullDown from '~/components/PullDown'

export default {
  components: {
    MainVisuial,
    BrainLine,
    BrainLineC,
    ModalWrapper,
    PullDown
  }
}
</script>

<style>
.rightBrainLine{
  width: 30%;
  height: 1px;
  margin-bottom: 4vh;
  background: white;
}

.contents_wrap{
  margin: 8vmin 0;
}
.contents_wrap a{
  display: block;
  padding: 15vmin 0;
  text-align: center;
  border: solid 1px white;
}

/* ========== Modal Content ========== */
.modal_h3{
  font-size: 7vmin;
  margin-left: 3vmin;
}
.modal_h3::before{
  content: "◇";
  margin-right: 3vmin;
}
.modal_img{
  width: 100%;
}
.modal_p{
  margin: 5vmin 0;
  line-height: 1.5;
}
.modal_p_right{
  margin: 1vmin 0;
  text-align: right;
}
.modal_a{
  display: block;
  width: 30%;
  margin: 6vmin auto;
  padding: 3vmin 0 4vmin 0;
  border: white solid 1px;
  text-align: center;
}

/* ========== PullDown Content ========== */

.pulldown_name{
  display: block;
  text-align: center;
  margin: 4vmin auto;
}
.pulldown_desc{
  margin: 3vmin 2vmin;
  line-height: 1.4;
}
</style>