<template>
  <div class="check-item">
    <div class="front">
      
      <img v-bind:src="'static/'+ product.productImage" :alt="product.productName">
    </div>
    <div class="name">{{product.productName}}</div> 
    <div class="price">{{product.productPrice | money}}</div>
    <div class="num">
      <button class="btn btn-sm btn-default" @click="SUBTRACT({id: product.productId, minN:1})">-</button>
      <input class="btn btn-default btn-sm" v-model="product.checkedNum" disabled>
      <button class="btn btn-success btn-sm" @click="ADD(product.productId)">+</button>
    </div>
    <div class="total">{{product.productPrice*product.checkedNum | money}}</div>
    <div class="delete">
      <span class="glyphicon glyphicon-trash delete" @click="CLEAR(product.productId),unCheck(product.productId)"></span>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import { mapGetters } from 'vuex'
import { mapMutations} from 'vuex'
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
    ]),
    unCheck(id){
      this.$emit('unCheck',id)
    }
  }

}

</script>
<style lang="stylus" scoped>
.check-item
  display flex
  border-left 1px solid #d5d5d5
  border-right 1px solid #d5d5d5
  border-bottom 1px solid #d5d5d5
  height 150px
  .front
    position relative // 相对定位元素经常被用来作为绝对定位元素的容器块。 absolute也可以
    img
      position absolute // 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>:必须是已定位的父元素
      top 35px
      left 80px
      width 80px
      height 80px
      border 1px solid #d5d5d5
    input
      position absolute
      top 60px
      left 20px
  .name
    flex 4
    margin auto
  .price, .num, .total, .delete
    flex 1
    margin auto
  .num button
    font-weight bold
  .delete
    cursor pointer
    :hover
      color red
  input
    width 40px
    text-align center
</style>