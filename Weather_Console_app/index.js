let request = require('request');
const argv = require('yargs').argv;
let apiKey = 'dd58e59b9df6c7c59babb652042b24dd';
let city = argv.c || 'durgapur';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
