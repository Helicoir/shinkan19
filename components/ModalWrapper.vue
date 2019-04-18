<template>
  <section class="modal_wrap">
    <a class="modalbutton_wrap" @click="modal_Switch=!modal_Switch">
      <slot name="divName" />
    </a>
    <div class="modal_bg" v-if="modal_Switch">
      <div class="modal_content">
        <slot name="greeting">
          <slot name="img" class="imgarea" />
        </slot>
          <div class="rightBrainLine_wrap">
            <div class="rightBrainLine"></div>
          </div>
        <slot name="signature" class="signature" />
        <h3>チーム紹介</h3>
        <slot name="pulldown" />
      <a @click="modal_Switch=false"
        class="modal_close">
        戻る
      </a>
      </div>
    </div>
  </section>
</template>

<script>
import PullDown from '~/components/PullDown'
export default {
  components: {
    PullDown
  },
  data(){
    return {
      modal_Switch: false,
    }
  },

}
</script>

<style>
h3{
  margin: 8vmin 0;
  font-size: 6vmin;
}

section{
  margin: 5vmin 0;
}
.modalbutton_wrap{
  display: block;
  padding: 15vmin 0;
  text-align: center;
  border: solid 1px white;
}
.modal_bg{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}
.modal_content{
  position: fixed;
  width: 90%;
  height: 85%;
  top: 7.5%;
  left: 5%;
  margin: 0 auto;
  padding: 7vmin 8vmin;
  background: #464655;
  border: solid 1px white;
  overflow: scroll;
  z-index: 9999;
}
.imgarea{
  width: 100%;
}

.rightBrainLine_wrap{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.rightBrainLine{
  width: 30%;
  height: 1px;
  margin-bottom: 4vh;
  background: white;
  align-self: flex-end;
}

.signature{
  display: flex;
}

.modal_close{
  display: block;
  width: 30%;
  margin: 6vmin auto;
  padding: 3vmin 0 4vmin 0;
  border: white solid 1px;
  text-align: center;
}
</style>
