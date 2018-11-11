<template>
  <div>
    <section class="hero is-primary">
      <div 
        class="hero-body" 
        style="padding-top:50px;">
        <div class="container">
          <h1 class="title">
            Contact Me
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <p class="container">
        Please feel free to connect with me😊
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
            <i class="fa fa-envelope" />
            <div>
              Email chris "at" chsquare.com
            </div>
          </div>
        </transition>

        <transition
          appear 
          enter-active-class="delay-1s animated bounceInUp"
          leave-active-class="animated tada"
        >      
          <div class="column">
            <a href="https://hk.linkedin.com/in/christlc">
              <i class="fa fa-linkedin"/>
              <div>
                LinkedIn @christlc
              </div>
            </a>
          </div>
        </transition>
        <transition
          appear 
          enter-active-class="delay-1s animated bounceInDown"
          leave-active-class="animated tada"
        >    
          <div class="column">
            <a href="https://github.com/christlc">
              <i class="fa fa-github" />
              <div>
              
                Github @christlc
              
            </div></a>
          </div>
        </transition>
        <transition
          appear 
          enter-active-class="delay-2s animated bounceInRight"
          leave-active-class="animated tada"
        >    
          <div class="column">
            <a href="https://medium.com/@christlc">
              <i class="fa fa-medium" />
              <div>
              
                Medium @christlc
              
              </div>
            </a>
          </div>
        </transition>
      </div>
    </section>
    <section class="section">
      <p class="container">
        For the Hong Kong R User Group I helped organizing, 
        please follow the <a href="https://www.meetup.com/Hong-Kong-R-User-Group/">meetup group</a> or <a href="https://www.facebook.com/groups/hkrusers/">facebook group</a> for events updates.
      </p>
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

.features .fa {
    margin: auto;
    margin-bottom: 10px;
    width: 50%;
    font-size: 3em;
}

.features .fa {
    color: #006064;
}

.features .column:nth-of-type(2) .fa {
    color: #006064;
}

.features .column:nth-of-type(3) .fa {
    color: #006064;
}


</style>