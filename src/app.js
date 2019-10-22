import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      euroInput: 0
    },
    computed: {
      newTotal: function() {
        return this.euroInput * this.selectedCurrency
      }
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(currencies => this.currencies = currencies)
      }
  }
  })
})
