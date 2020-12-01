<template>
  <div class="pt-4">
    <div class="row">
      <div class="col-6">
        <TableUpload/>
      </div>

      <div class="col-6">
        <TableTags/>
      </div>
    </div>
  </div>
</template>

<script>
import TableUpload from './components/TableUpload'
import TableTags from './components/TableTags'

export default {
  name: 'cloud-one-page',
  components: {
    TableUpload,
    TableTags
  }
}
</script>
