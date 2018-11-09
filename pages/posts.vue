<template>
  <section class="container">
    <div> 
      My repository of notes
      <div 
        v-for="item in postList" 
        :key="item.title">
        {{ item.title }}
        {{ item.tags }}
        <nuxt-link :to="item.link">Go</nuxt-link>
        {{ item.link }}
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
var context = require.context('~/static/dynamicMarkdownFiles/', true, /\.(md)$/);
var files=context.keys();

console.log(files);

const fm = require('front-matter')

export default {
  components: {
    Logo
  },
  async asyncData ({params}) {
      let result = []
      for (let i in files) {
        let x = files[i]
        let a = fm(context(x)).attributes
        a.link = '/dynamic/'+ x.substr(0, x.lastIndexOf('.')).substr(2,x.length)
        result.push(a)
      }

      return {
          postList: result
      }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>