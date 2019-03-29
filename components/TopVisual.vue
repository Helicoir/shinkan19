<template>
    <div class="top_wrap">
      <slot />
      <div class="top_wrap_square"></div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  .top_wrap{
    width: 100%;
    height: 70.5vmin;
    margin-bottom: 10vmin;
  }

  .top_wrap_img{
    position: relative;
    width: 95%;
    float: right;
    z-index: 60;
  }

  .top_wrap_square{
    width: 75%;
    height: 5vmin;
    float: right;
    background: #CE8F9E;
  }
</style>
