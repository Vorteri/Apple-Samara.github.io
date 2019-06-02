
	let modal = () => {
	
		let overlay  = document.querySelector('.overlay'),
		    isActiveBtn;

		let show = (overlayStatus, overflowStatus, classListMethod, el) => {
			if(classListMethod == 'add') isActiveBtn = el;
			if(!el) el = isActiveBtn;
			overlay.style.display = overlayStatus;
			el.classList[classListMethod]('more-splash');
			document.body.style.overflow = overflowStatus;
		};

		document.body.addEventListener('click', e => {
			let target = e.target;

			if(target.classList.contains('more') || target.classList.contains('description-btn')) show('block', 'hidden', 'add', target);
			if(target.classList.contains('popup-close')) show('none', '', 'remove');
		});
	};
		module.exports = modal;