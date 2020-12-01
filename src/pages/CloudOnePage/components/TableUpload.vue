<template>
  <div>
    <form class="form-inline mb-2">
      <input
        type="text"
        class="form-control"
        placeholder="URL..."
      >

      <button
        type="button"
        class="btn btn-primary"
        :disabled="isLoadingTags"
        @click="uploadCloudTags"
      >
        Загрузить из API
      </button>
    </form>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Добавить</th>
        </tr>
      </thead>

      <tbody>
        <template v-if="tags.length">
          <RowUpload/>
        </template>

        <tr v-else>
          <td class="text-center" colspan="3">Пусто</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import RowUpload from './RowUpload'

export default {
  name: 'table-upload-component',
  components: {
    RowUpload
  },
  data () {
    return {
      isLoadingTags: false,
      tags: []
    }
  },
  methods: {
    ...mapActions({
      getCloudTags: 'api/getCloudTags'
    }),
    async uploadCloudTags () {
      this.isLoadingTags = true

      try {
        const data = await this.getCloudTags()
        this.tags = data
      } catch (err) {
        this.$snotify.error('Не удалось загрузить теги.', 'Ошибка')
      }

      this.isLoadingTags = false
    }
  }
}
</script>
