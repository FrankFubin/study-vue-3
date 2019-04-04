<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
    <div id="show-blogs" v-theme:column="'wide'">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
            <router-link :to="'/blog/'+blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.body | snippet}}</article>
        </div>
    </div>
</template>

<script>
    export default {
        name:"show-blogs",
        data(){
            return{
                blogs:[],
                search:""
            }
        },
        created() {
            this.$http.get("http://jsonplaceholder.typicode.com/posts")
                .then(function (data) {
                    this.blogs = data.body.slice(0,10);
                    console.log(this.blogs);
                })
        },
        computed:{
            filteredBlogs:function() {
                return this.blogs.filter((blog)=>{
                    return blog.title.match(this.search);
                });
            }
        },
        filters:{
            // 局部过滤器
            // "to-uppercase":function(value){
            //     return value.toUpperCase();
            // },
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        directives:{
            // 局部自定义指令
            "rainbow":{
                bind(el,binding,vnode){
                    el.style.color="#"+Math.random().toString().slice(2,8);
                }
            }
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
        border: 1px dotted #aaa;
    }
    #show-blogs a{
        color: #444;
        text-decoration: none;
    }
    input[type="text"]{
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }
</style>