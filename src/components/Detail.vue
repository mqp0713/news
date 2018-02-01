<template>
  <transition name="slide">
    <div>
      <h5>我是组件传过来的新闻{{id}}{{detailObj}}</h5>
      <h1>{{obj.title}}</h1>
      <p>{{obj.date}}</p>
      <p>{{obj.desc}}</p>
      <router-link :to="{name: 'Subscription',params:{title:obj.title}}">
        <button>订阅</button>
      </router-link>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'detailObj'],
  data () {
    return {
      obj: this.$route.params.detailObj
    }
  }
}
</script>

<style scoped>
</style>
