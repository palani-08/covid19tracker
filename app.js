const vue = new Vue({
    el: '#app' ,
    data: {
        state:'',
        stateList: '',
        cases: '',
        death: '',
        recovered: ''

    },
    methods: {
       getState() {
        fetch("https://covid19india.p.rapidapi.com/getStateData", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6aa64bde4cmsh93846a66bb93317p172b0djsn763bdaf83e25",
                "x-rapidapi-host": "covid19india.p.rapidapi.com"
            }
        })
        .then(response => response.json()).then(data =>{
            this.stateList = data.response;
        });
    },
 getData (){
        fetch("https://covid-19-india-data-by-zt.p.rapidapi.com/GetIndiaStateWiseData" + this.state, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6aa64bde4cmsh93846a66bb93317p172b0djsn763bdaf83e25",
                "x-rapidapi-host": "covid-19-india-data-by-zt.p.rapidapi.com"
            }
        })
        .then(response => response.json()).then(data =>{
            data = data.response[0];
            this.cases = data.cases.total;
            this.death = data.death.total;
            this.recovered = data.cases.recovered;
        
         
        });
     }
},

            
       mounted() {
           this.getState();
       }
    


});
