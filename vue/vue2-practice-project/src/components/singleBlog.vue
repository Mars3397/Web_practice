<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author : {{ blog.author }}</p>
        <p>Categories : </p>
        <ul>
            <li v-for="category in blog.categories" :key="category">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://vue2-practice-86507-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + this.id + '.json').then(function(data){
            // console.log(data);
            // this.blog = data.body;
            return data.json();
        }).then(function (data) {
            // console.log(data);
            this.blog = data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>