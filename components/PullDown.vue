<template>
  <section class="pulldown_wrap">
    <div class="pulldown_heading" @click="pulldown_Switch=true">
      <slot name="name" class="pulldown_name" />
    </div>
    <div class="pulldown_content" v-show="pulldown_Switch">
      <slot name="desc" class="pulldown_desc" />
    <a @click="pulldown_Switch=false"
      class="pulldown_close">
      閉じる
    </a>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      pulldown_Switch: false
    }
  }
}
</script>
<style>
.pulldown_wrap{
  border: solid 1px white;
}
.pulldown_name{
  text-align: center;
}
.pulldown_close{
  display: block;
  width: 30vmin;
  margin: 6vmin auto;
  padding: 3vmin 0 4vmin 0;
  border: white solid 1px;
  text-align: center;
}
</style>
