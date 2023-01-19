<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'
import PostList from '../components/PostList.vue'

export default {
    name: "Home",
    setup() {
        const posts = ref([
            { title: "welcome to the blog", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus autem, deserunt culpa dolorum architecto maiores amet dicta ut sit fuga voluptatum? Sit dolores ut ullam rem necessitatibus repudiandae, a facilis.", id: 1 },
            { title: "top 5 CSS tips", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus autem, deserunt culpa dolorum architecto maiores amet dicta ut sit fuga voluptatum? Sit dolores ut ullam rem necessitatibus repudiandae, a facilis.", id: 2 }
        ]);
        return { posts };
    },
    components: { PostList }
}
</script>
