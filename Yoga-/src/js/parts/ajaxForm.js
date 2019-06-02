let ajaxForm = () => {

	let form                = document.querySelector('.main-form'),
					input               = form.getElementsByTagName('input'),
					contactsForm        = document.querySelector("#form"),
					constactsFormInput  = contactsForm.querySelectorAll('input'),
					statusMessage       = document.createElement('div'),
					body                = document.querySelector('body');
		
					statusMessage.classList.add('status');


					body.addEventListener('input', e => {
						let target = e.target;
								if(target.matches(`input[type$='tel']`)) {
										target.value = '+' +target.value.replace(/[^\d]/g, '').slice(0, 11);

										if(target.value.length == 1) {
											target.value = '';
									}
								}
					});



					let sendForm = (elem, formInput) => {
						elem.addEventListener('submit', e => {
						e.preventDefault();
						elem.appendChild(statusMessage);
						let formData = new FormData(elem);

						let obj = {};
						formData.forEach((value, key) => {
							obj[key] = value;
						});
						let jsonStr = JSON.stringify(obj);

					let postData = json => {
						return new Promise((resolve, reject) => {

						let request = new XMLHttpRequest();
						request.open('POST', 'server.php');
						request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

						request.onreadystatechange = function(){
							if (request.readyState < 4) {
							resolve();
							} else if (request.readyState === 4) {
								if (request.status === 200 && request.status < 300) {
								resolve();
								}
								else {
									reject();
										}
									}
				};
					
				request.send(jsonStr);
			});
					};

						let clearInput = () => {
							for (let i = 0; i < formInput.length; i++) {
								formInput[i].value = '';
								}
							};

							postData(jsonStr)
									.then(() => statusMessage.setAttribute("style", "height: 30px; background-image: url(./img/1.gif); background-repeat: no-repeat; margin-left: 165px; margin-top: 15px;"))
									.then(() => {
										setTimeout(() => {
											statusMessage.setAttribute("style",  "display: block; height: 30px; background-image: url(./img/Success.png); background-repeat: no-repeat; margin-left: 165px; margin-top: 15px;");
											setTimeout(() => {
												statusMessage.setAttribute("style", "display: none;");
											}, 2000);
										}, 1000);
									})
									.catch(() => statusMessage.setAttribute("style", "height: 30px; background-image: url(./img/error.png); background-repeat: no-repeat; margin-left: 165px; margin-top: 15px;"))
								.then(clearInput);
		});	
	};
	sendForm(form, input);		
	sendForm(contactsForm, constactsFormInput);
};

module.exports = ajaxForm;