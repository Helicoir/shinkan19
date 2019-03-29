<template>
  <div class="teamDetail_container">
    <div v-for="team in $store.state.division.PAC" :key="team"></div>
  </div>
</template>
