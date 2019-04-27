import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: []
  },
  mutations: {
    GETPRODUCT (state) {
      Vue.http.get("static/goods.json").then(res=>{ // json数据要放在static文件夹下面
        state.productList = res.data.result.list
        Object.keys(sessionStorage).forEach(id => { // 获取本地会话数据
          state.productList.forEach(product => {
            if(product.productId == id) { // productId是数字 所以不能用严格等于===
              product.checkedNum = Number(sessionStorage[id])
            }
          })
        })
      })
    },
    ADD (state, id) {
      if(state.productList[id].checkedNum < state.productList[id].productQuantity) {
        state.productList[id].checkedNum += 1 
      } else {
        alert('商品数量不足')
      }
    },
    SUBTRACT (state, arg) {
      if(state.productList[arg.id].checkedNum > arg.minN) {
        state.productList[arg.id].checkedNum -= 1
      }
    },
    CLEAR (state, id) {
      state.productList[id].checkedNum = 0
    }
  },
  getters: {
    filterProduct: (state) => (filter) => {
      if (filter === '全部') {
        return state.productList
      } else {
        return state.productList.filter(product => product.productType === filter)
      }
    },
    checkedProduct: state => {
      return state.productList.filter(product => product.checkedNum !== 0)
    },
    totalNum: state => {
      var totalNum = 0
      state.productList.forEach( product => {
        totalNum += product.checkedNum
      })
      return totalNum
    },
    totalPrice: state => {
      var totalPrice = 0
      state.productList.forEach(product => {
        totalPrice += product.productPrice*product.checkedNum
      })
      return totalPrice
    }
  }
  // actions: {
  //   getProduct(context){
  //     Vue.http.get("static/goods.json").then(res=>{
  //       context.commit("GETPRODUCT", res.data.result.list)})
  //   },
  //   getLocal(context,value){
  //     context.commit("GETPRODUCT",value)
  //   },
  //   recover(context){
      
  //     context.commit('RECOVER')
  //   }
  // }
})
