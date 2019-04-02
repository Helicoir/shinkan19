export const state = () =>({
// アニメーション用
  switcher: false,
  // 局紹介
  division: {
    PM: {
      message: "俺が局長だ〜〜！！"
    },
    KIK: {
      message: "岩隈です。どうも"
    },
    PAC: {
      message: "メッセージ",
      team: {
        gakunai: {
          name:"学内広報チーム",
          detail: "詳細が入ります",
          img_pass: "../assets/images/sample1.jpg"
        }
      }
    }
  },
  // 入会関連情報
  entry: {
  },
  // よくある質問
  faq: {
    no1: {
      Q: "おやつは何円まで持ち込み可能ですか？",
      A: "300円までです"
    },
    no2: {
      Q: "バナナはおやつに入りますか？",
      A: "個人の解釈にお任せします"
    },
    no3: {
      Q: "「バナナはおやつではない」という個人の解釈によって、遠足への過剰なバナナの持ち込みを招く恐れがあります。それでもバナナがおやつか否かを個人の解釈に委ねるのですか？",
      A: "他の荷物を圧迫しない程度の量であれば、バナナをどれだけ持ち込んでも構いません。持ち込んだバナナ、そしてそれを持ち込む過程で他の荷物の携帯を断念したことで生じるいかなる損失も私どもは負いかねますので、あらかじめご了承ください。"
    },
    no4: {
      Q: "パンツはバナナに入りますか？",
      A: "個人の解釈によるんじゃないでしょうか。"
    },
    // 新歓イベント情報
    events: {}
  }
})

export const getters = {
  switcher: state => state.switcher
}

export const mutation = {
  addEvents(state, { events }){
    state.events.push(events)
  }
}

export const actions = {
  async fetchDivision({commit} , {id}){
    const division = await this.$get(``)
  }
}