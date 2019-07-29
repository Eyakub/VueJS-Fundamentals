var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        counter: 1,
        person: {
            name: {
                firstName: 'bo',
                lastName: 'Sorkar',
            }
        },
    },

    methods: {
        clickButton: function () {
            console.log(this.$refs);
            //this.$refs.myButton.innerText = this.message;
        },
    },
});
console.log(vm.$refs);

{
    /* vm.message = 'Hello world';
     alert(vm.$el.textContent);

     Vue.nextTick(function(){
         alert(vm.$el.textContent);
     }); */
}

{
    /* vm.$watch('counter', function(newValue, oldValue){
         alert('Counter changed from ' + oldValue + ' to ' + newValue + '!');
     })

     vm.$watch('person.name.firstName', function(newValue, oldValue){
         alert('First name changed from ' + oldValue + ' to ' + newValue + '!')
     });

     vm.$watch('person.name', function(newValue, oldValue){
         alert('First name changed from ' + oldValue.firstName + ' to ' + newValue.firstName + '!')
     }, {deep: true}); */
}

{
    /* adding watch dynamically
     var unwatch = vm.$watch(
         function(){
             return this.counter;
         }, 
         function(newValue, oldValue){
             alert('Counter changed from ' + oldValue + ' to ' + newValue + '!');
     }); */
}

{
    /* setTimeout(function(){
         unwatch();
     }, 5000); */
}


    //accessing the dom with refs
    setTimeout(function(){
        vm.$refs.message.innerText = "This is a test";
    }, 2000);

    console.log(vm.$refs);
