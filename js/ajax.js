var button = document.querySelector('button');

var loadGallery = new XMLHttpRequest();

button.onclick = function(){
  //loadGallery.open(methodType, url)
  loadGallery.open('GET', 'http://localhost/js/gallery.html');
  loadGallery.send(); 
}

loadGallery.onreadystatechange = function(event){
  
  if(this.status === 200 && this.readyState == 4){
    console.log('data from the request', this.responseText)
    console.log('data type', this.responseType)
    document.querySelector('#output').innerHTML = this.responseText;
  }
  
  if (this.status === 400 && this.readyState == 4) {
    alert('There seems to be problem')
  }
}

var loadWeather = document.querySelector('#loadweather');

var weather = new XMLHttpRequest();
loadWeather.onclick = function(){
  weather.open("GET","https://openweathermap.org/data/2.5/find?q=Kathmandu&appid=b6907d289e10d714a6e88b30761fae22&_=1550740704232")
  weather.send();
}

function showWeather(tmp,pressure){
  var container = document.createElement('div');
  var paragraph = document.createElement('p');
  paragraph.textContent = ` Temperature : ${tmp} Pressure : ${pressure}`
  container.appendChild(paragraph);
  return container;
}

weather.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    console.log('Weather event', this);
    var data = JSON.parse(this.responseText);
    var city = data.list[0];
    document.querySelector('#output').appendChild(showWeather(city.main.temp, city.main.pressure));



    console.log('Weather data', this.responseText);
  }
}

