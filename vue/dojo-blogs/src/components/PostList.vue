<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"/>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import SinglePost from "./SinglePost.vue";
export default {
    props: ["posts"],
    components: { SinglePost },
    setup(props) {
        onMounted
    }
}
</script>

<style>

</style>