const one = new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    ended: false,
    title: "Vue app one",
    hidePunchBag: true,
  },
  methods: {
    punch: function (){
      this.health -= 10;
      if(this.health <= 0){
        this.ended = true
      }
    },
    restart: function(){
      this.health = 100;
      this.ended = false
    }
  },
  computed: {

  }
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two"
  },
  methods: {
    changeOneTitle: function(){
      one.title = "I'm changed by two instance"
    }
  },
  computed: {

  }
});
