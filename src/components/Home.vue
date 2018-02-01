<template>
  <div class="hello">
    <ul>
      <li v-for="item in list" :key="item.id" v-on:click="viewDetail">
        <p class="title">
          {{ item.id + "." + item.title +"(" + item.date + ")" }}
        </p>
        <router-link :to="{name:'Detail',params:{id:item.id,detailObj:item}}">
          <button class="viewBtn">查看详情</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      list: [
        {
          id: 1,
          title: '新闻标题1',
          date: '2018年1月29日',
          desc: '重大新闻1重大新闻1重大新闻1重大新闻1重大新闻1重大新闻1重大新闻1重大新闻1重大新闻1'
        },
        {
          id: 2,
          title: '新闻标题2',
          date: '2018年1月28日',
          desc: '重大新闻2重大新闻2重大新闻2重大新闻2重大新闻2重大新闻2重大新闻2重大新闻2重大新闻2'
        },
        {
          id: 3,
          title: '新闻标题3',
          date: '2018年1月27日',
          desc: '重大新闻3重大新闻3重大新闻3重大新闻3重大新闻3重大新闻3重大新闻3重大新闻3重大新闻3'
        },
        {
          id: 4,
          title: '新闻标题4',
          date: '2018年1月26日',
          desc: '重大新闻4重大新闻4重大新闻4重大新闻4重大新闻4重大新闻4重大新闻4重大新闻4重大新闻4'
        }
      ]
    }
  },
  methods: {
    viewDetail: function (e) {
      if (e.target.tagName === 'LI') {
        e.target.parentNode.style.background = 'transparent'
        e.target.parentNode.childNodes.forEach(function (item) {
          item.style.background = 'transparent'
        })
        e.target.style.background = 'red'
      } else {
        if (e.target.parentNode.tagName === 'P') {
          e.target.parentNode.parentNode.childNodes.forEach(function (item) {
            item.style.background = 'transparent'
          })
        }
        e.target.parentNode.style.background = 'red'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 100%;
  border: 1px solid blue;
  margin-bottom: 10px;
}
a {
  color: #42b983;
}
.title {
  float: left;
}
.viewBtn {
  float: right;
  margin-top: 15px;
}
</style>
