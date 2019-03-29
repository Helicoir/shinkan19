<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <nav>
            <p>アアアアア！！！</p>
            <a @click="close">閉じる</a>
          </nav>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {
      modal: false,
    }
  },
  methods: {
    open(){
      this.modal = true
    },
    close(){
      this.modal = false
    }
  }
}
</script>

<style scoped>
p, a{
  color: #464655;
}

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
  margin-top: 5vmin;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  }

.modal-content {
  width: inherit;
  height: inherit;
  margin: 10vmin auto;
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