<template>
  <section class="container">
    <section class="hero is-primary">
      <div 
        class="hero-body" 
        style="padding-top:50px;">
        <div class="container">
          <h1 class="title">
            My Set of Notes
          </h1>
        </div>
      </div>
    </section>
    <div class="card">
      <div class="card-content">
        <p class="title">
          “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
        </p>
        <p class="subtitle">
          Jeff Atwood
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            Share on <a href="#">Facebook</a>
          </span>
        </p>
      </footer>
    </div>
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
        a.link = '/post/'+ x.substr(0, x.lastIndexOf('.')).substr(2,x.length)
        result.push(a)
      }

      return {
          postList: result
      }
  }
}
</script>

<style>

</style>