Vue.component('contact-us', {
    data: function(){
        return {
            email: 'info@mycompany.com',

        };
    },
    template: `
        <div>
            <h1>Contact Us</h1>
            <p>Please send an e-mail to: {{ email }} </p>
        </div>
    `
});


var vm = new Vue({
    el: "#app",
    data: {
        message: 'Hello world',
    }
});

