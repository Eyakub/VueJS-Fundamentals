var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello',
    },
});

vm.message = 'Hello world';
alert(vm.$el.textContent);

Vue.nextTick(function(){
    alert(vm.$el.textContent);
})