<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" v-bind:key="blog.title" class="single-blog">
            <!-- <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2> -->
            <router-link v-rainbow v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase}}</h2></router-link>
            <article>{{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {
    },
    created() {
        this.$http.get('https://vue2-practice-86507-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').then(function(data){
            // this.blogs = data.body.slice(0,10);
            return data.json();
        }).then(function (data) {
            var blogsArray = [];
            // create the id property by our own
            for(let key in data) {
                // console.log(key);
                // console.log(data[key]);
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            // console.log(blogsArray);
            this.blogs = blogsArray;
        });
    },
    computed : {
        // filteredBlogs: function(){
        //     return this.blogs.filter((blog) => {
        //         return blog.title.match(this.search);
        //     });
        // }
    },
    filters: {
        /*'to-uppercase': function(value){
            return value.toUpperCase();
        }*/
        toUppercase(value){
            return value.toUpperCase();
        },
        snippet(value) {
            return value.slice(0, 100) + ' ...';
        }
    },
    directives: {
        'rainbow' :{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2, 8);
            }
        },
        'theme' : {
            bind(el, binding, vnode){
                if (binding.value == 'wide'){
                    el.style.maxWidth = "1260px";
                } else if (binding.value == 'narrow'){
                    el.style.maxWidth = "560px";
                }
                if(binding.arg == 'column'){
                    el.style.background = '#ddd';
                    el.style.padding = '20px';
                }
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

#show-blogs a{
    color: #444;
    text-decoration: none;
}
</style>