(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{283:function(t,r,o){var content=o(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("8bd027e4",content,!0,{sourceMap:!1})},304:function(t,r,o){"use strict";o(283)},305:function(t,r,o){var e=o(35)(!1);e.push([t.i,'body[data-v-6a224aa2]{font-size:.875rem}body[data-v-6a224aa2],html[data-v-6a224aa2]{font-family:arial,"Microsoft JhengHei","微軟正黑體",sans-serif!important;margin:0}[role=main][data-v-6a224aa2]{padding-top:70px}@media(max-width:768px){[role=main][data-v-6a224aa2]{padding-top:75px}}.layout-enter-active[data-v-6a224aa2],.layout-leave-active[data-v-6a224aa2]{transition:opacity .5s}.layout-enter[data-v-6a224aa2],.layout-leave-active[data-v-6a224aa2]{opacity:0}.swiper-bg>div[data-v-6a224aa2]{background:rgba(0,0,0,.01);border:1px solid #aaa}.card-shadow[data-v-6a224aa2]{border-radius:10px;box-shadow:5px 5px 5px rgba(227,219,208,.7)}.card-shadow .card-bg[data-v-6a224aa2]{border-radius:10px 10px 0 0;background:#fff}.card-shadow .card-bg-bottom[data-v-6a224aa2]{border-radius:0 0 10px 10px;background:#fff}.container[data-v-6a224aa2]{margin:3rem auto 10rem}.container .row[data-v-6a224aa2]{margin:0 auto;display:flex;max-width:880px;justify-content:center}.container .row .img-box[data-v-6a224aa2]{width:20rem;height:20rem}.container .row .img-box img[data-v-6a224aa2]{width:100%;height:100%}.container .row .product-box[data-v-6a224aa2]{width:40vw}.container .row .product-box h4[data-v-6a224aa2]{font-size:24px}.container .row .product-box .badge[data-v-6a224aa2]{padding:3px 5px;border-radius:5px;text-decoration:none;color:#000}.container .row .product-box .badge-warning[data-v-6a224aa2]{background:#ffc107}.container .row .product-box .badge-info[data-v-6a224aa2]{background:#aaa}.container .row .product-box .badge-secondary[data-v-6a224aa2]{background:#ced3d3}.container .row .product-box .badge-success[data-v-6a224aa2]{color:#fff;background-color:#28a745}.container .row .product-box .text-right[data-v-6a224aa2]{text-align:right}.container .row .product-box .price[data-v-6a224aa2]{font-size:30px;color:red;font-weight:600}.container .row .product-box .box1[data-v-6a224aa2]{display:flex;justify-content:space-between}.container .row .product-box .box1 i[data-v-6a224aa2]{color:red}.container .row .product-box .btn-box[data-v-6a224aa2]{display:flex;justify-content:space-between}select[data-v-6a224aa2]{width:100%;height:30px;font-size:16px;margin-top:5px;border:1px solid #ced4da;border-radius:5px}button[data-v-6a224aa2]{margin-top:10px;background-color:#f9cd25;border:none;border-radius:5px;box-shadow:2px 2px 2px 1px rgba(0,0,0,.2);padding:5px 15px}button[data-v-6a224aa2]:hover{cursor:pointer}.box-red[data-v-6a224aa2]{color:#fff;background-color:#dc3545}@media(max-width:568px){.swiper-like-rwd[data-v-6a224aa2]{display:none}.container .row[data-v-6a224aa2]{flex-direction:column;align-items:center}.container .row .product-box[data-v-6a224aa2]{width:95vw}}',""]),t.exports=e},338:function(t,r,o){"use strict";o.r(r);o(54),o(23);var e={components:{},data:function(){return{product:{stock:""},productId:"",productIdS:"",quantity:1,smallImg:"",bigImg:"",products:[]}},methods:{getProduct:function(t){var r=this,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("hans","/product/").concat(t);r.$store.dispatch("updateLoading",!0),r.$axios.get(o).then((function(t){r.product=t.data.product}));var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("hans","/products/all");r.$axios.get(e).then((function(t){r.products=t.data.products,r.$store.dispatch("updateLoading",!1)}))},addtoCartMerge:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("carts/addtoCartMerge",{id:t,qty:r})},addFavorite:function(t){this.$store.dispatch("favorite/addFavorite",t)},removeFavorite:function(t){this.$store.dispatch("favorite/removefavorite",t)},getfavorite:function(){this.$store.dispatch("favorite/getfavorite")},badgeSearch:function(t){var r=t.target.firstChild.nodeValue;this.$nuxt.$router.push({name:"ProductsSearch",query:{sch:"Search",Str:r}}),this.$nuxt.$emit("search")},goCheckOuter:function(t,r){this.addtoCartMerge(t,r),this.$router.push("/front/checkout"),this.$nuxt.$emit("refreshCheckOut")}},computed:{filterdata:function(){var t=this;return t.products.filter((function(r,i){if(r.category===t.product.category)return t.product.id!==r.id}))},loadingItem:function(){return this.$store.state.loadingItem},favoriteId:function(){var t=this.$route.query.productId,r=this.$store.state.favorite.myfavorite;for(var o in r)if(r[o].id===t)return!0}},mounted:function(){},created:function(){var t=this;t.productId=t.$route.query.productId,t.getProduct(t.productId),t.$nuxt.$on("refreshDetail",(function(r){t.getProduct(r)})),t.getfavorite()}},c=(o(304),o(8)),component=Object(c.a)(e,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("div",{staticClass:"container mt-5"},[o("no-ssr",[o("div",{staticClass:"row"},[o("div",{staticClass:"img-box my-5 text-center"},[o("img",{attrs:{src:t.product.imageUrl,alt:""}})]),t._v(" "),o("div",{staticClass:"product-box"},[o("h4",[t._v(t._s(t.product.title))]),t._v(" "),o("div",{staticClass:"box1"},[o("h5",{staticClass:"text-dark"},[t._v(t._s(t.product.spec)+" "+t._s(t.product.content))]),t._v(" "),o("a",{attrs:{href:"#"}},[t.favoriteId?o("i",{staticClass:"fas fa-heart text-danger",staticStyle:{"font-size":"20px"},on:{click:function(r){return r.preventDefault(),t.removeFavorite(t.product)}}}):o("i",{staticClass:"far fa-heart text-danger",staticStyle:{"font-size":"20px"},on:{click:function(r){return r.preventDefault(),t.addFavorite(t.product)}}})])]),t._v(" "),o("a",{directives:[{name:"show",rawName:"v-show",value:t.product.brand,expression:"product.brand "}],staticClass:"badge badge-warning ml-2",attrs:{href:"#"},on:{click:t.badgeSearch}},[t._v(t._s(t.product.brand))]),t._v(" "),o("a",{directives:[{name:"show",rawName:"v-show",value:t.product.category,expression:"product.category"}],staticClass:"badge badge-info ml-2",attrs:{href:"#"},on:{click:t.badgeSearch}},[t._v(t._s(t.product.category))]),t._v(" "),o("a",{directives:[{name:"show",rawName:"v-show",value:t.product.content,expression:"product.content"}],staticClass:"badge badge-secondary ml-2",attrs:{href:"#"},on:{click:t.badgeSearch}},[t._v(t._s(t.product.content))]),t._v(" "),o("a",{directives:[{name:"show",rawName:"v-show",value:t.product.spec,expression:"product.spec"}],staticClass:"badge badge-success ml-2",attrs:{href:"#"},on:{click:t.badgeSearch}},[t._v(t._s(t.product.spec))]),t._v(" "),t.product.origin_price?o("div",{staticClass:"text-right"},[o("del",[t._v(t._s(t._f("currency")(t.product.origin_price*t.quantity))+" 元")])]):t._e(),t._v(" "),t.product.price?o("div",{staticClass:"price text-right"},[t._v(t._s(t._f("currency")(t.product.price*t.quantity))+" 元")]):t._e(),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"text-left text-l"},[t._v("購買數量")]),t._v(" "),t.product.stock>5?o("div",{staticClass:"h6 text-right"},[t._v("庫存："+t._s(t.product.stock)+" 件")]):t._e(),t._v(" "),t.product.stock<5?o("div",{staticClass:"h6 text-right text-danger"},[t._v("只剩最後 "+t._s(t.product.stock)+" 件")]):t._e(),t._v(" "),0===t.product.stock?o("div",{staticClass:"h6 text-right text-danger"},[t._v("補貨中")]):t._e(),t._v(" "),0!=t.product.stock?o("select",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{name:""},on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.quantity=r.target.multiple?o:o[0]}}},t._l(Number(t.product.stock),(function(r){return o("option",{key:r,domProps:{value:r}},[t._v("選購 "+t._s(r)+" "+t._s(t.product.unit))])})),0):t._e(),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"btn-box"},[o("button",{attrs:{type:"button"},on:{click:function(r){return t.addtoCartMerge(t.product.id,t.quantity)}}},[t.product.id===t.loadingItem?o("i",{staticClass:"fas fa-spinner fa-pulse"}):o("i",{staticClass:"fas fa-cart-plus"}),t._v("\n            加到購物車\n          ")]),t._v(" "),o("button",{staticClass:"box-red",attrs:{type:"button"},on:{click:function(r){return t.goCheckOuter(t.product.id,t.quantity)}}},[t.product.id===t.loadingItem?o("i",{staticClass:"fas fa-spinner fa-pulse"}):o("i",{staticClass:"fas fa-shopping-bag"}),t._v("\n            立即結帳\n          ")])]),t._v(" "),o("hr",{staticClass:"mt-5"}),t._v(" "),o("div",[o("li",[t._v(t._s(t.product.description))])])])])])],1)])}),[],!1,null,"6a224aa2",null);r.default=component.exports}}]);