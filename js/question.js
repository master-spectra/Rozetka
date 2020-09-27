window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// добавляем переменные
	let
		// header
		btnOpenWindows 			= document.querySelectorAll('.btn-open-window'),
		windowSpecial 			= document.querySelectorAll('.window-special'),
		selectorCity 			= document.querySelector('.select-city'),
		headerMenu 				= document.querySelector('.menu'),
		btnForm					= document.querySelector('.btn-form'),
		downList 				= document.querySelectorAll('.lists'),
		btnHeaderMenu 			= document.querySelectorAll('.btn-menu'),
		btnMenuVersus 			= document.querySelector('.btn-menu-versus'),
		btnSignInHeader			= document.querySelector('.sign-in'),
		btnShowCatalog 			= document.querySelector('.btn-show-catalog'),

		// Modal-window
		catalogMenu				= document.querySelector('.catalog-menu'),
		modalWindows 			= document.querySelectorAll('.window'),
		signInWindowHeader		= document.querySelector('.sign-in-window'),
		signUpWindow			= document.querySelector('.sign-up-window'),
		modalWindowCity 		= document.querySelector('.select-city-window'),
		versusList 				= document.querySelector('.versus-list'),
		modalNumber				= document.querySelector('.numbers-modal-window'),
		basketWindow 			= document.querySelector('.basket-window'),

		// form sign
		btnShowPass 			= document.querySelector('.btn-show-pass'),
		spanShowPass 			= document.querySelector('.eye'),
		btnSignRedirect 		= document.querySelector('.sign-in-redirect'),
		fieldSignIn				= document.querySelectorAll('.field-sign-in'),
		fieldSignUp				= document.querySelectorAll('.field-sign-up'),
		formSign 				= document.querySelectorAll('.form-sign'),
		signUpBtn				= document.querySelectorAll('.sign-up-button'),
		signInBtn				= document.querySelectorAll('.sign-in-button'),
		warningMassegeSign		= document.querySelectorAll('.warning-messege-sign'),

		// form city 
		btnCity 				= document.querySelectorAll('.btn-city'),
		applySetting			= document.querySelector('.ready'),
		inputCity 				= document.querySelector('.city-input'),
		btns 					= document.querySelector('.btns'),

		// таб элементы
		tabs 					= document.querySelector('.tabs'),
		tab 					= document.querySelectorAll('.tab'),
		tabContent 				= document.querySelectorAll('.tab-content'),				

		// аккордион 
		accordionItem 			= document.querySelectorAll('.accordion-item'),
		link 					= document.querySelectorAll('.link'),

		// отзывы 
		checkbox				= document.querySelectorAll('.checkbox'),
		selectorError			= document.querySelector('.selector-error'),
		savigsFirst				= false,
		savingsSecond			= false,

		// filter
		btnsFilter 				= document.querySelector('.btns-filter'),
		btnWord 				= document.querySelectorAll('.btn-word'),
		brandList				= document.querySelectorAll('.list-brand-device-item'),

		// footer-subscribe 
		formSubscribeFooter 	= document.querySelectorAll('.form-subscribe-footer'),
		fieldSubscribeFooter 	= document.querySelectorAll('.field-form-subscribe-footer'),
		btnFormFooter 			= document.querySelectorAll('.btn-form-subscribe-footer'),

		// другое 
		layout					= document.querySelector('.layout'), 
		contentPage 			= document.querySelector('.content-page'),
		closeWindow				= document.querySelectorAll('.btn-close-window'),
		closeAllWindow 			= document.querySelectorAll('.close-all-window'),		
		t;

	let page = {
		header: () => {
			btnOpenWindows.forEach(function(elem) { // перебираем массив с кнопками 
				elem.addEventListener('click', function(e) { // навешиваем событие 
					let target = e.target; // записоваем в переменую кнопку

					for (let i = 0; i < btnOpenWindows.length; i++) {  // перебираем массив с кнопками
						if (target == btnOpenWindows[i]) { // проверяем по условию
							windowSpecial.forEach(function(elem) { // перебираем массив с окнами
								elem.classList.remove('animate'); // скрываем окна
							});

							//выводим элементы
							layout.classList.add('active-layout');
							windowSpecial[i].classList.add('animate'); 
						}
					}
				});
			});

			// добавляем событие для открытие каталога
			btnShowCatalog.addEventListener('click', function() {
				if (getComputedStyle(catalogMenu).opacity == "1") { // проверяем по условию стиль элемента
					// удаляем классы
					layout.classList.remove('catalog-mode');
					catalogMenu.classList.remove('animate');
				} else {
					// добавляем класс
					contentPage.classList.add('special'); 
					layout.classList.add('catalog-mode');
					catalogMenu.style.top = "0"; // меняем значение top 

					setTimeout(function() {
						catalogMenu.classList.add('animate'); // выводим каталог
					}, 302);
				};
			});

			// используем дилегирование
			headerMenu.addEventListener('mouseover', function(e) { // используе делигирование 
				if (e.target && e.target.classList.contains('btn-menu')) { // проверяем что событие происходит иммено на кнопках
					let targets = e.target; // записоваем цель в переменную
					
					for (let i = 0; i < btnHeaderMenu.length; i++) { // перебираем массив с кнопками 
						if (targets == btnHeaderMenu[i]) { // проверяем цель с кнопкой
							downList.forEach(function(elem) { // перебираем массив  с выподающими списками
								elem.classList.remove('animate-lists'); // скрываем элемент
							});

							downList[i].classList.add('animate-lists'); // выводим элемент
						}
					}
				};
			});

			// добавляем событие на  ссылку
			btnMenuVersus.addEventListener('click', function() {
				// делаем видимыми элементы
				layout.classList.add('active-layout');
				versusList.classList.add('animate');
			});

			// добавляем событие на ссылку
			btnSignRedirect.addEventListener('click', function(e) {
				e.preventDefault(); // отключаем стандартное повидение браузера
				// делаем видимым элемент
				layout.classList.add('active-layout');
				signInWindowHeader.classList.add('animate');
			});

			btnHeaderMenu[2].addEventListener('click', function() {
				// делаем видимыми элементы
				layout.classList.add('active-layout');
				basketWindow.classList.add('animate');
			});

			// создаем анонимную функцию
			let hideLists = () => { 
				downList.forEach(function(elem) { // перебираем массив с выпадающими списками
					elem.addEventListener('mouseleave', function(e) { // каждому выпадающими списками добавляем событие 
						elem.classList.remove('animate-lists'); // скрываем элемент
					});
				});

				document.addEventListener('click', function(e) {
					if (e.target && e.target.classList.contains('lists') == false && e.target.classList.contains('lists-child') == false) { // проверяем по условию событие
						downList.forEach(function(elem) { // перебираем массив с выпадающими списками
							elem.classList.remove('animate-lists'); // скрываем элемент
						});
					};
				});
			};

			hideLists(); // вызываем функцию
		},

		sideBar: () => {
			tabs.addEventListener('click', function(e) {
				if (e.target && e.target.classList.contains('tab')) {
					let target = e.target; // получаем элемент на который нажали

					for (let i = 0; i < tab.length; i++) { // перебираем массив с табам
						if (target == tab[i]) { // если элемент на которы нажали совпадает с тем который есть в массив...
							tabContent.forEach(function(elem) {   // перебираю массив с tabConteiner
								elem.classList.remove('active-tab-content');	// удаляю класс active
							});

							tabContent[i].classList.add('active-tab-content'); // добавляю класс active элементу который мы вызвали
						}
					}

					tab.forEach(function(elem) { // перебираем массив с кнопками 
						elem.classList.remove('active'); // удаляем класс active
					}); 

					target.classList.add('active'); // элементу на который мы нажали добавляем класс active 
				}
			});
		},

		contentQuestionPage: () => {
			closeAllWindow.forEach(function(item) { // перебираем массив 
				item.addEventListener('click', function() { // каждому элементу даем событие клик
					modalWindows.forEach(function(elem) { // перебираем массив с модальными окнами
						if (getComputedStyle(elem).opacity == "1") { // получаем стиль из модального окна 
							// удаляем классы
							layout.classList.remove('active-layout');
							layout.classList.remove('catalog-mode');
							contentPage.classList.remove('special');
							elem.classList.remove('animate'); // скрываем каждое окно
						}
					});
				});
			});

			// настраемваем кнопку закрыть
			closeWindow.forEach(function(elem) { // получаем каждую кнопку из массива 
				elem.addEventListener('click', function() { // присваеваем к кнопке событие 
					modalWindows.forEach(function(item) { // перебираем массив с модальными окнами
						// удаляем класс catalog-menu
						layout.classList.remove('active-layout');
						layout.classList.remove('catalog-mode');
						item.classList.remove('animate'); // скрываем каждое окно
					});
				});
			});

			tabContent.forEach(function(elem) { // перебираем массив с tab-content 
				elem.addEventListener('click', function(e) { // навешиваем каждому элементу событие
					if (e.target && e.target.classList.contains('link')) { // проверяем о условию
						let target = e.target; // создаем переменную и вписываем туда кнопку

						for (let i = 0; i < link.length; i++) { // перебираем массив с tab-content 
							if (target == link[i]) { // проверяем по условию
								accordionItem.forEach(function(elem) { // перебираем массив с accordion-item
									elem.classList.remove('active-accordion-item'); // скрываем все accordion-item
								});

								accordionItem[i].classList.add('active-accordion-item'); // выводим нужный accordion-item
							}
						}
					}
				});
			});
			
			// используем дилегирование	
			btns.addEventListener('click', function(e) {
				t = e.target; // присваеваем t элемент на который наэали

				// проверяем по условию используя делегирование
				if (e.target && e.target.classList.contains('btn-city')) { 
					btnCity.forEach(function(elem) { // перебираем массив с кнопками
						elem.style.border = "0"; // убираем все border у всех кнопок
					});

					t.style.border 	= "1px solid #00a046"; // добавляем бордер нажатой кнопке
					inputCity.value = t.textContent; // добавляем текст в input из кнопки 
				}
			});

			// сохраняем настройки
			applySetting.addEventListener('click', function() { 
				modalWindowCity.classList.remove('animate');
				layout.classList.remove('active-layout'); // скраваем элемент
				selectorCity.textContent = `Город ${t.textContent}`; // добавляем город в спан из кнопки
			});

			// входим в систему
			signInBtn[0].addEventListener('click', function() {
				fieldSignIn.forEach(function(elem) { // перебираем массив
					if (elem.value.length < 7) { // если меньше 7 символов то выбьет предупреждение 
						warningMassegeSign[0].style.display 	= "block"; // делаем видимым 
						warningMassegeSign[0].textContent 		= 'Введите 8 или более символов'; // добавляем текст в warning
					} else if (elem.value.length > 7){
						warningMassegeSign[0].textContent 	= null; // убираем текст в warning
						layout.classList.remove('active-layout'); // скраваем элемент
						signInWindowHeader.classList.remove('animate'); // скраваем элемент
						
						setTimeout(function() {
							formSign[0].reset(); // очищаем форму
						}, 302); // задержку в 302мс
					};
				});
			});

			// показываем окно регистрации 
			signInBtn[1].addEventListener('click', function() {
				signInWindowHeader.classList.remove('animate'); // скрываем элемент
				signUpWindow.classList.add('animate');; // скрываем элемент
			});

			// показываем value input
			btnShowPass.addEventListener('click', function(e) {
				e.preventDefault(); // отключаем стандартное повидения браузеа при нажатии на кнопку 
				
				if (fieldSignUp[3].type == "password") { // проверяем чтобы тир input был password
					fieldSignUp[3].type = "text"; // переводим его в тип password
					spanShowPass.classList.remove('fa-eye'); // добавляем класс
					spanShowPass.classList.add('fa-eye-slash'); // удаляем класс
				} else {
					fieldSignUp[3].type = "password"; // переводим его тип в text
					spanShowPass.classList.add('fa-eye'); // добавляем класс
					spanShowPass.classList.remove('fa-eye-slash'); // удаляем класс
				}
			});

			// регистрируемся
			signUpBtn[0].addEventListener('click', function() {
				fieldSignUp.forEach(function(elem) { // перебираем массив
					if (elem.value.length < 3 ||fieldSignUp[3].value.length < 7 || fieldSignUp[2].value.length < 9) { // проверяме по условию input
						warningMassegeSign[1].style.display 		= "block"; // делаем видимым 
						warningMassegeSign[1].textContent 			= 'Введите 4 или более символов, но для пароля 8, и более'; // добавляем текст в warning
					} else if (elem.value.length > 3 && fieldSignUp[3].value.length > 7 && fieldSignUp[2].value.length > 9) { // проверяем по условию Input
						warningMassegeSign[1].textContent 	= null; // удаляем контент с h2
						signUpWindow.classList.remove('animate'); // скрываем элемент
						layout.classList.remove('active-layout'); // скраваем элемент

						setTimeout(function() {
							formSign[0].reset(); // очищаем форму
						}, 302); // задержку в 302мс
					}
				});
			});

			// показываем окно входа
			signUpBtn[1].addEventListener('click', function() {
				signUpWindow.classList.remove('animate'); // скраваем элемент
				signInWindowHeader.classList.add('animate'); // выводим на экран
			});	

			let checkboxTest = () => {
				checkbox[0].addEventListener('click', function(e) {
					if (savigsFirst == false) {  // проверяем по условию
						savigsFirst	 	= true; // присваеваем true переменной savigsFirst
						savingsSecond 	= false; // присваеваем false переменной savingsSecond
						
						// включаем элемент
						selectorError.removeAttribute('disabled'); 
						btnForm.removeAttribute('disabled');

						// меняем фон checkbox
						e.target.style.background = "#3e77aa";
						checkbox[1].style.background = "transparent";
					} else {
						savigsFirst = false; // присваеваем false переменной savigsFirst
						e.target.style.background = "transparent"; // меняем фон checkbox
						
						// выключаем элемент
						selectorError.setAttribute('disabled', 'disabled'); 
						btnForm.setAttribute('disabled', 'disabled');
					};
				}); 

				checkbox[1].addEventListener('click', function(e) {
					if (savingsSecond == false) { // проверяем по условию
						savingsSecond = true; // присваеваем true переменной savigsFirst
						savigsFirst = false; // присваеваем false переменной savingsSecond
						
						// включаем элемент
						selectorError.removeAttribute('disabled'); 
						btnForm.removeAttribute('disabled');
						
						// меняем фон checkbox
						e.target.style.background = "#3e77aa";
						checkbox[0].style.background = "transparent"; // меняем фон checkbox
					} else {
						savingsSecond = false; // присваеваем false переменной savigsFirst
						e.target.style.background = "transparent"; // меняем фон  

						// выключаем элемент
						btnForm.setAttribute('disabled', 'disabled');
						selectorError.setAttribute('disabled', 'disabled');
					}
				});
			};

			let filteBrand = () => {
				btnWord.forEach(function(elem) {
					elem.addEventListener('click', function(e) {
						let filter 			= e.target.textContent.toLowerCase();
						console.log(filter)

						brandList.forEach(function(elem) {
							if (elem.textContent.toLowerCase().indexOf(filter) > -1) {
								elem.style.display = '';
							} else {
								elem.style.display = "none";
							}
						});
					});
				});
			};

			filteBrand();
			checkboxTest();
		},

		footer: () => {
			setTimeout(function checkFirstEmail() {
				if (fieldSubscribeFooter[0].value.match(/\S+@\S+\.\S+/ig)) { // проверяем по условию
					btnFormFooter[0].removeAttribute('disabled'); // включаем кнопку
				} else {
					btnFormFooter[0].setAttribute('disabled', 'disabled'); // выключаем  кнопку
				};

				setTimeout(checkFirstEmail, 10); // рекурсивный setTimeout
			}, 1000);

			setTimeout(function checkSecondEmail() {
				if (fieldSubscribeFooter[1].value.match(/\S+@\S+\.\S+/ig)) { // проверяем по условию
					btnFormFooter[1].removeAttribute('disabled'); // включаем кнопку
				} else {
					btnFormFooter[1].setAttribute('disabled', 'disabled'); // выключаем  кнопку
				};

				setTimeout(checkSecondEmail, 10); // рекурсивный setTimeout
			}, 1000);
		}
	};

	page.header();
	page.sideBar();
	page.contentQuestionPage();
	page.footer();
});	