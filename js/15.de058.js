/*! Copyright ........ */
webpackJsonp([15],{460:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(6),f=a(u),s=n(75),p=n(114),d=n(468),m=a(d),b=n(466),y=(a(b),n(477)),h=(a(y),function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"logout",value:function(){(0,this.props.dispatch)((0,p.logoutFetch)(function(){location.replace("#home")}))}},{key:"render",value:function(){var e=this.props;e.dispatch,e.spin,e.data;return f.default.createElement("div",null,f.default.createElement(m.default,{tab1:"返回",title:"设置"}),f.default.createElement("div",null,f.default.createElement("div",{style:{height:15}}),f.default.createElement("div",{style:v.line},"实名认证"),f.default.createElement("div",{style:v.line},"手机认证"),f.default.createElement("div",{style:v.line},"绑定邮箱")),f.default.createElement("div",{style:v.btn,onClick:this.logout.bind(this)},"安全退出"))}}]),t}(u.Component)),v={line:{padding:"10px",marginBottom:"10px",backgroundColor:"#eee",color:"#787878"},btn:{textAlign:"center",backgroundColor:"#FF7460",lineHeight:"45px",margin:"10px",borderRadius:"25px",color:"#fff",fontSize:"16px"}};t.default=(0,s.connect)(i)(h)},466:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(113),f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("nav",{style:s.nav},c.default.createElement(u.Link,{to:"/home",activeClassName:"active",style:s.tab},c.default.createElement("span",null),"精选"),c.default.createElement(u.Link,{to:"/inverst",activeClassName:"active",style:s.tab},c.default.createElement("span",null),"投资"),c.default.createElement(u.Link,{to:"/asset",activeClassName:"active",style:s.tab},c.default.createElement("span",null),"资产"),c.default.createElement(u.Link,{to:"/me",activeClassName:"active",style:s.tab},c.default.createElement("span",null),"我"))}}]),t}(i.Component);t.default=f;var s={nav:{display:"flex",height:60,justifyContent:"space-between",borderTop:"1px solid #e1e1e1",fontSize:"14px",color:"#787878",backgroundColor:"#fff"},tab:{flex:1,textAlign:"center",lineHeight:"30px",textDecoration:"none"}}},468:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(113),f=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return l(t,e),o(t,[{key:"back",value:function(){this.props.tab1&&u.browserHistory.goBack()}},{key:"tab3Fn",value:function(){this.props.tab3Fn&&this.props.tab3Fn()}},{key:"render",value:function(){return c.default.createElement("div",{style:s.nav},c.default.createElement("a",{style:s.tab1,onClick:this.back.bind(this)},this.props.tab1?c.default.createElement("div",{className:"arrow-left"}):""),c.default.createElement("div",{style:s.tab2},this.props.title),c.default.createElement("div",{style:s.tab3,onClick:this.tab3Fn.bind(this)},this.props.tab3))}}]),t}(i.Component);t.default=f;var s={nav:{display:"flex",height:50,justifyContent:"space-between",borderBottom:"1px solid #e1e1e1",fontSize:"20px",color:"#fff",backgroundColor:"#FF7460"},tab1:{flex:1,lineHeight:"50px",textDecoration:"none",paddingLeft:10,fontSize:"18px"},tab2:{flex:1,textAlign:"center",lineHeight:"50px",textDecoration:"none",color:"#fff",backgroundColor:"#FF7460"},tab3:{flex:1,textAlign:"right",lineHeight:"48px",textDecoration:"none",paddingRight:10},back:{width:45,marginLeft:-15}}},477:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("login",n.props.login),n.state={},n}return l(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"me"},c.default.createElement("div",{className:"item"},this.props.login?c.default.createElement("div",{style:f.picLine},c.default.createElement("img",{src:"https://avatars0.githubusercontent.com/u/5726089",style:f.pic}),c.default.createElement("span",{style:f.name},"jay")):c.default.createElement("div",null,c.default.createElement("span",{className:"leftText",onClick:this.props.fnLogin},"马上登录")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",{className:"left"},c.default.createElement("div",{className:"icon icon0"}),c.default.createElement("div",{className:"leftText"},"我的优惠券")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null,"0"),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",null,c.default.createElement("span",{className:"icon icon1"}),c.default.createElement("span",{className:"leftText"},"我的资产")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null,"0.00"),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",null,c.default.createElement("span",{className:"icon icon2"}),c.default.createElement("span",{className:"leftText"},"我的消息")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",null,c.default.createElement("span",{className:"icon icon3"}),c.default.createElement("span",{className:"leftText"},"推荐有奖")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null,"一个好友=22元"),c.default.createElement("span",{className:"arrow-right"}))))}}]),t}(i.Component);t.default=u;var f={picLine:{display:"flex",height:"3rem",alignItems:"center"},name:{marginLeft:"1rem"},nav:{backgroundColor:"#5B6AC1"},item1:{display:"flex",flex:1,padding:"10px 10px 10px 0",color:"#EDEEF8"},item11:{flex:1},item12:{fontSize:"1.5rem"},pic:{width:"35px",borderRadius:"100%",marginLeft:"10px"},item2:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#EDEEF8",padding:"20px 0"},item22:{marginTop:"15px"},item3:{display:"flex",justifyContent:"space-around",color:"#DADDF1",padding:"0 0 10px 0"},item33:{textAlign:"center",fontSize:"1rem",flex:1},item31:{textAlign:"center",fontSize:"1rem",flex:1},item32:{textAlign:"center",borderLeft:"1px solid #DADDF1",borderRight:"1px solid #DADDF1",padding:"0 1rem",fontSize:"1rem",flex:1},list:{marginTop:20},btn:{display:"flex",backgroundColor:"#fff",padding:"10px"},btnItem:{flex:1,display:"flex",justifyContent:"center",color:"#49A6ED",fontSize:"1.5rem"}}}});