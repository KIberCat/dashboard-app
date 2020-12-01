<template>
  <div class="dashboard-layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'dashboard-layout'
}
</script>

<style lang="scss" scoped>
.dashboard-layout {
  color: #fff;
  padding: 20px;
  height: 100vh;
  background: #1C2329;
  // background: rgb(41,41,41);
}
</style>
