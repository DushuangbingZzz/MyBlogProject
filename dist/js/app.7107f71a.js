(function(){"use strict";var t={5532:function(t,e,n){var a=n(6848),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("main",[e("router-view")],1),e("Footer")],1)},i=[],r=function(){var t=this,e=t._self._c;return e("header",[e("h1",[t._v("我的个人博客")]),e("nav",[e("router-link",{staticClass:"nav-link",attrs:{to:"/","exact-active-class":"active-link"}},[t._v("首页")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/resume","exact-active-class":"active-link"}},[t._v("简历")])],1)])},o=[],u={name:"Header"},l=u,c=n(1656),p=(0,c.A)(l,r,o,!1,null,"fca4959e",null),d=p.exports,f=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("footer",[e("p",[t._v("© 2022 Duppers 个人博客")])])}],g={name:"Footer"},h=g,v=(0,c.A)(h,f,m,!1,null,"72ba3fd8",null),A=v.exports,V={name:"App",components:{Header:d,Footer:A}},b=V,q=(0,c.A)(b,s,i,!1,null,null,null),y=q.exports,_=n(6178),C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[t._m(0),e("section",{staticClass:"latest-posts"},[e("h2",[t._v("最新文章")]),e("ul",t._l(t.data,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:`/blog/${n.id}`}},[t._v(t._s(n.title))]),e("p",{domProps:{innerHTML:t._s(n.content)}})],1)})),0)]),t._m(1)])},U=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("h1",[t._v("欢迎来到我的个人博客")]),e("p",[t._v("在这里，我会分享我的学习笔记、编程经验以及其他有趣的内容。感谢您的访问！")])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"about-me"},[e("h2",[t._v("关于我")]),e("p",[t._v("我是一个热爱编程和技术的开发者，喜欢分享我的学习心得和经验。欢迎通过下方的联系方式与我交流。")])])}],k=JSON.parse('{"Y":[{"id":"1","title":"动态数据的计算","author":{"name":"duppers","profilePicture":"/images/authors/zhangsan.png"},"date":"2024-09-01T10:00:00Z","content":"","tags":["Vue.js","前端开发","JavaScript"],"categories":["编程","技术"],"featuredImage":"/images/posts/vue-app.png","readTime":"5分钟"},{"id":"2","title":"理解 JavaScript 的异步编程","author":{"name":"李四","profilePicture":"/images/authors/lisi.png"},"date":"2024-09-03T15:30:00Z","content":"<p>异步编程是现代 JavaScript 开发中一个重要的概念...</p>","tags":["JavaScript","异步编程","Promise"],"categories":["编程","技术"],"featuredImage":"/images/posts/async-programming.png","readTime":"7分钟"}]}'),S={name:"Home",data(){return{data:k.Y}}},Q=S,w=(0,c.A)(Q,C,U,!1,null,"4200ba61",null),O=w.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"resume"},[e("section",{staticClass:"personal-info"},[e("h1",[t._v(t._s(t.data.personalInfo.name)+" "),e("p",[t._v(t._s(t.data.personalInfo.sex))])]),e("p",[t._v(t._s(t.data.personalInfo.title))]),e("p",[t._v(t._s(t.data.personalInfo.address))]),e("p",[t._v(t._s(t.data.personalInfo.email)+" | "+t._s(t.data.personalInfo.github)+" | "+t._s(t.data.personalInfo.phone))])]),e("section",{staticClass:"education"},[e("h2",[t._v("教育背景")]),e("ul",t._l(t.data.education,(function(n){return e("li",{key:n.id},[e("h3",[t._v(t._s(n.degree)+" - "+t._s(n.institution))]),e("p",[t._v(t._s(n.startDate)+" - "+t._s(n.endDate))]),e("p",[t._v(t._s(n.major))])])})),0)]),e("section",{staticClass:"work-experience"},[e("h2",[t._v("工作经验")]),e("ul",t._l(t.data.workExperience,(function(n){return e("li",{key:n.id},[e("h3",[t._v(t._s(n.location)+" - "+t._s(n.company))]),e("p",[t._v(t._s(n.start_date)+" - "+t._s(n.end_date))]),t._l(n.responsibilities,(function(n){return e("p",[e("span",[t._v(t._s(n))])])}))],2)})),0)]),e("section",{staticClass:"work-experience"},[e("h2",[t._v("项目经验")]),e("ul",t._l(t.data.projects,(function(n){return e("li",{key:n.id},[e("h3",[t._v(t._s(n.title)+" | "+t._s(n.role))]),t._l(n.technologies,(function(n){return e("span",[e("span",{staticClass:"tags"},[t._v(t._s(n))])])})),e("p",[t._v(t._s(n.description))])],2)})),0)]),e("section",{staticClass:"skills"},[e("h2",[t._v("技能")]),e("ul",t._l(t.data.skills,(function(n){return e("li",{key:n.id},[t._v(t._s(n))])})),0)])])},T=[],Z=JSON.parse('{"personalInfo":{"name":"杜双兵","sex":"男","title":"前端开发工程师","email":"17694882635@163.com","phone":"17694882635","address":"陕西省西安市高新区丈八北路","linkedin":"https://www.Duppers.com/in/dushuangbing","github":"https://gitee.com/duppers/"},"summary":"具有五年经验的前端开发工程师，精通 JavaScript 和现代前端框架（如 Vue 和 React），对用户体验和界面设计充满热情。擅长在高压环境下快速交付高质量的解决方案。","workExperience":[{"title":"高级前端开发工程师","company":"某某科技有限公司","location":"北京市","start_date":"2022-01","end_date":"现在","responsibilities":["领导前端开发团队，负责大型项目的架构设计和技术选型。","开发和维护高性能的用户界面和单页应用。","与产品经理和设计师紧密合作，确保交付符合用户需求的产品。"]},{"title":"前端开发工程师","company":"某某互联网公司","location":"上海市","start_date":"2019-06","end_date":"2021-12","responsibilities":["负责公司主要产品的前端开发工作。","优化现有代码，提升系统性能和用户体验。","参与代码评审和团队知识分享。"]}],"education":[{"degree":"本科","major":"软件工程","institution":"电子科技大学","graduation_year":2020,"startDate":2020.3,"endDate":2022.9},{"degree":"专科","major":"国际金融","institution":"天津滨海职业学院","graduation_year":2014,"startDate":2014.7,"endDate":2017.9}],"skills":["JavaScript","Vue.js","React","HTML/CSS","Webpack","Git"],"certifications":[{"name":"前端开发高级工程师认证","issued_by":"中国软件评测中心","date":"2022-03"}],"projects":[{"title":"在线商城系统","description":"一个功能全面的在线商城系统，包括用户管理、商品管理、订单处理等功能。","technologies":["Vue.js","Node.js","MongoDB"],"role":"前端开发工程师","link":"https://github.com/zhangsan/ecommerce-system"},{"title":"个人博客","description":"一个个人博客平台，支持文章发布、评论和标签功能。","technologies":["React","Express","MySQL"],"role":"项目负责人","link":"https://github.com/zhangsan/personal-blog"}]}'),x={name:"Resume",data(){return{data:Z}}},D=x,F=(0,c.A)(D,P,T,!1,null,"03a45f04",null),I=F.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.article.title))]),e("p",[e("span",[t._v(t._s(t.article.author.name))])]),e("p",{domProps:{innerHTML:t._s(t.article.content)}})])},N=[],j="data:image/jpeg;base64,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",z={name:"BlogPost",data(){return{article:{}}},mounted(){this.loadArticle()},methods:{loadArticle(){const t=this.$route.params.id,e=k.Y.find((e=>e.id===t));this.article=e||{id:t,title:"文章未找到",content:"文章未找到",author:{name:"未知",avatar:j}}}}},W=z,G=(0,c.A)(W,L,N,!1,null,"6d257b26",null),M=G.exports;a.Ay.use(_.Ay);var K=new _.Ay({mode:"history",routes:[{path:"/",name:"Home",component:O},{path:"/resume",name:"Resume",component:I},{path:"/blog/:id",name:"BlogPost",component:M,props:!0}]});a.Ay.config.productionTip=!1,new a.Ay({router:K,render:t=>t(y)}).$mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,i){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],s=t[c][1],i=t[c][2];for(var o=!0,u=0;u<a.length;u++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(o=!1,i<r&&(r=i));if(o){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[a,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,i,r=a[0],o=a[1],u=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(u)var c=u(n)}for(e&&e(a);l<r.length;l++)i=r[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},a=self["webpackChunkmyblog"]=self["webpackChunkmyblog"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(5532)}));a=n.O(a)})();
//# sourceMappingURL=app.7107f71a.js.map