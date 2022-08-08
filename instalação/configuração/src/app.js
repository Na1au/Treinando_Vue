const myNameApp = {
    data() {
      return {
        name: "",
        age: 20,
        input_name: ""
      }
    },
    methods: {
      submitForm(e) {
        e.preventDefault();

        console.log(this.input_name)

        this.name = this.input_name;
      }
    }
  }
  
  Vue.createApp(myNameApp).mount('#app');