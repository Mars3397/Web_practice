// vue instance -> control either the whole part or the certain part of our application
// there has no relation between instances
new Vue({
    el : '#vue-app', // the part that the vue instance is controled 
    data : { // create data for the instance
        // data
        name: 'Mars',
        job : 'Ninja',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',

        // event
        age : 25,
        x: 0,
        y: 0, 

        // computed properties
        a: 0,
        b: 0,

        // dynamic CSS
        available: false,
        nearby: false,

        // conditionals 
        error: false,
        success: false, 

        // loop
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]
    }, 
    methods : { // create methods for the instance
        // method
        greet : function (time) {
            return 'Good ' + time + ' ' + this.name;
        },

        // mouse event
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) { // no need to input event when we call it, it done automatically
            // .offset -> access the property in the event
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('you clicked me');
        },

        // keyboard event & 2-way data binding
        logName: () => {
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        },
        addToA: function(){
            console.log('addToA');
            // this.age++;
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            // return this.b + this.age;
        },


    },
    computed: { // more efficient and quicker 
        // computed property
        // addToA: function(){
        //     console.log('addToA');
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     console.log('addToB');
        //     return this.b + this.age;
        // }, 

        // dynamic CSS
        compClasses: function(){
            return{
                // return the classes
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});