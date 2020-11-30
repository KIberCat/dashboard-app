<template>
  <div id="app">
    <component :is="selectLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import DashboardLayout from '@/layouts/DashboardLayout'

export default {
  name: 'App',
  components: {
    MainLayout,
    DashboardLayout
  },
  computed: {
    selectLayout () {
      return this.$route.meta.layout || 'main-layout'
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
