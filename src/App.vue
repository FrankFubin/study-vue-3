<template>
  <div id="app">
<!--    <add-blog></add-blog>-->
<!--    <show-blogs></show-blogs>-->
      <blog-header></blog-header>
      <router-view></router-view>
  </div>
</template>

<script>

  import AddBlog from './views/AddBlog'
  import ShowBlogs from './views/ShowBlogs'
  import BlogHeader from './components/BlogHeader'

  export default {
    data(){
      return{

      }
    },
    components:{
        BlogHeader
    }
  }

</script>

<style>

</style>
