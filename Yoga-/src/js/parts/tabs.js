let tabs = () => {
	
	let tabWrapper = document.querySelector('.info-header'),
					tabSelector = document.querySelectorAll('.info-header-tab'),
					tab = document.querySelectorAll('.info-tabcontent');


		let hideTabContent = (a = 1) => {
				for (let i = a; i < tab.length; i++) {
					tab[i].classList.remove('show');
					tab[i].classList.add('hide');
				}
			};
			hideTabContent();

		let showTabContent = b => {
			if (tab[b].classList.contains('hide')) {
								tab[b].classList.remove('hide');
								tab[b].classList.add('show');
					}
				};

				tabWrapper.addEventListener('click', event => {
					let target = event.target;

					if(target && target.classList.contains('info-header-tab')) {
						for(let i = 0; i < tabSelector.length; i++) {
							if(target == tabSelector[i]) {
								hideTabContent(0);
								showTabContent(i);
								break;
							}
						}
					}
				});
			};
			
module.exports = tabs;