window.addEventListener('DOMContentLoaded', function() {
	'use strict';
	// jquery 
	$('.carusel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	// JS
	let Data = {
		generalFuntion() {
			// Добавляем переменные
			let phone 					= document.querySelector('span'),
				spanCity 				= document.querySelector('.select-city'),
				btnShowPass 			= document.querySelector('.btn-show-pass'),
				spanShowPass 			= document.querySelector('.eye'),
				layout					= document.querySelector('.layout'), 
				btns 					= document.querySelector('.btns'),
				btnCity 				= document.querySelectorAll('.btn-city'),
				fieldSignIn				= document.querySelectorAll('.field-sign-in'),
				fieldSignUp				= document.querySelectorAll('.field-sign-up'),
				warningMassegeSignIn	= document.querySelector('.warning-messege-sign-in'),
				warningMassegeSignUp	= document.querySelector('.warning-messege-sign-up'),
				inputCity 				= document.querySelector('.city-input'),
				btnSignHeader			= document.querySelector('.sign'),
				applySetting			= document.querySelector('.ready'),
				closeWindow				= document.querySelectorAll('.btn-close-window'),
				signInBtn				= document.querySelectorAll('.sign-in-button'),
				signUpBtn				= document.querySelectorAll('.sign-up-button'),
				signInWindowHeader		= document.querySelector('.sign-in-window'),
				signUpWindow			= document.querySelector('.sign-up-window'),
				modalCity 				= document.querySelector('.select-city-window'),
				modalNumber				= document.querySelector('.numbers-modal-window');

			// добавляем тех.переменную
			let t;

			phone.addEventListener('click', function() {
				layout.style.display 			= "block"; // делаем видимым
				modalNumber.style.transform 	= "translate(-49%, 0)"; // центрируем

				setTimeout(function() {
					modalNumber.style.opacity 	= 1; // делаем видимым
				}, 302); // делаем задержку в 302мс
			});

			closeWindow.forEach(function(elem) {
				elem.addEventListener('click', function() {
					// скрываем элементы
					layout.style.display 				= "none"; 
					modalNumber.style.opacity 			= '0';
					modalCity.style.opacity 			= '0';
					signInWindowHeader.style.opacity 	= "0";
					signUpWindow.style.opacity 			= "0";

					setTimeout(function() {
						// выносим за экран элементы
						modalNumber.style.transform 		= "translate(0%, -200%)"; 	
						modalCity.style.transform 			= "translate(0, -200%)"; 	
						signInWindowHeader.style.transform 	= "translate(0, -200%)";
						signUpWindow.style.transform 		= "translate(0, -200%)";
					}, 302); // делаем задержку в 302мс
				});
			});

			spanCity.addEventListener('click', function() {
				layout.style.display 			= "block"; // делаем видимым элемент
				modalCity.style.transform 		= "translate(-43%, 0)"; // центрируем

				setTimeout(function() {
					modalCity.style.opacity 	= '1'; // делаем видимым элемень
				}, 302); // задержка 302мс
			});

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

			applySetting.addEventListener('click', function() { 
				spanCity.textContent = `Город ${t.textContent}`; // добавляем город в спан из кнопки 
				layout.style.display 				= "none"; // скраваем элемент
				modalCity.style.opacity 			= '0'; // скраваем элемент

				setTimeout(function() {
					modalCity.style.transform 		= "translate(0, -200%)"; // выносим ха экран элемент 
				}, 302); // задежка в 302мс
			});

			btnSignHeader.addEventListener('click', function() {
				layout.style.display 						= "block"; // делаем видимым элемент
				signInWindowHeader.style.transform 			= "translate(0, 0)"; // выводим на экран
				
				setTimeout(function() {
					signInWindowHeader.style.opacity = "1"; // делаем видимым элемент
				}, 302);
			});

			signInBtn[0].addEventListener('click', function() {
				fieldSignIn.forEach(function(elem) { // перебираем массив
					if (elem.value.length < 7) { // если меньше 7 символов то выбьет предупреждение 
						warningMassegeSignIn.style.display 	= "block"; // делаем видимым 
						warningMassegeSignIn.textContent 	= 'Введите 8 или более символов'; // добавляем текст в warning
					} else {
						layout.style.display 				= "none"; // скрываем элемент
						signInWindowHeader.style.opacity 	= "0"; // скрываем элемент

						setTimeout(function() {
							signInWindowHeader.style.transform 		= "translate(0, -200%)"; // выносим за экран
						}, 302); // задержка в 302мс
					}
				});
			});

			signInBtn[1].addEventListener('click', function() {
				signInWindowHeader.style.opacity 		= "0"; // скрываем элемент
				signUpWindow.style.transform 			= "translate(0, 0)"; // скрываем элемент

				setTimeout(function() {
					signInWindowHeader.style.transform 		= "translate(0, 0)"; // скрываем элемент
					signUpWindow.style.opacity 				= "1"; // делаем видимым элемент
				}, 302);
			});

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

			signUpBtn[0].addEventListener('click', function() {
				fieldSignUp.forEach(function(elem) { // перебираем массив
					if (elem.value.length < 7) { // если меньше 7 символов то выбьет предупреждение 
						warningMassegeSignUp.style.display 		= "block"; // делаем видимым 
						warningMassegeSignUp.textContent 		= 'Введите 8 или более символов'; // добавляем текст в warning
					} else {
						layout.style.display 						= "none"; // делаем видимым элемент
						signUpWindow.style.opacity 					= "0"; // скрываем элемент

						setTimeout(function() {
							signUpWindow.style.transform 				= "translate(0, -200%)"; // выводим на экран
						}, 302); // задержка в 302мс
					}
				});
			});

			signUpBtn[1].addEventListener('click', function() {
				signUpWindow.style.opacity 					= "0"; // скрываем элемент
				signInWindowHeader.style.opacity 			= "1"; // делаем видимым

				setTimeout(function() {
					signInWindowHeader.style.transform 		= "translate(0, 0)"; // выводим на экран
					signUpWindow.style.transform 			= "translate(0, -200%)"; // выносим за экран
				}, 302); // задержка в 302мс
			});
		},
	};

	Data.generalFuntion();
});