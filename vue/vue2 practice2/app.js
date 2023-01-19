Vue.component('greeting', {
    // template: '<p>Hey there, I am a re-usable component</p>'
    template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">change name</button></p>',
    data : function () {
        return {
            name : 'Yoshi'
        }
    },
    methods: {
        changeName : function () {
            this.name = 'Mario';
        }
    }
});

var one = new Vue({
    el: '#vue-app-one',
    data: {
      title: 'Vue App One',
      output: 'Your favourite food'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    },
    computed: {
      greet: function(){
        return 'Hello, from app one :)';
      }
    }
});

new Vue({
    el : '#vue-app',
    data : {
        output : 'your fav food'
    },
    methods : {
        readRefs: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    }
})

var two = new Vue({
    el: '#vue-app-two',
    data: {
      title: 'Vue App Two'
    },
    computed: {
      greet: function(){
        return 'Yo dudes, this is app 2 speaking to ya';
      }
    },
    methods: {
      changeTitle: function(){
        // get the property from the other instance
        one.title = 'Title Changed';
      }
    }
});

two.title = 'Changed from outside';
