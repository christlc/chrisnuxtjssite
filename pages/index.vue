<template>
  <section>
    <section 
      class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <p>
                👋 Hi, I'm
              </p>
              <p class="title">
                Chris Choy.
              </p>
              <p class="subtitle">
                I'm a Data Scientist. 
              </p>
            </div>
            <div class="column mycenter">
              <p class="subtitle">
                What People think I'm 😂
              </p>
              <no-ssr>
                <p class="title">
                  <vue-typer :text="['Data Janitor', 'Go Player', 'Big Data Reader', 'Excel Master', 'MatheMagician', 'Gantt Charter', 'Fortune Teller']" />
                </p>
              </no-ssr>
            </div>
            

          </div>
      </div></div>
    </section>
    
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
 if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}
export default {
  components: {
    Logo, VueTyper
  }
}
</script>

<style>
.vue-typer .typed{
  color: white;
}
.mycenter {

}

</style>
