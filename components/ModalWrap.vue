<template>
  <section class="modal_wrap">
    <div class="modal_bg">
      <div class="modal_content">
        <slot />
      </div>
    </div>
  </section>
</template>

<style>
.modal_bg{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8)
}
.modal_content{
  width: 85%;
  height: 85%;
  margin: 0 auto;
  background: #464655;
  border: solid 1px white;
}


</style>
