webpackJsonp([1],{"+7QF":function(t,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c("Dd8w"),a=c.n(s),n=c("olkN"),r=c("NYxO"),i={store:n.a,props:{product:{type:Object,required:!0}},methods:a()({},Object(r.c)(["SUBTRACT","ADD","CLEAR"]),{unCheck:function(t){this.$emit("unCheck",t)}})},o={render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"check-item"},[c("div",{staticClass:"front"},[c("img",{attrs:{src:"static/"+t.product.productImage,alt:t.product.productName}})]),t._v(" "),c("div",{staticClass:"name"},[t._v(t._s(t.product.productName))]),t._v(" "),c("div",{staticClass:"price"},[t._v(t._s(t._f("money")(t.product.productPrice)))]),t._v(" "),c("div",{staticClass:"num"},[c("button",{staticClass:"btn btn-sm btn-default",on:{click:function(e){return t.SUBTRACT({id:t.product.productId,minN:1})}}},[t._v("-")]),t._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:t.product.checkedNum,expression:"product.checkedNum"}],staticClass:"btn btn-default btn-sm",attrs:{disabled:""},domProps:{value:t.product.checkedNum},on:{input:function(e){e.target.composing||t.$set(t.product,"checkedNum",e.target.value)}}}),t._v(" "),c("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return t.ADD(t.product.productId)}}},[t._v("+")])]),t._v(" "),c("div",{staticClass:"total"},[t._v(t._s(t._f("money")(t.product.productPrice*t.product.checkedNum)))]),t._v(" "),c("div",{staticClass:"delete"},[c("span",{staticClass:"glyphicon glyphicon-trash delete",on:{click:function(e){t.CLEAR(t.product.productId),t.unCheck(t.product.productId)}}})])])},staticRenderFns:[]};var d=c("VU/8")(i,o,!1,function(t){c("R+k2")},"data-v-a9f7c108",null).exports,u={store:n.a,data:function(){return{checked:[]}},components:{CheckItem:d},created:function(){this.checkAll()},computed:a()({},Object(r.b)(["checkedProduct"]),{totalNum:function(){var t=this,e=0;return this.checked.forEach(function(c){t.checkedProduct.forEach(function(t){t.productId==c&&(e+=t.checkedNum)})}),e},totalPrice:function(){var t=this,e=0;return this.checked.forEach(function(c){t.checkedProduct.forEach(function(t){t.productId==c&&(e+=t.checkedNum*t.productPrice)})}),e},allChecked:{get:function(){if(this.checked.length==this.checkedProduct.length)return!0},set:function(){this.checked.length==this.checkedProduct.length?this.checked=[]:this.checkAll()}}}),methods:{checkAll:function(){var t=this;this.checkedProduct.forEach(function(e){-1==t.checked.indexOf(e.productId)&&t.checked.push(e.productId)})},unCheck:function(t){var e=this.checked.indexOf(t);-1!=e&&this.checked.splice(e,1)}}},l={render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container"},[c("div",{staticClass:"title"},[t._v("购物车")]),t._v(" "),t._m(0),t._v(" "),t._l(t.checkedProduct,function(e){return c("div",{key:e.productId,staticClass:"item"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"check-icon",attrs:{type:"checkbox"},domProps:{value:e.productId,checked:Array.isArray(t.checked)?t._i(t.checked,e.productId)>-1:t.checked},on:{change:function(c){var s=t.checked,a=c.target,n=!!a.checked;if(Array.isArray(s)){var r=e.productId,i=t._i(s,r);a.checked?i<0&&(t.checked=s.concat([r])):i>-1&&(t.checked=s.slice(0,i).concat(s.slice(i+1)))}else t.checked=n}}}),t._v(" "),c("check-item",{attrs:{product:e},on:{unCheck:t.unCheck}})],1)}),t._v(" "),c("div",{staticClass:"check-area"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.allChecked,expression:"allChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allChecked)?t._i(t.allChecked,null)>-1:t.allChecked},on:{change:function(e){var c=t.allChecked,s=e.target,a=!!s.checked;if(Array.isArray(c)){var n=t._i(c,null);s.checked?n<0&&(t.allChecked=c.concat([null])):n>-1&&(t.allChecked=c.slice(0,n).concat(c.slice(n+1)))}else t.allChecked=a}}}),t._v(" "),c("span",{staticClass:"check-all"},[t._v("全选")]),t._v(" "),c("span",{staticClass:"total-num"},[t._v("总数量："+t._s(t.totalNum))]),t._v(" "),c("span",{staticClass:"total-price"},[t._v("总金额："+t._s(t._f("money")(t.totalPrice)))]),t._v(" "),c("router-link",{staticClass:"btn btn-lg",attrs:{to:{name:"adress"}}},[t._v("结账")])],1)],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"header"},[c("div",{staticClass:"info"},[t._v("商品信息")]),t._v(" "),c("div",{staticClass:"price"},[t._v("商品单价")]),t._v(" "),c("div",{staticClass:"num"},[t._v("商品数量")]),t._v(" "),c("div",{staticClass:"total"},[t._v("金额")]),t._v(" "),c("div",{staticClass:"delete"},[t._v("编辑")])])}]};var h=c("VU/8")(u,l,!1,function(t){c("9Ely")},"data-v-2c6db01b",null);e.default=h.exports},"9Ely":function(t,e){},Dd8w:function(t,e,c){"use strict";e.__esModule=!0;var s,a=c("woOf"),n=(s=a)&&s.__esModule?s:{default:s};e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var c=arguments[e];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s])}return t}},"R+k2":function(t,e){},R4wc:function(t,e,c){var s=c("kM2E");s(s.S+s.F,"Object",{assign:c("To3L")})},To3L:function(t,e,c){"use strict";var s=c("lktj"),a=c("1kS7"),n=c("NpIQ"),r=c("sB3e"),i=c("MU5D"),o=Object.assign;t.exports=!o||c("S82l")(function(){var t={},e={},c=Symbol(),s="abcdefghijklmnopqrst";return t[c]=7,s.split("").forEach(function(t){e[t]=t}),7!=o({},t)[c]||Object.keys(o({},e)).join("")!=s})?function(t,e){for(var c=r(t),o=arguments.length,d=1,u=a.f,l=n.f;o>d;)for(var h,v=i(arguments[d++]),k=u?s(v).concat(u(v)):s(v),p=k.length,f=0;p>f;)l.call(v,h=k[f++])&&(c[h]=v[h]);return c}:o},V3tA:function(t,e,c){c("R4wc"),t.exports=c("FeBl").Object.assign},woOf:function(t,e,c){t.exports={default:c("V3tA"),__esModule:!0}}});
//# sourceMappingURL=1.921d0e382051e1bf27bf.js.map