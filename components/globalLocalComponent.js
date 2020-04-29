var contactUs = {
  data: function () {
    return {
      email: "info@mycompany.com",
    };
  },
  template: `
        <div>
            <h1>Contact Us</h1>
            <p>Please send an e-mail to: {{ email }} </p>
        </div>
    `,
};

// componenet will regester for only first app, as its
// declared first app
new Vue({
  el: "#app1",
  components: {
    "contact-us": contactUs,
  },
});

// i didnt declare components in this 2nd app
new Vue({
  el: "#app2",
});
