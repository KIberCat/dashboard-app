<template>
  <tr>
    <!-- <td>
      <input type="text" class="form-control" placeholder="Название...">
    </td>

    <td>
      <input type="text" class="form-control" placeholder="Размер...">
    </td>

    <td>
      <button
        type="button"
        class="btn btn-success btn-sm"
      >
        Сохранить
      </button>
    </td> -->

    <td>{{ data.name }}</td>

    <td>{{ data.size }}</td>

    <td>
      <button
        type="button"
        class="btn btn-success btn-sm"
      >
        Редактировать
      </button>
    </td>

    <td>
      <button
        @click="removeTag"
        type="button"
        class="btn btn-danger btn-sm"
      >
        Удалить
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'row-tag-component',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    removeTag () {
      this.$socket.emit('REMOVE_TAG', this.data.id)
    }
  }
}
</script>
