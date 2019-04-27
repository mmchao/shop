<template>
  <div class="container">
    <div class="title">选择商品</div>
    <tab :filter="filter" @toggle="toggleFilter" ></tab>
    <!-- 触发子组件传过来的含参事件，函数不能加() -->   
    <div class="product-area">
      <item :product="product" v-for="product in filterProduct" :key="product.productId"></item>
    </div> 
    <div class="check-area">
      <span>总数量：{{totalNum}}</span>
      <span>总金额：{{totalPrice | money}}</span>
      <router-link class="btn btn-lg" :to="{ name: 'check'}">购物车</router-link>
      <!-- <a href="" @click="goCheck" type="button">结算</a>   -->
    </div>
  </div>
</template>

<script>
import Tab from './Tab'
import Item from './Item'
import store from '../store.js'
import { mapGetters } from 'vuex'
export default {
  components: { 
    Tab,
    Item
  },
  store,
  data() {
    return {
      filter: '全部'
    }
  },
  computed: {
    ...mapGetters([
      'totalNum',
      'totalPrice'
    ]),
    filterProduct() {
      return store.getters.filterProduct(this.filter)
    }
  },
  methods: {
    toggleFilter(kind) {  // 父组件触发方法不要带子组件里面的参数（kind）也不要加括号（）
      this.filter = kind
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 1280px
  margin auto
  padding 0
.title
  margin 35px
  font-size 30px
  font-weight bold
.product-area
  display flex
  flex-wrap wrap
  border-left 1px solid #d5d5d5
  border-right 1px solid #d5d5d5
  border-bottom 1px solid #d5d5d5
.check-area
  text-align right 
  margin 30px 0
  font-size 16px
  span
    margin 20px
    font-size 18px
  a
    text-align center
    text-decoration none 
    color #fff
    width 180px
    background-color green
    margin-left 25px
</style>

