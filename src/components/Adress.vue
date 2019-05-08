<template>
<div class="container">
  <div class="header">选择地址</div>
  <div class="address">
    <div v-for="(address,index) in filterAddress" :key="address.addressId" :class="['item',{'check': index==curIndex}]" @click="curIndex=index">
      <div class="name">{{address.userName}}</div>
      <span class="glyphicon glyphicon-pencil edit" @click="getVal" data-toggle="modal" data-target="#edit" v-show="index==curIndex"></span>
      <span class="glyphicon glyphicon-trash delete" v-show="index==curIndex" @click.stop="delAddress(index)"></span>
      <div class="street">{{address.streetName}}</div>
      <div class="tel">{{address.tel}}</div>
      <div class="footer" v-if="address.isDefault">默认地址</div>
      <div class="footer" v-if="index==curIndex&&!address.isDefault" @click.stop="setDefault(index)">设为默认</div> 
    </div>
    <div class="item add" data-toggle="modal" data-target="#add">
      <div class="glyphicon glyphicon-plus icon"></div>
      <div>添加新地址</div>
    </div>
  </div>
  <div class="more" @click="showOrHide" v-show="addressList.length > 3">
    more <span :class="['glyphicon', (showNum == 3 ? 'glyphicon-menu-down': 'glyphicon-menu-up')]"></span>
  </div>
  <div class="pay-btn">去付款</div>
  <div class="modal fade" id="edit" tabindex="-1"> 
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">编辑地址</h4>
        </div>
        <div class="modal-body">
            <div class="form-group">
              <div class="form">
                <label class="col-form-label">姓名</label>
                <input type="text" class="form-control" id="editName">
              </div>
              <div class="form">
                <label class="col-form-label">地址</label>
                <input type="text" class="form-control" id="editStreet">
              </div>
              <div class="form">
                <label class="col-form-label">电话</label>
                <input type="text" class="form-control" id="editTel">
              </div>                         
            </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-default" data-dismiss="modal">关闭</button>
          <button class="btn btn-primary" @click="editAddress">提交</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="add" tabindex="-1" v-if="addressList.length>0"> 
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">添加地址</h4>
        </div>
        <div class="modal-body">
            <div class="form-group">
              <div class="form">
                <label class="col-form-label">姓名</label>
                <input type="text" class="form-control" id="addName">
                 <!-- 数据还没获取到的时候 此处会报错 所以最外层用v-if-->
              </div>
              <div class="form">
                <label class="col-form-label">地址</label>
                <input type="text" class="form-control" id="addStreet">
              </div>
              <div class="form">
                <label class="col-form-label">电话</label>
                <input type="text" class="form-control" id="addTel">
              </div>                         
            </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-default" data-dismiss="modal">关闭</button>
          <button class="btn btn-primary" @click="addAddress">提交</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      addressList:[],
      showNum:3,
      curIndex:0
    }
  },
  created(){
    this.getAddressList()
  },
  computed: {
    filterAddress(){
      return this.addressList.slice(0, this.showNum)
    }
  },
  methods: {
    getAddressList(){
      this.$http.get('static/address.json').then(res => {
        this.addressList = res.data.result
      })
    },
    setDefault(index){
      this.addressList.forEach((adress,anotherIndex) => {
        if(index == anotherIndex) {
          adress.isDefault = true
        } else {
          adress.isDefault = false
        }
      })
    },
    delAddress(index){ // 要重设curIndex 不然dom中使用curIndex的元素会报错
      if(this.addressList[index].isDefault == true){
        this.curIndex = 0 // 要阻止冒泡 不然父元素的click事件会使curIndex恢复为删除项目的index值 与异步操作无关 js本身就是按顺序执行的
        this.addressList.splice(index, 1)       
        this.addressList[0].isDefault = true
      } else {
        this.addressList.splice(index, 1)
        this.addressList.forEach((address,index) => {
          if(address.isDefault == true){
            this.curIndex = index // 函数执行完之后才会重新渲染dom 所以重设curIndex 放在删除之后也可以
          }
        })
      }  
    },
    showOrHide(){
			if(this.showNum==3){
				this.showNum = this.addressList.length
			}else{
				this.showNum = 3
			}
    },
    getVal(){
      $("#editName").val(this.addressList[this.curIndex].userName)
      $("#editStreet").val(this.addressList[this.curIndex].streetName)
      $("#editTel").val(this.addressList[this.curIndex].tel)
    },
    editAddress(){
      let userName = $("#editName")
      let streetName = $("#editStreet")
      let tel = $("#editTel")
      if(userName.val().trim()&&streetName.val().trim()&&tel.val().trim()){ // trim去掉两端的空格 并返回去掉空格之后的值 再次调用val后两端已经没有空格
        if(/^1[345789]\d{9}$|^\(0\d{2,3}\)[- ]?\d{8}$|^0\d{2,3}[- ]?\d{8}$/.test(tel.val().trim())) { // 匹配电话号码
          this.addressList[this.curIndex].userName = userName.val()
          this.addressList[this.curIndex].streetName = streetName.val()
          this.addressList[this.curIndex].tel = tel.val()
          $('#edit').modal('hide')
        } else {
          alert('请输入正确的电话号码')
        }
      } else {
        alert('请输入完整地址')
      }
    },
    addAddress(){
      let userName = $("#addName")
      let streetName = $("#addStreet")
      let tel = $("#addTel")
      if(userName.val().trim()&&streetName.val().trim()&&tel.val().trim()){ // trim去掉两端的空格 并返回去掉空格之后的值
        if(/^1[345789]\d{9}$|^\(0\d{2,3}\)[- ]?\d{8}$|^0\d{2,3}[- ]?\d{8}$/.test(tel.val().trim())) {
          let newAddress = {
            'userName': userName.val(),
            'streetName': streetName.val(),
            'tel': tel.val(),
            'isDefault': false
          }
          this.addressList.unshift(newAddress)
          userName.val('')
          streetName.val('')
          tel.val('')
          $('#add').modal('hide') // 关闭模态框
        } else {
          alert('请输入正确的电话号码')
        }
      } else {
        alert('请输入完整地址')
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
  .header
    margin 30px 
    font-size 25px
    font-weight bold
  .more
    font-size 16px
    color #EE7A23
    cursor pointer
    display inline-block
    .glyphicon
      font-size 12px
    .glyphicon-menu-up
      position relative
      top 2.5px
  .form
    display flex
    margin 15px auto
    width 80%
    label
      width 40px
      height 30px
      line-height 30px
      margin-right 20px
  .pay-btn
    color #fff
    width 180px
    height 50px
    line-height 50px
    background-color #d1434a
    margin 50px auto
    cursor pointer
.address
  display flex
  flex-wrap wrap
  .item
    position relative
    width 23.5%
    height 160px
    border 2px solid #d5d5d5
    margin-right 2%
    margin-bottom 20px
    text-align left
    cursor pointer
    &:nth-child(4n)
      margin-right 0
    .name
      margin 20px 10px 10px 15px
      font-size 20px
    .street
      margin 0 15px
      font-size 14px
    .tel
      margin 25px 10px 5px 15px
      font-size 14px
    .footer
      margin 0 18px
      font-size 14px
      color #EE7A23
      display inline-block
    .edit
      position absolute
      top 15%
      left 85%
      font-size 16px
      &:hover
        color #EE7A23
    .delete
      position absolute
      top 80%
      left 85%
      font-size 16px
      &:hover
        color red
    &.check
      border 2px solid #EE7A23
    &:hover
      border 2px solid #EE7A23
  .add
    text-align center
    .icon
      font-size 50px
      margin-top 40px
      margin-bottom 10px


</style>