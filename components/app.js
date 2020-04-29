// INTRODUCTION TO COMPONENTS
Vue.component('contact-us', {
    data: function(){
        return {
            email: 'info@mycompany.com',
        };
    },
    methods: {
        changeEmail: function(){
            this.email = "eyakubsorkar@gmail.com"
        }
    },
    template: `
        <div>
            <h1>Contact Us</h1>
            <p>Please send an e-mail to: {{ email }} </p>
            <button v-on:click="changeEmail">Change Email</button>
        </div>
    `
});


Vue.component('counter', {
    data: function(){
        return {
            counter: 0
        };
    },
    template:  `
        <div> 
            <button @click="counter++">{{counter}} </button>
        </div>
    `
});

var vm = new Vue({
    el: "#app",
    // data: {
    //     message: 'Hello world',
    // }
});

