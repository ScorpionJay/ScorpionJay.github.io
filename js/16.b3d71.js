/*! Copyright ........ */
webpackJsonp([16],{455:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{login:e.login.login}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(6),u=a(s),f=n(75),d=n(114),m=n(113),p=n(468),b=a(p),h=n(466),v=(a(h),n(477)),E=(a(v),function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"logout",value:function(){(0,this.props.dispatch)((0,d.logoutFetch)(function(){m.browserHistory.push("/")}))}},{key:"render",value:function(){var e=this.props;e.dispatch,e.spin,e.data;return u.default.createElement("div",{className:"root"},u.default.createElement(b.default,{tab1:"返回",title:"更多"}),u.default.createElement("div",{style:{display:"flex",flexDirection:"column",overflowY:"auto",flex:1,height:"100%",overflowX:"hidden"},className:"touch more"},u.default.createElement(m.Link,{className:"item",to:"guide"},u.default.createElement("div",{className:"left"},u.default.createElement("div",{className:"icon icon0"}),u.default.createElement("div",{className:"text"},"新手指引")),u.default.createElement("div",{className:"arrow-right"})),u.default.createElement(m.Link,{className:"item",to:"safe"},u.default.createElement("div",{className:"left"},u.default.createElement("div",{className:"icon icon6"}),u.default.createElement("div",{className:"text"},"安全保障")),u.default.createElement("div",{className:"arrow-right"})),u.default.createElement(m.Link,{className:"item",to:"faq"},u.default.createElement("div",{className:"left"},u.default.createElement("div",{className:"icon icon2"}),u.default.createElement("div",{className:"text"},"帮助中心")),u.default.createElement("div",{className:"arrow-right"})),u.default.createElement("a",{href:"tel:123456789",className:"item"},u.default.createElement("div",{className:"left"},u.default.createElement("div",{className:"icon icon3"}),u.default.createElement("div",{className:"text"},"客服电话")),u.default.createElement("div",{className:"tel"},"123456789")),u.default.createElement("div",{className:"item"},u.default.createElement("div",{className:"left"},u.default.createElement("div",{className:"icon icon5"}),u.default.createElement("div",{className:"text"},"意见反馈")),u.default.createElement("div",{className:"arrow-right"})),this.props.login?u.default.createElement("div",{className:"btn",onClick:this.logout.bind(this)},"退出"):u.default.createElement("div",{className:"btn",onClick:function(){m.browserHistory.push("login")}},"登录")))}}]),t}(s.Component));t.default=(0,f.connect)(i)(E)},466:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(113),u=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("nav",{style:f.nav},c.default.createElement(s.Link,{to:"/home",activeClassName:"active",style:f.tab},c.default.createElement("span",null),"精选"),c.default.createElement(s.Link,{to:"/inverst",activeClassName:"active",style:f.tab},c.default.createElement("span",null),"投资"),c.default.createElement(s.Link,{to:"/asset",activeClassName:"active",style:f.tab},c.default.createElement("span",null),"资产"),c.default.createElement(s.Link,{to:"/me",activeClassName:"active",style:f.tab},c.default.createElement("span",null),"我"))}}]),t}(i.Component);t.default=u;var f={nav:{display:"flex",height:60,justifyContent:"space-between",borderTop:"1px solid #e1e1e1",fontSize:"14px",color:"#787878",backgroundColor:"#fff"},tab:{flex:1,textAlign:"center",lineHeight:"30px",textDecoration:"none"}}},468:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(113),u=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return r(t,e),o(t,[{key:"back",value:function(){this.props.tab1&&s.browserHistory.goBack()}},{key:"tab3Fn",value:function(){this.props.tab3Fn&&this.props.tab3Fn()}},{key:"render",value:function(){return c.default.createElement("div",{style:f.nav},c.default.createElement("a",{style:f.tab1,onClick:this.back.bind(this)},this.props.tab1?c.default.createElement("div",{className:"arrow-left"}):""),c.default.createElement("div",{style:f.tab2},this.props.title),c.default.createElement("div",{style:f.tab3,onClick:this.tab3Fn.bind(this)},this.props.tab3))}}]),t}(i.Component);t.default=u;var f={nav:{display:"flex",height:50,justifyContent:"space-between",borderBottom:"1px solid #e1e1e1",fontSize:"20px",color:"#fff",backgroundColor:"#FF7460"},tab1:{flex:1,lineHeight:"50px",textDecoration:"none",paddingLeft:10,fontSize:"18px"},tab2:{flex:1,textAlign:"center",lineHeight:"50px",textDecoration:"none",color:"#fff",backgroundColor:"#FF7460"},tab3:{flex:1,textAlign:"right",lineHeight:"48px",textDecoration:"none",paddingRight:10},back:{width:45,marginLeft:-15}}},477:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("login",n.props.login),n.state={},n}return r(t,e),o(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"me"},c.default.createElement("div",{className:"item"},this.props.login?c.default.createElement("div",{style:u.picLine},c.default.createElement("img",{src:"https://avatars0.githubusercontent.com/u/5726089",style:u.pic}),c.default.createElement("span",{style:u.name},"jay")):c.default.createElement("div",null,c.default.createElement("span",{className:"leftText",onClick:this.props.fnLogin},"马上登录")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",{className:"left"},c.default.createElement("div",{className:"icon icon0"}),c.default.createElement("div",{className:"leftText"},"我的优惠券")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null,"0"),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",null,c.default.createElement("span",{className:"icon icon1"}),c.default.createElement("span",{className:"leftText"},"我的资产")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null,"0.00"),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",null,c.default.createElement("span",{className:"icon icon2"}),c.default.createElement("span",{className:"leftText"},"我的消息")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null),c.default.createElement("span",{className:"arrow-right"}))),c.default.createElement("div",{className:"item"},c.default.createElement("div",null,c.default.createElement("span",{className:"icon icon3"}),c.default.createElement("span",{className:"leftText"},"推荐有奖")),c.default.createElement("div",{className:"right"},c.default.createElement("span",null,"一个好友=22元"),c.default.createElement("span",{className:"arrow-right"}))))}}]),t}(i.Component);t.default=s;var u={picLine:{display:"flex",height:"3rem",alignItems:"center"},name:{marginLeft:"1rem"},nav:{backgroundColor:"#5B6AC1"},item1:{display:"flex",flex:1,padding:"10px 10px 10px 0",color:"#EDEEF8"},item11:{flex:1},item12:{fontSize:"1.5rem"},pic:{width:"35px",borderRadius:"100%",marginLeft:"10px"},item2:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#EDEEF8",padding:"20px 0"},item22:{marginTop:"15px"},item3:{display:"flex",justifyContent:"space-around",color:"#DADDF1",padding:"0 0 10px 0"},item33:{textAlign:"center",fontSize:"1rem",flex:1},item31:{textAlign:"center",fontSize:"1rem",flex:1},item32:{textAlign:"center",borderLeft:"1px solid #DADDF1",borderRight:"1px solid #DADDF1",padding:"0 1rem",fontSize:"1rem",flex:1},list:{marginTop:20},btn:{display:"flex",backgroundColor:"#fff",padding:"10px"},btnItem:{flex:1,display:"flex",justifyContent:"center",color:"#49A6ED",fontSize:"1.5rem"}}}});