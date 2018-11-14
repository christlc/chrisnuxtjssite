<template>
  <div>
    <section class="hero is-primary">
      <div 
        class="hero-body" 
        style="padding-top:50px;">
        <div class="container">
          <h1 class="title">
            About Me
          </h1>
        </div>
      </div>
    </section>
    <section class="section">

      <p class="container">
        I am a Data Scientist based in Hong Kong.
        My current project is building a solution to accelerate qualitative data analysis in UX research. 
        I have previously worked in BASF and Clutertech building data-driven solutions in automation, pricing, customer analytics and forecasting. 
      </p>
    </section>
    <section class="container">
      <div class="columns features">
        <transition
          appear 
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated tada"
        >

          <div class="column">
            <span class="icon" >
              <fa :icon="['fas','chart-line']" />
            </span>
            <div>
              R and Python programmer <br>
              Tableau and PowerBI Visualization <br>
            </div>
          </div>
        </transition>

        <transition
          appear 
          enter-active-class="delay-1s animated bounceInUp"
          leave-active-class="animated tada"
        >      

          <div class="column">
            <span class="icon" >
              <fa :icon="['fas','graduation-cap']" />
            </span>
            <div>
              DPhil in Statistics from Oxford <br>
              Self-taught Full-stack Developer
            </div>
          </div>
        </transition>
        <transition
          appear 
          enter-active-class="delay-2s animated bounceInRight"
          leave-active-class="animated tada"
        >    
          <div class="column">
            <span class="icon" >
              <fa :icon="['fas','users']" />
            </span>
            <div>
              Organizer of Hong Kong R User Group <br>
              Speaker of PyconHK conferences
            </div>
          </div>
        </transition>
      </div>
    </section>
    <section class="section">
      <p class="container">
        Please feel free to view my profile on <a href="https://linkedin.com/in/christlc">LinkedIn</a>.
      </p>
      <div class="container">
        <figure 
          class="image" 
          style="width:130px;margin:auto;">
          <img src="chris.jpg">
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.features {
    text-align: center;
    color: #6d6d6d;
    font-size: 0.9em;
}

.features .icon {
    margin: auto;
    margin-bottom: 10px;
    width: 50%;
    font-size: 3em;
}

.features .column .icon {
    color: #006064;
}

.features .column:nth-of-type(2) .icon {
    color: #006064;
}

.features .column:nth-of-type(3) .icon {
    color: #006064;
}


</style>