
const vue = new Vue({
    el: '#app' ,
    data: {
        state: '',
        statelist: '',
        cases: '',
        death: '',
        recovered: ''

    },
    methods: {
       getState() {
        var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://covidtracking.com/api/states',
  headers: { }
};

axios(config)
.then((res) => res.json())
.then(data => this.states = data.response)
.catch(err => console.log(err.message))
  },
  
 

            
       mounted() {
           this.getState();
       }
    
      }

});
