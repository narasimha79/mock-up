
const axios = require('axios');


function fetchCache() {
    axios.get('http://localhost:4200').then(responce=>{
return responce.json();
    }).then(data=>{
        let time = data.time;
        let people = data.people
        let locCache = localStorage.getItem('western-time');
        if(locCache) {
            //we have data
        
         let oldData = JSON.parseInt(locCache);   
            if(oldData< time) {
                let ppl = JSON.stringify(people);
                localStorage.setItem('western-people', ppl); 
            } else {
                console.log("no updated required");
            }

        } else {
            //no data
            localStorage.setItem('western-time',time);
            let ppl = JSON.stringify(people);
            localStorage.setItem('western-people', ppl);
        }
    })
}


