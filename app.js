
const vue = new Vue({
    el: '#app' ,
    data: {
        country: '',
        countryList: [],
        cases: '',
        death: '',
        recovered: ''

    },
    
    methods: {
      
       getCountry() {
         import axios from 'axios';
         import Vueaxios from 'vueaxios';
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://corona.lmao.ninja/v2/countries?yesterday&sort',
          headers: { }
        };
axios(config)
.then(response => response.json()).then(data =>{
  console.log( this.countryList =  data.country);
})
.catch(function (error) {
  console.log(error);
});
        
      },

      getdata(){
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://corona.lmao.ninja/v2/countries?yesterday&sort' + this.country,
          headers: { }
        };
axios(config)
.then(response => response.json()).then(data =>{
  data =  data.response[0];
  this.cases = data.cases
  this.death = data.deaths
  this.recovered = data.recovered
});   

      }
  },
  
 

            
       mounted() {
          this.getCountry();
        
       },
    
     

});
