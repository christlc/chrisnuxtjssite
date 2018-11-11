const pkg = require('./package')
const { join } = require('path')
const dir = require('node-dir')
const routesArray = []
const fs = require('fs')
const _ = require('lodash')

var files = fs.readdirSync('./static/dynamicMarkdownFiles');
function createRoutesArray() {
  files.forEach(function (file) {
      var name = file.substr(0, file.lastIndexOf('.'));
      var route = '/post/' + name
      routesArray.push(route)
  });
}

function returnRoutes() {
  dir.readFiles('./static/dynamicMarkdownFiles', {
        match: /.md$/,
        shortName: true,
        exclude: /^\./
        }, function(err, content, next) {
            if (err) throw err;
            // console.log('content:', content);
            next();
        },
        function(err, files){
            if (err) throw err;
            // fileNamesArray = [];
            files.forEach(function (file) {
                var name = file.substr(0, file.lastIndexOf('.'));
                var path = '/post/' + name
                return path
            });
        });
}
// const fs = require('fs')
// const axios = require('axios')
// // const _ = require('lodash')

//
function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/post/${slug}`
}
//
//const postsArray = require('.//posts.json')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
  routes: function() {

    return files.map(getSlugs)
    // return _.map(routesArray, function(file) {
    //   let slug = file.substr(0, file.lastIndexOf('.'));
    //   return `/dynamic/${slug}`
    // })

  // return axios.get('~/static/posts.json')
  // .then((res) => {
  //   return _.map(res.data, function(post, key) {
  //     return `/dynamic/${post.slug}`
  //   })
  //
  // })
  }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
   { src: 'node_modules/font-awesome/css/font-awesome.css', lang: 'css' },
   { src: 'node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
   { src: 'assets/style.css', lang: 'css'},
   { src: 'node_modules/animate.css/animate.css', lang: 'css'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Build configuration
  */
  build: {

    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      })
    }
  }
}
