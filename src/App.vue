<template>
  <div id="app">
    <p class="navBar">
      <router-link to="/home">最新新闻</router-link>
      <router-link to="/history">历史消息</router-link>
      <router-link to="/user">我的</router-link>
    </p>
    <transition>
      <router-view></router-view>
    </transition>
    <router-view name="a"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isActive: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.navBar {
  width: 100%;
  height: 20px;
  font-size: 16px;
}
.navBar a {
  float: left;
  text-decoration: none;
  width: 33%;
  text-align: center;
  color: #333;
}
.navBar a:hover, .router-link-active {
  color: blue !important;
  border-bottom: 1px solid blue;
}
</style>
