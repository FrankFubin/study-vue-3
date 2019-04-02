<template>
  <div id="app">
<!--    <add-blog></add-blog>-->
    <show-blogs></show-blogs>
  </div>
</template>

<script>

  import AddBlog from './views/AddBlog'
  import ShowBlogs from './views/ShowBlogs'

  export default {
    data(){
      return{

      }
    },
    components:{
      'add-blog':AddBlog,
      'show-blogs':ShowBlogs
    }
  }

</script>

<style>

</style>
