<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-bind:key="ninja" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete a Ninja</button>
    </div>
</template>

<script>
import { bus } from '../main';
export default {
    // props: ['ninjas'],
    props: {
      ninjas: {
        type: Array,
        required: true // must pass down
      }
    },
    data(){
        return{
            
        }
    },
    methods: {
      deleteNinja: function(){
        this.ninjas.pop();
      }
    },
    // lifecycle hooks
    beforeCreate () {
        alert('beforeCreate');
    },
    created () {
        alert('created');
    },
    beforeMount () {
        alert('beforeMount');
    },
    mounted () {
        alert('mounted');
    },
    beforeUpdate () {
        alert('beforeUpdate');
    },
    updated () {
        alert('updated');
    },
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>