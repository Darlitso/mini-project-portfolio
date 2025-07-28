const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'0c7c6492b55f3e04677c9e984336b472';


async function weatherFn(cName) {
	const apiUrl =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(apiUrl);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	
	function updateTime()  {
		$('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
	}
    updateTime();
	if (window.timeInterval) clearInterval(window.timeInterval);
	window.timeInterval = setInterval(updateTime, 1000);

	$('#temperature').
		text(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		text(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-icon').
		attr('src',
			`...`);
	$('#weather-info').fadeIn();
}