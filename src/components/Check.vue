<template>
  <div class="container">
    <div class="title">购物车</div>
    <div class="header">
      <div class="info">商品信息</div>
      <div class="price">商品单价</div>
      <div class="num">商品数量</div>
      <div class="total">金额</div>
      <div class="delete">编辑</div>
    </div>
    <div class="item" v-for="product in checkedProduct" :key="product.productId">
      <input class="check-icon" type="checkbox" v-model="checked" :value="product.productId">
      <check-item :product="product" @unCheck="unCheck"></check-item>
    </div>
    
    <div class="check-area">
      <input type="checkbox" v-model="allChecked">
      <span class="check-all">全选</span>
      <span class="total-num">总数量：{{totalNum}}</span>
      <span class="total-price">总金额：{{totalPrice | money}}</span>
      <router-link class="btn btn-lg" :to="{ name: 'adress'}">结账</router-link>
    </div>
  </div>
</template>

<script>
import CheckItem from './CheckItem'
import store from '../store.js'
import { mapGetters} from 'vuex'
export default {
  store,
  data(){
    return{
      checked: []
    }
  },
  components: {
    CheckItem
  },
  created(){
    this.checkAll() // 不加()
  },
  computed: {
    ...mapGetters([
      'checkedProduct',
      // 'totalNum',
      // 'totalPrice'
    ]),
    totalNum(){
      let num = 0
      this.checked.forEach((id) => {
        this.checkedProduct.forEach((product)=>{
          if(product.productId == id){
            num += product.checkedNum
          }
        })
      })
      return num
    },
    totalPrice(){
      let price = 0
      this.checked.forEach((id) => {
        this.checkedProduct.forEach((product)=>{
          if(product.productId == id){
            price += product.checkedNum*product.productPrice
          }
        })
      })
      return price
    },
    allChecked: {
      get: function(){
        if(this.checked.length == this.checkedProduct.length){
          return true
        }
      },
      set: function(){
        if(this.checked.length == this.checkedProduct.length){
          this.checked = []
        } else {
          this.checkAll()
        }
      }
    }
  },
  methods: {
    checkAll(){
      this.checkedProduct.forEach((product)=>{
        if(this.checked.indexOf(product.productId) == -1){
          this.checked.push(product.productId)
        }
      })
    },
    unCheck(id){
      let index = this.checked.indexOf(id)
      if(index != -1){
        this.checked.splice(index,1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 1280px
  margin 0 auto
  padding 0
.title
  margin 30px
  font-size 25px
  font-weight bold
.header
  display flex
  background-color green
  color #fff
  height 50px
  line-height 50px
  div
    flex 1
    font-size 20px
    &.info
      flex 4
.check-area
  text-align right
  margin 40px 0
  font-size 16px
  .total-price
    width 150px // 防止span长度增加 左右跳动
    display inline-block 
    text-align center
    margin-right 30px
  .total-num
    width 150px
    display inline-block
    text-align center
  .check-all
    margin-right 660px
    margin-left 10px
    font-size 20px
  input
    -ms-transform: scale(1.2); /* IE */
    -moz-transform: scale(1.2); /* FireFox */
    -webkit-transform: scale(1.2); /* Safari and Chrome */
    -o-transform: scale(1.2); /* Opera */
  a
    text-align center
    display inline-block
    text-decoration none 
    color #fff
    width 180px
    background-color #d1434a
.item
  position relative
  .check-icon
    position absolute
    top 63px
    left 30px
</style>
