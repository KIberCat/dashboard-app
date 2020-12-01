<template>
  <div class="cloud-tags">
    <VueWordCloud
      :words="words"
      :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
      font-family="Roboto"
    />
  </div>
</template>

<script>
import VueWordCloud from 'vuewordcloud'
import { mapState } from 'vuex'

export default {
  name: 'cloud-tags-component',
  components: {
    VueWordCloud
  },
  computed: {
    ...mapState({
      tags: state => state.tag.tags
    }),
    words () {
      return this.tags.map(tag => [tag.name, tag.size])
    }
  }
}
</script>

<style lang="scss" scoped>
.cloud-tags {
  padding: 12px;
  border: 1px solid #fff;
  border-radius: 14px;
  height: 420px;
  width: 580px;
}
</style>
