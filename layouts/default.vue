<template>
  <div> 
    <div>
      <nav class="navbar is-fixed-top">
        <div class="navbar-brand">
          <nuxt-link
            class="navbar-item" 
            href="/">
            <img src="favicon-256.png">
            
            <span class="logo">
              Chris Choy
            </span>
          </nuxt-link>
          <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
          <div 
            :class="{ 'is-active': showNav }" 
            class="navbar-burger" 
            @click="showNav = !showNav">
            <span/>
            <span/>
            <span/>
          </div>
        </div>
        <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div 
          :class="{ 'is-active': showNav }" 
          class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link
              class="navbar-item" 
              to="/about">
              <i 
                class="fa fa-user " 
                style="padding-right:10px;color:hsl(348, 100%, 61%);"/>
              About
            </nuxt-link>
            <nuxt-link
              class="navbar-item" 
              to="/posts">
              <i 
                class="fa fa-newspaper-o" 
                style="padding-right:10px;color:hsl(48, 100%, 67%);"/>
              Posts
            </nuxt-link>

            <span class="navbar-item">
              <nuxt-link 
                to="/contact" 
                class="button is-rounded is-success">
                <span style="padding-right:10px;">
                  <i class="fa fa-envelope"/> 
                </span>
                Contact
            </nuxt-link></span>
          </div>
        </div>
      </nav>
    </div>
    <div>
      <nuxt/>
    </div>
    <footer 
      class="footer" 
      style="margin-top:3em;">
      <div class="content has-text-centered">
        <p class="footer-link">
          <a href="https://hk.linkedin.com/in/christlc">
            <i class="fa fa-linkedin" />
          </a>
          
          <a href="https://github.com/christlc">
            <i class="fa fa-github" />
          </a>

          <a href="https://medium.com/@christlc">
            <i class="fa fa-medium" />
          </a>
          <br >
          Created by <strong>Chris Choy</strong>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false  
    }
  }
}
</script>
<style>

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding-top: 3.25rem; /* navbar */
}
/*
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}*/
.logo {
  font-family: 'Bungee';
  padding-left: 0.5em;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.footer-link a{
  font-size: 2em;
  margin-right: 0.2em;
  margin-left: 0.2em;
}

</style>
