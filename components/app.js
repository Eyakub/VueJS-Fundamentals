// INTRODUCTION TO COMPONENTS
// Vue.component('contact-us', {
//     data: function(){
//         return {
//             email: 'info@mycompany.com',

//         };
//     },
//     template: `
//         <div>
//             <h1>Contact Us</h1>
//             <p>Please send an e-mail to: {{ email }} </p>
//         </div>
//     `
// });


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

