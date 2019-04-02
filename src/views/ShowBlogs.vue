<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
    <div id="show-blogs" v-theme:column="'wide'">
        <h1>博客总览</h1>
        <div class="single-blog" v-for="blog in blogs" :key="blog.id">
            <h2 v-rainbow>{{blog.title}}</h2>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>

<script>
    export default {
        name:"show-blogs",
        data(){
            return{
                blogs:[]
            }
        },
        created() {
            this.$http.get("http://jsonplaceholder.typicode.com/posts")
                .then(function (data) {
                    this.blogs = data.body.slice(0,10);
                    console.log(this.blogs);
                })
        }
    }

</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>