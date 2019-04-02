<template>
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="!submited">
            <lable>博客标题</lable>
            <input type="text" v-model="blog.title" required />

            <lable>博客内容</lable>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
                <lable>Vue.js</lable>
                <input type="checkbox" value="Vue.js" v-model="blog.categories" />
                <lable>Node.js</lable>
                <input type="checkbox" value="Node.js" v-model="blog.categories" />
                <lable>React.js</lable>
                <input type="checkbox" value="React.js" v-model="blog.categories" />
                <lable>Angular.js</lable>
                <input type="checkbox" value="Angular.js" v-model="blog.categories" />
            </div>
            <lable>作者</lable>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>
            <button @click.prevent="post">添加博客</button>
        </form>

        <div v-if="submited">
            <h3>您的博客发布成功</h3>
        </div>

        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题：{{blog.title}}</p>
            <p>博客内容：</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for="cate in blog.categories" :key="cate">{{cate}}</li>
            </ul>
            <p>作者：{{blog.author}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name:'add-blog',
        data(){
            return{
                blog:{
                    title:'',
                    content:'',
                    categories:[],
                    author:''
                },
                authors:['zz01','zz02','zz03'],
                submited:false
            }
        },
        methods:{
            post(){
                this.$http.post('http://jsonplaceholder.typicode.com/posts',{
                    title:this.blog.title,
                    body:this.blog.content,
                    userId:1
                }).then(function (data) {
                    console.log(data);
                    this.submited=true;
                })
            }
        }
    }
</script>

<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    lable{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }
    textarea{
        height: 200px;
    }

    #checkboxes lable{
        display: inline-block;
        margin-top: 0;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
</style>