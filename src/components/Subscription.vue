<template>
  <h3>我要订阅的新闻是：{{ title }}</h3>
</template>

<script>
export default {
  name: 'Subscription',
  data () {
    return {
      title: this.$route.params.title
    }
  }
}
</script>

<style scoped>

</style>
