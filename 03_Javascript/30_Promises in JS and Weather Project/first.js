// Callbackhell

// async task
// weather: 


const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)

// const pro2 = Promises.then((response)=>{
//     // const pro2 = response.json();

//     // pro2.then((data)=>{
//     //     console.log(data);
//     // })
//     return response.json();
// })


// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))

fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_f))
.catch(error=>console.log(error));






// console.log(Promises);





// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// pending resolve reject
