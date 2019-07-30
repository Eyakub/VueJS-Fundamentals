var vm = new Vue({
    el: "#app",
    data: {
        message: 'Hello world',
        counter: 1,
    },

    beforeCreate: function(){
        alert('beforeCreate');
    },

    created: function(){
        alert('created')
        // now vue is watching our data properties for changes
    },
    beforeMount: function(){
        alert('beforeMount')
        // which is invoked after vue has compiled 
        // the template and updated the virtual DOM
        // mount the template ,essentially $el property
        // update the native DOM
    },
    mounted: function(){
        alert('mounted')
        // we are not updating any vue instance data during the vue
        // instance data rendering, now 
    },
    beforeUpdate: function(){
        alert('beforeUpdate')
        // before updated the Virtual DOM, patches the real DOM
    },
    updated: function(){
        alert('updated')
        // trigged when the actual DOM updated
    },
    beforeDestroy: function(){
        alert('beforeDestroy')
    },
    destroyed: function(){
        alert('destroyed')
    },
});

console.log(vm);

// vm.$destroy();
setTimeout(function(){
    vm.$mount('#app');
}, 2000);