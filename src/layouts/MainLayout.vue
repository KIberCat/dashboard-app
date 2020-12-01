<template>
  <div>
    <LayoutHeader/>

    <div class="container">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader'

export default {
  name: 'main-layout',
  components: {
    LayoutHeader
  }
}
</script>

<style lang="scss">
@import '~vue-snotify/styles/material';
</style>

<style lang="scss" scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .15s ease, transform .15s ease;
}
.page-enter {
  opacity: 0;
  transform: translate(10%, 0);
}
.page-leave-active {
  opacity: 0;
  transform: translate(-10%, 0);
}
</style>
