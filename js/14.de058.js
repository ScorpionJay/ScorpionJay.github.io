/*! Copyright ........ */
webpackJsonp([14],{452:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{data:e.inverst.inverstItem}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(6),u=r(f),d=n(75),s=n(172),p=n(468),m=r(p),y=n(466),b=(r(y),n(492)),g=r(b),h=n(491),v=r(h),x=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={id:n.props.params.id},n}return a(t,e),c(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)((0,s.inverstItemApi)(this.props.params.id))}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.spin,e.data);return console.log(t),u.default.createElement("div",{className:"root"},u.default.createElement(m.default,{tab1:"返回",title:t.productType}),u.default.createElement("div",{style:{display:"flex",flexDirection:"column",overflowY:"auto",flex:1,height:"100%",overflowX:"hidden",overflowScrolling:"touch"},className:"touch"},"活期宝"===this.props.params.id?u.default.createElement(v.default,{data:t}):u.default.createElement(g.default,{data:t})))}}]),t}(f.Component);t.default=(0,d.connect)(l)(x)},466:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(l),f=n(113),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("nav",{style:d.nav},c.default.createElement(f.Link,{to:"/home",activeClassName:"active",style:d.tab},c.default.createElement("span",null),"精选"),c.default.createElement(f.Link,{to:"/inverst",activeClassName:"active",style:d.tab},c.default.createElement("span",null),"投资"),c.default.createElement(f.Link,{to:"/asset",activeClassName:"active",style:d.tab},c.default.createElement("span",null),"资产"),c.default.createElement(f.Link,{to:"/me",activeClassName:"active",style:d.tab},c.default.createElement("span",null),"我"))}}]),t}(l.Component);t.default=u;var d={nav:{display:"flex",height:60,justifyContent:"space-between",borderTop:"1px solid #e1e1e1",fontSize:"14px",color:"#787878",backgroundColor:"#fff"},tab:{flex:1,textAlign:"center",lineHeight:"30px",textDecoration:"none"}}},468:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),c=function(e){return e&&e.__esModule?e:{default:e}}(l),f=n(113),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return i(t,e),a(t,[{key:"back",value:function(){this.props.tab1&&f.browserHistory.goBack()}},{key:"tab3Fn",value:function(){this.props.tab3Fn&&this.props.tab3Fn()}},{key:"render",value:function(){return c.default.createElement("div",{style:d.nav},c.default.createElement("a",{style:d.tab1,onClick:this.back.bind(this)},this.props.tab1?c.default.createElement("div",{className:"arrow-left"}):""),c.default.createElement("div",{style:d.tab2},this.props.title),c.default.createElement("div",{style:d.tab3,onClick:this.tab3Fn.bind(this)},this.props.tab3))}}]),t}(l.Component);t.default=u;var d={nav:{display:"flex",height:50,justifyContent:"space-between",borderBottom:"1px solid #e1e1e1",fontSize:"20px",color:"#fff",backgroundColor:"#FF7460"},tab1:{flex:1,lineHeight:"50px",textDecoration:"none",paddingLeft:10,fontSize:"18px"},tab2:{flex:1,textAlign:"center",lineHeight:"50px",textDecoration:"none",color:"#fff",backgroundColor:"#FF7460"},tab3:{flex:1,textAlign:"right",lineHeight:"48px",textDecoration:"none",paddingRight:10},back:{width:45,marginLeft:-15}}},491:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(6),u=function(e){return e&&e.__esModule?e:{default:e}}(f),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props.data;e.displayName,e.code,e.groupInfo,e.interestRateDisplay,e.extInvestPeriodDisplay,e.extCurrentPrice,e.id,e.extCollectionModeDisplay;return u.default.createElement("div",{style:s.container},u.default.createElement("div",{style:s.top},u.default.createElement("div",{style:s.rate},"8.00",u.default.createElement("i",{style:{fontSize:"1.5rem"}},"%")),u.default.createElement("div",{style:s.rateText},"预期年化收益")),u.default.createElement("div",{style:s.second},u.default.createElement("div",{style:s.secondItem},u.default.createElement("div",{style:s.icon1}),u.default.createElement("div",null,"期限10天")),u.default.createElement("div",{style:s.secondItem2},u.default.createElement("div",{style:s.icon2}),u.default.createElement("div",null,"体验金专享")),u.default.createElement("div",{style:s.secondItem},u.default.createElement("div",{style:s.icon3}),u.default.createElement("div",null,"收益复投"))),u.default.createElement("div",{style:s.third},u.default.createElement("div",{style:s.thirdItem},u.default.createElement("div",{style:s.thirdItemLeft},"起息日期"),u.default.createElement("div",{style:s.thirdItemRight},"2017-01-22")),u.default.createElement("div",{style:s.thirdItem},u.default.createElement("div",{style:s.thirdItemLeft},"收益发放"),u.default.createElement("div",{style:s.thirdItemRight},"2017-01-22")),u.default.createElement("div",{style:s.thirdItem},u.default.createElement("div",{style:s.thirdItemLeft},"可用体验金"),u.default.createElement("div",{style:s.thirdItemRight},"1000元")),u.default.createElement("div",{style:s.thirdItem},u.default.createElement("div",{style:s.thirdItemLeft},"预期总收益"),u.default.createElement("div",{style:s.thirdItemRight},"22.36元"))),u.default.createElement("div",{style:s.buyBtn},"立即购买"))}}]),t}(f.Component);t.default=d;var s={container:{height:"100%",flex:1,flexDirection:"column",display:"flex"},top:{backgroundColor:"#fff",padding:"3rem 1rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"4rem"},rate:{color:"#FF7561",fontSize:"3.5rem"},rateText:{fontSize:"1.2rem",marginTop:"1.2rem",color:"#aaa"},second:{display:"flex",justifyContent:"space-between",padding:"2rem",backgroundColor:"#fff",marginTop:"1rem"},secondItem:{backgroundColor:"#fff",display:"flex",flexDirection:"column",alignItems:"center"},secondItem2:{backgroundColor:"#fff",display:"flex",flexDirection:"column",alignItems:"center",borderLeft:"1px solid #e1e1e1",borderRight:"1px solid #e1e1e1",paddingLeft:"2rem",paddingRight:"2rem"},icon1:{backgroundImage:"url(../images/features_xsb.png)",backgroundPosition:"center 0px",backgroundRepeat:"no-repeat",backgroundSize:"30px auto",width:"30px",height:"30px",marginBottom:"1rem"},icon2:(l={backgroundImage:"url(../images/features_xsb.png)",backgroundPosition:"center 0px",backgroundRepeat:"no-repeat",backgroundSize:"30px auto",width:"30px",height:"30px"},r(l,"backgroundPosition","center -30px"),r(l,"marginBottom","1rem"),l),icon3:{backgroundImage:"url(../images/features_xsb.png)",backgroundPosition:"center -60px",backgroundRepeat:"no-repeat",backgroundSize:"30px auto",width:"30px",height:"30px",marginBottom:"1rem"},third:{marginTop:"1rem",backgroundColor:"#fff",padding:"0 1rem"},thirdItem:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #e1e1e1",padding:"1rem 0"},thirdItemLeft:{color:"#333",fontSize:"1rem"},thirdItemRight:{color:"#333",fontSize:"1rem"},buyBtn:{marginTop:"1rem",backgroundColor:"#fd6b56",color:"#fff",padding:".8rem 0",textAlign:"center",fontSize:"1rem"},Item:{padding:"20px 30px 10px 30px",backgroundColor:"#fff",margin:"0 0 15px 0",display:"flex",flexDirection:"column"},con:{display:"flex",marginTop:"1.1rem",alignItems:"center"},con1:{flex:1},displayName:{color:"#fff",fontSize:"0.8rem"},groupInfo:{color:"#fff",backgroundColor:"#91a7ff",display:"inline-table",padding:"2px 4px",fontSize:"0.5rem",marginTop:"0.5rem"},text:{color:"#B4BCE8",fontSize:"0.8rem",marginTop:"0.5rem"},extInvest:{color:"#fff",fontSize:"0.8rem",marginTop:"0.5rem"},extCurrentPrice:{color:"#B4BCE8",fontSize:"0.8rem",marginTop:"0.9rem"},inverstBtn:{textAlign:"center",padding:15,backgroundColor:"#FC7946",color:"#fff"}}},492:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(6),u=function(e){return e&&e.__esModule?e:{default:e}}(f),d=n(113),s=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"buy",value:function(){console.log(this.props.data),d.browserHistory.push("/buy/"+this.props.data.id)}},{key:"render",value:function(){var e=this.props.data;e.displayName,e.code,e.groupInfo,e.interestRateDisplay,e.extInvestPeriodDisplay,e.extCurrentPrice,e.id,e.extCollectionModeDisplay;return u.default.createElement("div",{style:p.container},u.default.createElement("div",{style:p.top},u.default.createElement("div",{style:p.rate},"8.00",u.default.createElement("i",{style:{fontSize:"1.5rem"}},"%")),u.default.createElement("div",{style:p.rateText},"预期年化收益")),u.default.createElement("div",{style:p.second},u.default.createElement("div",{style:p.secondItem},u.default.createElement("div",{style:p.icon1}),u.default.createElement("div",null,"期限10天")),u.default.createElement("div",{style:p.secondItem2},u.default.createElement("div",{style:p.icon2}),u.default.createElement("div",null,"体验金专享")),u.default.createElement("div",{style:p.secondItem},u.default.createElement("div",{style:p.icon3}),u.default.createElement("div",null,"收益复投"))),u.default.createElement("div",{style:p.third},u.default.createElement("div",{style:p.thirdItem},u.default.createElement("div",{style:p.thirdItemLeft},"起息日期"),u.default.createElement("div",{style:p.thirdItemRight},"2017-01-22")),u.default.createElement("div",{style:p.thirdItem},u.default.createElement("div",{style:p.thirdItemLeft},"收益发放"),u.default.createElement("div",{style:p.thirdItemRight},"2017-01-22")),u.default.createElement("div",{style:p.thirdItem},u.default.createElement("div",{style:p.thirdItemLeft},"可用体验金"),u.default.createElement("div",{style:p.thirdItemRight},"1000元")),u.default.createElement("div",{style:p.thirdItem},u.default.createElement("div",{style:p.thirdItemLeft},"预期总收益"),u.default.createElement("div",{style:p.thirdItemRight},"22.36元"))),u.default.createElement("div",{style:p.buyBtn,onClick:this.buy.bind(this)},"立即购买"))}}]),t}(f.Component);t.default=s;var p={container:{height:"100%",flex:1,flexDirection:"column",display:"flex"},top:{backgroundColor:"#fff",padding:"3rem 1rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"4rem"},rate:{color:"#FF7561",fontSize:"3.5rem"},rateText:{fontSize:"1.2rem",marginTop:"1.2rem",color:"#aaa"},second:{display:"flex",justifyContent:"space-between",padding:"2rem",backgroundColor:"#fff",marginTop:"1rem"},secondItem:{backgroundColor:"#fff",display:"flex",flexDirection:"column",alignItems:"center"},secondItem2:{backgroundColor:"#fff",display:"flex",flexDirection:"column",alignItems:"center",borderLeft:"1px solid #e1e1e1",borderRight:"1px solid #e1e1e1",paddingLeft:"2rem",paddingRight:"2rem"},icon1:{backgroundImage:"url(../images/features_xsb.png)",backgroundPosition:"center 0px",backgroundRepeat:"no-repeat",backgroundSize:"30px auto",width:"30px",height:"30px",marginBottom:"1rem"},icon2:(l={backgroundImage:"url(../images/features_xsb.png)",backgroundPosition:"center 0px",backgroundRepeat:"no-repeat",backgroundSize:"30px auto",width:"30px",height:"30px"},r(l,"backgroundPosition","center -30px"),r(l,"marginBottom","1rem"),l),icon3:{backgroundImage:"url(../images/features_xsb.png)",backgroundPosition:"center -60px",backgroundRepeat:"no-repeat",backgroundSize:"30px auto",width:"30px",height:"30px",marginBottom:"1rem"},third:{marginTop:"1rem",backgroundColor:"#fff",padding:"0 1rem"},thirdItem:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #e1e1e1",padding:"1rem 0"},thirdItemLeft:{color:"#333",fontSize:"1rem"},thirdItemRight:{color:"#333",fontSize:"1rem"},buyBtn:{marginTop:"1rem",backgroundColor:"#fd6b56",color:"#fff",padding:".8rem 0",textAlign:"center",fontSize:"1rem"},Item:{padding:"20px 30px 10px 30px",backgroundColor:"#fff",margin:"0 0 15px 0",display:"flex",flexDirection:"column"},con:{display:"flex",marginTop:"1.1rem",alignItems:"center"},con1:{flex:1},displayName:{color:"#fff",fontSize:"0.8rem"},groupInfo:{color:"#fff",backgroundColor:"#91a7ff",display:"inline-table",padding:"2px 4px",fontSize:"0.5rem",marginTop:"0.5rem"},text:{color:"#B4BCE8",fontSize:"0.8rem",marginTop:"0.5rem"},extInvest:{color:"#fff",fontSize:"0.8rem",marginTop:"0.5rem"},extCurrentPrice:{color:"#B4BCE8",fontSize:"0.8rem",marginTop:"0.9rem"},inverstBtn:{textAlign:"center",padding:15,backgroundColor:"#FC7946",color:"#fff"}}}});