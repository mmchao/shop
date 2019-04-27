<template>
  <div class="item">
    <!-- 子组件中的class会传到父组件中去，所以不能与父组件中的class重复 -->
    <img v-bind:src="'static/'+ product.productImage" :alt="product.productName"> 
      <!-- 图片要放在static文件夹下面-->
    <div class="info">
      <span>{{product.productName}}</span>
      <span>{{product.productPrice | money}}</span>
    </div>
    <div class="add" v-if="product.checkedNum === 0">
      <button class="btn btn-success btn-sm" @click="ADD(product.productId)">加入购物车</button>
    </div>
    <div class="add" v-else>
      <button class="btn btn-default btn-sm minus" @click="SUBTRACT({id:product.productId,minN:0})">-</button>
      <input class="btn btn-default btn-sm" disabled v-model="product.checkedNum">
      <button class="btn btn-success btn-sm plus" @click="ADD(product.productId)">+</button>
      <button class="btn btn-danger btn-sm" @click="CLEAR(product.productId)">清空</button>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import { mapMutations } from 'vuex'
export default {
  store,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations([
      'SUBTRACT',
      'ADD',
      'CLEAR'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.item
  margin 35px 1%
  width 18% 
  img 
    width: 150px
    height: 150px
    margin-bottom 15px
  .info span
    margin 5px
  .add
    margin-top 10px
    .minus, .plus
      font-weight bold
  input 
    width 50px
    text-align center
</style>

 
 