<template>
  <div>
    <form @submit.prevent="addTag" class="mb-2">
      <div class="form-row">
        <div class="col">
          <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Название..."
          >
        </div>

        <div class="col">
          <input
            v-model="size"
            type="text"
            class="form-control"
            placeholder="Размер..."
          >
        </div>

        <button type="submit" class="btn btn-primary">Добавить</button>
      </div>
    </form>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Редактировать</th>
          <th scope="col">Удалить</th>
        </tr>
      </thead>

      <tbody>
        <template v-if="tags.length">
          <RowTag
            v-for="(tag, index) in tags"
            :key="index"
            :data="tag"
          />
        </template>

        <tr v-else>
          <td class="text-center" colspan="4">Пусто</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RowTag from './RowTag'

export default {
  name: 'table-tags-component',
  components: {
    RowTag
  },
  data () {
    return {
      name: '',
      size: ''
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tag.tags
    })
  },
  methods: {
    addTag () {
      const data = {
        name: this.name,
        size: this.size
      }

      this.$socket.emit('CREATE_TAG', data)
    }
  }
}
</script>
