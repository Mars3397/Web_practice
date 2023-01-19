const app = Vue.createApp({
    data() {
        return {
            title: 'the title',
            author: 'mars',
            age: 20,
            showBooks : true
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent () {
            console.log('event')
        }
    },
})

app.mount('#app')