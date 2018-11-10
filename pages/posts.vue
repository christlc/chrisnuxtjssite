<template>
  <section>
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
    <section class="container">
    
      <div> 
        <div 
          v-for="item in postList" 
          :key="item.title">
          
          <div class="card-content">
            <nuxt-link 
              :to="item.link">
              
              <p class="title title-link">
                {{ item.title }}
            </p></nuxt-link>
            <p class="subtitle">
              {{ new Date(item.date).toLocaleDateString() }}
            </p>
            <p class="subtitle">
              <span 
                v-for="(tag,i) in item.tags" 
                :key="i" 
                class="tag is-info mytag">
                {{ tag }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
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
      for (let i in files.reverse()) {
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

<style scoped>
.mytag {
  margin-right: 5px;
}
.title-link {
    cursor: pointer;
}
.title-link:hover{
    color: #3273dc;
}
</style>