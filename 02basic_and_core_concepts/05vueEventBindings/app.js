const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      confirmedName: "",
      fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
        // this.counter = 0;
      }
    },
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = this.name;
      } else {
        this.fullname = this.name + " " + value;
      }
    },
  },
  computed: {
    // fullname() {
    //   console.log("running again ....");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Schawzmiller";
    // },
  },
  methods: {
    outputFullname() {
      // console.log("running again ....");
      // if (this.name === "") {
      //   return "";
      // }
      // return this.name + " " + "Schawzmiller";
    },
    submitForm() {
      // event.preventDefault();
      alert("Submitted !");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
