function swapStyleSheet() {
  var style = document.getElementById('stylesheet').getAttribute('href');
  if (style === "css/main.css") {
	 document.getElementById('stylesheet').setAttribute('href', 'css/geolize.css');
   document.getElementById('btn').innerHTML = 'Get me outta here';
   document.getElementById('job-title').innerHTML = 'InterWebz Developer';
   clearInterval(randomize);
  } else {
  	document.getElementById('stylesheet').setAttribute('href', 'css/main.css');
    document.getElementById('btn').innerHTML = 'CSS like it\'s 1996';
    document.getElementById('job-title').innerHTML = 'Web Developer';

  }
  document.getElementById('btn').blur();
}