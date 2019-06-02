let timer = (timeToEnd = '2019-05-18', tagHtmlForSmoothyScroll = 'html') => {

	let	html = document.querySelector(tagHtmlForSmoothyScroll);

html.style.scrollBehavior="smooth"; // Плавная прокрутка

let getTimeRemaining = endTime => {
let t = Date.parse(endTime) - Date.parse(new Date()),
seconds = Math.floor((t/1000) % 60),
minutes = Math.floor((t/1000/60) % 60),
hours = Math.floor((t/(1000 * 60 * 60)));

return {
'total': t,
'hours': hours,
'minutes': minutes,
'seconds': seconds
};
};

let setClock = (id = 'timer', endTime = timeToEnd) => {
let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

	function updateClock() {
		let t = getTimeRemaining(endTime);

		hours.textContent = t.hours;
		minutes.textContent = t.minutes;
		seconds.textContent = t.seconds;

		t.hours < 10 ? hours.textContent = '0' + t.hours: false;
		t.minutes < 10 ? minutes.textContent = '0' + t.minutes: false;
		t.seconds < 10 ? seconds.textContent = '0' + t.seconds: false;

		if (t.total <= 0 ) {
			clearInterval(timeInterval);

			hours.textContent = '00'; 
			minutes.textContent = '00';
			seconds.textContent = '00';

		}
}
};
setClock();

};

module.exports = timer;