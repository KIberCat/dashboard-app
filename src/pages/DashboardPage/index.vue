<template>
  <div class="dashboard-page">
    <CloudTags/>

    <div class="dashboard-page__users">
      <!-- <UserCard
        v-for="(user, index) in users"
        :key="index"
        :data="user"
      /> -->
    </div>
  </div>
</template>

<script>
import CloudTags from './components/CloudTags'
import UserCard from './components/UserCard'

export default {
  name: 'dashboard-page',
  components: {
    CloudTags,
    UserCard
  },
  data () {
    return {
      users: [
        {
          avatar: 'person_1.jpg',
          themes: [
            'Будущее России',
            'Цифровая экономика',
            'Экспорт высоких технологий',
            'Гранты и поддержка',
            'Подготовка кадров'
          ]
        },
        {
          avatar: 'person_2.jpg',
          themes: [
            'Будущее Казахстана',
            'Цифровая экономика',
            'Экспорт высоких технологий',
            'Гранты и поддержка',
            'Подготовка кадров'
          ]
        },
        {
          avatar: 'person_3.jpg',
          themes: [
            'Будущее Сбербанка',
            'Цифровая экономика',
            'Экспорт высоких технологий',
            'Гранты и поддержка',
            'Подготовка кадров'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-page {
  &__users {
    display: flex;
  }
}
</style>
