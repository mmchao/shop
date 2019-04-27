<template>
  <div class="tabs">
    <div v-for="kind in kinds" :key="kind" :class="{'actived' : filter === kind }" @click="toggleFilter(kind)">
      {{kind}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      kinds: ['全部','饮料','零食','日用品','速食']
    }
  },
  methods: {
    toggleFilter(kind) {
      this.$emit('toggle', kind)
    }
  }
}
</script>
<style lang="stylus" scoped>
.tabs
  display flex
  font-size 30px
  margin-top 0px
  height 50px
  line-height 50px
  div
    flex 1
    background-color #42b983
    cursor pointer
    &.actived
      background-color #137c56
</style>

