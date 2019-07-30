var vm = new Vue({
    template: `
        <div>
            <h1>{{message}}</h1>
        </div>
    `,
    data: {
        message: 'Hello world',
    }
});

// same as EL property inside Vue that stored app ID
// vm.$mount('#app');
vm.$mount();
console.log(vm.$el);
document.getElementById('app').appendChild(vm.$el);