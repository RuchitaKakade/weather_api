function getmethod()
{
//to get city name     
var data=document.getElementById('get')

//to display all details
var name=document.getElementById('name')
var temp=document.getElementById('temp')
var desc=document.getElementById('desc')

console.log(data.value)
fetch('https://api.openweathermap.org/data/2.5/weather?q='+data.value+'&appid=f536f956b1727834332b3c1b88b7de36&units=metric')
.then(response => response.json())
.then(data=>{

console.log(data) 
var nameValue = data['name'];
var tempValue = data['main']['temp'];
var humdity=data['main']['humidity'];
var descValue = data['weather'][0]['description'];

console.log(humdity)
name.innerHTML = nameValue;
temp.innerHTML = tempValue;
desc.innerHTML = descValue;
})
.catch(err =>alert("Wrong city name!"))


}
