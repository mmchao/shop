<template>
  <div class="tab">
  <ul class="nav nav-tabs nav-justified">
	  <li v-for="kind in kinds" :key="kind" :class="{'active' : filter === kind }"><a href="#" @click="toggleFilter(kind)">{{kind}}</a></li>
  </ul>
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
  data () {
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
.tab
  font-size 20px
  .active
    font-weight bold
a
  color #7d7c77
</style>