webpackJsonp([2],{"7wRK":function(t,s){},Kr1a:function(t,s,a){"use strict";(function(t){s.a={data:function(){return{addressList:[],showNum:3,curIndex:0}},created:function(){this.getAddressList()},computed:{filterAddress:function(){return this.addressList.slice(0,this.showNum)}},methods:{getAddressList:function(){var t=this;this.$http.get("static/address.json").then(function(s){t.addressList=s.data.result})},setDefault:function(t){this.addressList.forEach(function(s,a){s.isDefault=t==a})},delAddress:function(t){var s=this;1==this.addressList[t].isDefault?(this.curIndex=0,this.addressList.splice(t,1),this.addressList[0].isDefault=!0):(this.addressList.splice(t,1),this.addressList.forEach(function(t,a){1==t.isDefault&&(s.curIndex=a)}))},showOrHide:function(){3==this.showNum?this.showNum=this.addressList.length:this.showNum=3},getVal:function(){t("#editName").val(this.addressList[this.curIndex].userName),t("#editStreet").val(this.addressList[this.curIndex].streetName),t("#editTel").val(this.addressList[this.curIndex].tel)},editAddress:function(){var s=t("#editName"),a=t("#editStreet"),e=t("#editTel");s.val().trim()&&a.val().trim()&&e.val().trim()?(this.addressList[this.curIndex].userName=s.val(),this.addressList[this.curIndex].streetName=a.val(),this.addressList[this.curIndex].tel=e.val(),t("#edit").modal("hide")):alert("请输入完整地址")},addAddress:function(){var s=t("#addName"),a=t("#addStreet"),e=t("#addTel");if(s.val().trim()&&a.val().trim()&&e.val().trim()){var i={userName:s.val(),streetName:a.val(),tel:e.val(),isDefault:!1};this.addressList.unshift(i),s.val(""),a.val(""),e.val(""),t("#add").modal("hide")}else alert("请输入完整地址")}}}}).call(s,a("7t+N"))},ViwK:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Kr1a"),i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[t._v("选择地址")]),t._v(" "),a("div",{staticClass:"address"},[t._l(t.filterAddress,function(s,e){return a("div",{key:s.addressId,class:["item",{check:e==t.curIndex}],on:{click:function(s){t.curIndex=e}}},[a("div",{staticClass:"name"},[t._v(t._s(s.userName))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e==t.curIndex,expression:"index==curIndex"}],staticClass:"glyphicon glyphicon-pencil edit",attrs:{"data-toggle":"modal","data-target":"#edit"},on:{click:t.getVal}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e==t.curIndex,expression:"index==curIndex"}],staticClass:"glyphicon glyphicon-trash delete",on:{click:function(s){return s.stopPropagation(),t.delAddress(e)}}}),t._v(" "),a("div",{staticClass:"street"},[t._v(t._s(s.streetName))]),t._v(" "),a("div",{staticClass:"tel"},[t._v(t._s(s.tel))]),t._v(" "),s.isDefault?a("div",{staticClass:"footer"},[t._v("默认地址")]):t._e(),t._v(" "),e!=t.curIndex||s.isDefault?t._e():a("div",{staticClass:"footer",on:{click:function(s){return s.stopPropagation(),t.setDefault(e)}}},[t._v("设为默认")])])}),t._v(" "),t._m(0)],2),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.addressList.length>3,expression:"addressList.length > 3"}],staticClass:"more",on:{click:t.showOrHide}},[t._v("\r\n    more "),a("span",{class:["glyphicon",3==t.showNum?"glyphicon-menu-down":"glyphicon-menu-up"]})]),t._v(" "),a("div",{staticClass:"pay-btn"},[t._v("去付款")]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"edit",tabindex:"-1"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{"data-dismiss":"modal"}},[t._v("关闭")]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.editAddress}},[t._v("提交")])])])])]),t._v(" "),t.addressList.length>0?a("div",{staticClass:"modal fade",attrs:{id:"add",tabindex:"-1"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{"data-dismiss":"modal"}},[t._v("关闭")]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.addAddress}},[t._v("提交")])])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"item add",attrs:{"data-toggle":"modal","data-target":"#add"}},[s("div",{staticClass:"glyphicon glyphicon-plus icon"}),this._v(" "),s("div",[this._v("添加新地址")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[this._v("×")]),this._v(" "),s("h4",{staticClass:"modal-title"},[this._v("编辑地址")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form"},[a("label",{staticClass:"col-form-label"},[t._v("姓名")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"editName"}})]),t._v(" "),a("div",{staticClass:"form"},[a("label",{staticClass:"col-form-label"},[t._v("地址")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"editStreet"}})]),t._v(" "),a("div",{staticClass:"form"},[a("label",{staticClass:"col-form-label"},[t._v("电话")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"editTel"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[this._v("×")]),this._v(" "),s("h4",{staticClass:"modal-title"},[this._v("添加地址")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form"},[a("label",{staticClass:"col-form-label"},[t._v("姓名")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"addName"}})]),t._v(" "),a("div",{staticClass:"form"},[a("label",{staticClass:"col-form-label"},[t._v("地址")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"addStreet"}})]),t._v(" "),a("div",{staticClass:"form"},[a("label",{staticClass:"col-form-label"},[t._v("电话")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"addTel"}})])])])}]};var d=function(t){a("7wRK")},l=a("VU/8")(e.a,i,!1,d,"data-v-24297186",null);s.default=l.exports}});
//# sourceMappingURL=2.3f59b9b8f6b3705ba791.js.map