<template>
  <div id="app">

    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer> -->


    <!-- <form-helper>
      <div slot="form-header">
        <h3>This is the title of a form</h3>
        <p>This is some info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper> -->


    <!-- <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button> -->


    <!-- <add-blog></add-blog> -->


    <!-- <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->

    <app-headers></app-headers>
    <router-view></router-view>



  </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
import formHelper from './components/formHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/page_header.vue';


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo,
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-headers': header
  },
  data () {
    return {
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
      title: 'Vue Ninjas',
      component: 'form-one'
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
  },
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>


<!--for basic-->
<!--
<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninja from './Ninja.vue'
  export default {
    components: { 
      'ninjas' : Ninja 
    },
    data() {
      return {
        title : 'Ninja app'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
-->