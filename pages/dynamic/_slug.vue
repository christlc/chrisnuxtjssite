<template>

  <div :key="$route.params.slug">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ attributes.title }}            
          </h1>
          <h2 class="subtitle">
            {{ attributes.date.toLocaleDateString() }}
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div 
        class="contentWrapper content" 
        v-html="content"/>
    </div>
  </div>



</template>

<script>
const fm = require('front-matter')
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

export default {
  async asyncData ({params}) {
    const fileContent = await import(`~/static/dynamicMarkdownFiles/${params.slug}.md`)
    let res = fm(fileContent.default)
    console.log(res)
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    }
  }
}
</script>

<style>
</style>