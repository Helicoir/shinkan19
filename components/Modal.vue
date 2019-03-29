<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window" @click.self="$emit('close')">
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}

// 使い方
// ①使いたいページでModalコンポーネントを呼び出す
// ②
/*
  data() {
    return {
      modal: false,
      message: ''
    }
  },
*/

//③
/*
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    }
  },
*/
// ④使いたい要素に@click="openModal"を付与
// ⑤適当な位置でコンポーネントを呼び出し、スロットでコンテンツを記述

</script>

<style scoped>
.modal.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99;
}

.modal-window {
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  }

.modal-content {
  width: inherit;
  height: inherit;
  margin: 10vmin auto;
  margin-top: 15vmin;
  }

/* overlay transition css */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;
}
.modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}
.modal-window {
  opacity: 1;
  transform: translateY(-20px);
}

.closer{
  width: 50px;
  height: 50px;
  background: white;
}
</style>