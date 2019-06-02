let calc = () => {		
								
		let persons  = document.querySelectorAll('.counter-block-input')[0],
		restDays     = document.querySelectorAll('.counter-block-input')[1],
		place        = document.getElementById('select'),
		totalValue   = document.getElementById('total'),
		personsSum   = 0,
		daysSum      = 0,
		total        = 0;
		
		totalValue.innerHTML = 0;

	document.body.addEventListener('input', (el) => {
		let target = el.target;

		if(target.classList == 'counter-block-input') {
			target.value = target.value.replace(/(^[0]{1})/, '');
		}

		personsSum = +persons.value;
		daysSum    = +restDays.value;

		total = daysSum * personsSum * 4000;

		if(personsSum == '' || daysSum == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
		}
	});

};
		module.exports = calc;