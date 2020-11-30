<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      AIJ SPEECHER
    </a>

    <ul class="navbar-nav mr-auto">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="nav-item"
      >
        <router-link
          :to="link.path"
          tag="a"
          class="nav-link"
          exact-active-class="active"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'layout-header-component',
  data () {
    return {
      links: [
        {
          path: '/',
          name: 'Главная'
        },
        {
          path: '/cloud-tags',
          name: 'Облако тегов 1'
        },
        {
          path: '/cloud-tags',
          name: 'Облако тегов 2'
        },
        {
          path: '/cloud-tags',
          name: 'Персона 1'
        },
        {
          path: '/cloud-tags',
          name: 'Персона 2'
        },
        {
          path: '/cloud-tags',
          name: 'Персона 3'
        },
        {
          path: '/dashboard',
          name: 'Графики'
        }
      ]
    }
  }
}
</script>
