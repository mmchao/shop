<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from './store.js'
// import {mapActions} from 'vuex'
export default {
  store,
  computed: {
    productList() {
      return store.state.productList
    }
  },
  mounted() {
    store.commit('GETPRODUCT') // this.getProduct()调用方法加括号 html中不用
  },
  // methods: {
  //   ...mapActions([
  //     'getProduct', 
  //     'getLocal',
  //     'recover' 
  //   ])
  // },
  watch: {
    productList: {
      handler: function(newVal){
        sessionStorage.clear()
        newVal.forEach(product => {
          if(product.checkedNum != 0) {
            sessionStorage.setItem(product.productId, product.checkedNum) // 缓存到本地会话，刷新页面不丢失选中数据
          } // sessionStorage['productList']=(JSON.stringify(newVal))整个数组存为字符串
        }) 
      }, 
      deep: true // 监听对象内部值的变化用deep
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
}  
/* 响应式布局，屏幕小于min-width时不应用此样式 */
@media screen and (min-width: 1150px) {
  body {
     margin-left: calc(100vw - 100%);   
  /* 预留滚动条宽度 防止页面跳动 */
  }
}
body {
  text-align: center;
}

</style>
