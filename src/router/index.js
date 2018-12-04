import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

let router = new VueRouter({
  routes:[
    {

    }
  ]
})
// 注册全局前置守卫
// 如果请求的是a/b, 判断是否已经登陆, 如果没有登陆, 自动跳转的登陆页面, 其它所有情况放行
/*let pathes=['/a','/b']
router.beforeEach((to,from,next)=>{
  //if(to.path === '/a' || to.path === '/b'){
  if(pathes.indexOf(to.path) >= 0){
    if(!Vue.store.state.user._id){
        next("/login")
    }else{
        next()
    }
  }else{
    next()
  }

})*/



export default router
