<template>
  <div>
    <p>动态路由匹配 {{$route.params.id}}</p>
  </div>
</template>

<script>
// 当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
// 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。
// 不过，这也意味着组件的生命周期钩子不会再被调用。
// 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象
// 或使用 2.2 中引入的 beforeRouteUpdate 守卫
export default {
  name: 'Dynamic',
  // watch: {
  //   '$route' (to, from) {
  //   // 对路由变化作出响应

  //   }
  // }
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style scoped>
</style>
