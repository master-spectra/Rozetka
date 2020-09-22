window.addEventListener('DOMContentLoaded', function() {
	'use strict';
	// JS
	// Добавляем переменные
let 
	// Header
	btnOpenWindows 			= document.querySelectorAll('.btn-open-window'),
	windowSpecial 			= document.querySelectorAll('.window-special'),
	selectorCity 			= document.querySelector('.select-city'),
	headerMenu 				= document.querySelector('.menu'),
	downList 				= document.querySelectorAll('.lists'),
	btnHeaderMenu 			= document.querySelectorAll('.btn-menu'),
	btnMenuVersus 			= document.querySelector('.btn-menu-versus'),

	// Modal-window and down-list, and fixed-button
	modalWindows 			= document.querySelectorAll('.window'),
	signInWindowHeader		= document.querySelector('.sign-in-window'),
	signUpWindow			= document.querySelector('.sign-up-window'),
	modalWindowCity 		= document.querySelector('.select-city-window'),
	helpWindow 				= document.querySelector('.help-window'),
	versusList 				= document.querySelector('.versus-list'),
	modalNumber				= document.querySelector('.numbers-modal-window'),
	fixedBtn 				= document.querySelector('.btn-fixed'),
	basketWindow 			= document.querySelector('.basket-window'),

	// form и её элементы
	btnHideHelpWindow 		= document.querySelector('.hide-help-window'),
	btnShowPass 			= document.querySelector('.btn-show-pass'),
	formSubscribeFooter 	= document.querySelector('.form-subscribe-footer'),
	fieldSubscribeFooter 	= document.querySelector('.field-form-subscribe-footer'),
	btnFormFooter 			= document.querySelector('.btn-form-subscribe-footer'),
	spanShowPass 			= document.querySelector('.eye'),
	btns 					= document.querySelector('.btns'),
	btnCity 				= document.querySelectorAll('.btn-city'),
	warningMessegeSubscribe = document.querySelector('.warning-messege-footer-subscribe'), 	
	btnSignRedirect 		= document.querySelector('.sign-in-redirect'),
	fieldSignIn				= document.querySelectorAll('.field-sign-in'),
	fieldSignUp				= document.querySelectorAll('.field-sign-up'),
	warningMassegeSign		= document.querySelectorAll('.warning-messege-sign'),
	formSign 				= document.querySelectorAll('.form-sign'),
	applySetting			= document.querySelector('.ready'),
	inputCity 				= document.querySelector('.city-input'),
	signUpBtn				= document.querySelectorAll('.sign-up-button'),
	signInBtn				= document.querySelectorAll('.sign-in-button'),

	// другое 
	layout					= document.querySelector('.layout'), 
	closeWindow				= document.querySelectorAll('.btn-close-window'),
	closeAllWindow 			= document.querySelectorAll('.close-all-window'),
	t;


	let page = { // используем инкапсуляцию 
		header: () => {
			btnOpenWindows.forEach(function(elem) { // перебираем массив с кнопками 
				elem.addEventListener('click', function(e) { // навешиваем событие 
					let target = e.target; // записоваем в переменую кнопку

					for (let i = 0; i < btnOpenWindows.length; i++) {  // перебираем массив с кнопками
						if (target == btnOpenWindows[i]) { // проверяем по условию
							windowSpecial.forEach(function(elem) { // перебираем массив с окнами
								elem.classList.remove('animate'); // скрываем окна
							});

							layout.classList.add('active-layout'); //выводим layout
							windowSpecial[i].classList.add('animate'); // выводим окна
						}
					}
				});
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
				layout.classList.add('active-layout'); // делаем видимым элемент
				signInWindowHeader.classList.add('animate'); // выводим элемент
			});

			btnHeaderMenu[1].addEventListener('click', function() {
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
					}
				});
			};

			hideLists(); // вызываем функцию
		},

		contentPremiumPage: () => {
			// добавляем еще один способ закрыть окно 
			closeAllWindow.forEach(function(item) { // перебираем массив 
				item.addEventListener('click', function() { // каждому элементу даем событие клик
					modalWindows.forEach(function(elem) { // перебираем массив с модальными окнами
						if (getComputedStyle(elem).opacity == "1") { // получаем стиль из модального окна 
							// удаляем классы
							layout.classList.remove('active-layout');
							layout.classList.remove('catalog-mode');
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
				selectorCity.textContent = `Город ${t.textContent}`; // добавляем город в спан из кнопки
				modalWindowCity.style.opacity = '0'; // скраваем элемент
				layout.classList.remove('active-layout'); // скраваем элемент

				setTimeout(function() {
					modalWindowCity.style.transform = "translate(0, -200%)"; // выносим ха экран элемент 
				}, 302); // задежка в 302мс
			});

			// входим в систему
			signInBtn[0].addEventListener('click', function() {
				fieldSignIn.forEach(function(elem) { // перебираем массив
					if (elem.value.length < 7) { // если меньше 7 символов то выбьет предупреждение 
						warningMassegeSign[0].style.display 	= "block"; // делаем видимым 
						warningMassegeSign[0].textContent 		= 'Введите 8 или более символов'; // добавляем текст в warning
					} else if (elem.value.length > 7){
						warningMassegeSign[0].textContent 	= null; // убираем текст в warning
						signInWindowHeader.style.opacity 	= "0"; // скрываем элемент
						layout.classList.remove('active-layout'); // скрываем элемент

						setTimeout(function() {
							signInWindowHeader.style.transform 	= "translate(0, -200%)"; // выносим за экран
						}, 302); // задержка в 302мс
						
						setTimeout(function() {
							formSign[0].reset(); // очищаем форму
						}, 302); // задержку в 302мс
					};
				});
			});

			// показываем окно регистрации 
			signInBtn[1].addEventListener('click', function() {
				signInWindowHeader.style.opacity 		= "0"; // скрываем элемент
				signUpWindow.style.transform 			= "translate(-52%, 0)"; // скрываем элемент

				setTimeout(function() {
					signInWindowHeader.style.transform 	= "translate(0, 0)"; // скрываем элемент
					signUpWindow.style.opacity 			= "1"; // делаем видимым элемент
				}, 302); // задержку в 302мс
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
					if (elem.value.length < 3 ||fieldSignUp[3].value.length < 7 || fieldSignUp[2].value.length < 10) { // проверяме по условию input
						warningMassegeSign[1].style.display 		= "block"; // делаем видимым 
						warningMassegeSign[1].textContent 			= 'Введите 4 или более символов, но для пароля 8, и более'; // добавляем текст в warning
					} else if (elem.value.length > 3 && fieldSignUp[3].value.length > 7 && fieldSignUp[2].value.length > 10) { // проверяем по условию Input
						warningMassegeSign[1].textContent = null; // удаляем контент с h2
						layout.classList.remove('active-layout'); // делаем невидимым элемент
						signUpWindow.style.opacity = "0"; // скрываем элемент

						setTimeout(function() {
							signUpWindow.style.transform = "translate(0, -200%)"; // выводим на экран
						}, 302); // задержка в 302мс

						setTimeout(function() {
							formSign[0].reset(); // очищаем форму
						}, 302); // задержку в 302мс
					}
				});
			});

			// показываем окно входа
			signUpBtn[1].addEventListener('click', function() {
				signUpWindow.style.opacity 			= "0"; // скрываем элемент
				signInWindowHeader.style.transform 	= "translate(-50%, 0)"; // выводим на экран

				setTimeout(function() {
					signUpWindow.style.transform 		= "translate(0, -200%)"; // выносим за экран
					signInWindowHeader.style.opacity 	= "1"; // делаем видимым
				}, 302); // задержка в 302мс
			});
		},

		footer: () => {
			btnFormFooter.addEventListener('click', function() {
				if (fieldSubscribeFooter.value.length < 9) { // проверяем по условию инпут
					// делаем видимым элемент и добавляем текст
					warningMessegeSubscribe.style.display = "block";
					warningMessegeSubscribe.style.color = "red";
					warningMessegeSubscribe.textContent = "Введите 10 и более символов!";
				} else {
					// скрываем элемент и удаляе текст
					warningMessegeSubscribe.style.display 	= "none";
					warningMessegeSubscribe.textContent 	= null;
					formSubscribeFooter.reset();
				}
			});
		}
	};

	page.header();
	page.contentPremiumPage();
	page.footer();
});