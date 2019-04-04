import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from './views/ShowBlogs'
import AddBlog from './views/AddBlog'
import SingleBlog from './views/SingleBlog'
import EditBlog from './views/EditBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'show-blogs',
      component:ShowBlogs
    },
    {
      path: '/add',
      name: 'add-blog',
      component:AddBlog
    },
    {
      path:'/blog/:id',
      name:'single-blog',
      component:SingleBlog
    },
    {
      path:'/edit/:id',
      name:'edit-blog',
      component:EditBlog
    }
  ]
})
