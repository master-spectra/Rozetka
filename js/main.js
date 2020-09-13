// нужно решить момент с навединием на кнопку 

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
	let Data = { // используем инкапсуляцию 
		generalFuntion() {
			// Добавляем переменные
			let 
				// Header
				phone 					= document.querySelector('span'),
				spanCity 				= document.querySelector('.select-city'),
				menu 					= document.querySelector('.menu'),
				listsMenu 				= document.querySelectorAll('.lists'),
				btnMenu 				= document.querySelectorAll('.btn-menu'),
				btnSignHeader			= document.querySelector('.sign'),
				btnShowCatalog 			= document.querySelector('.btn-show-catalog'),

				// Modal-window
				catalogMenu				= document.querySelector('.catalog-menu'),
				windows 				= document.querySelectorAll('.window'),
				signInWindowHeader		= document.querySelector('.sign-in-window'),
				signUpWindow			= document.querySelector('.sign-up-window'),
				modalCity 				= document.querySelector('.select-city-window'),
				modalNumber				= document.querySelector('.numbers-modal-window'),

				// form and her elements
				btnShowPass 			= document.querySelector('.btn-show-pass'),
				spanShowPass 			= document.querySelector('.eye'),
				btns 					= document.querySelector('.btns'),
				btnCity 				= document.querySelectorAll('.btn-city'),
				fieldSignIn				= document.querySelectorAll('.field-sign-in'),
				fieldSignUp				= document.querySelectorAll('.field-sign-up'),
				warningMassegeSignIn	= document.querySelector('.warning-messege-sign-in'),
				formSign 				= document.querySelectorAll('.form-sign'),
				applySetting			= document.querySelector('.ready'),
				inputCity 				= document.querySelector('.city-input'),
				warningMassegeSignUp	= document.querySelector('.warning-messege-sign-up'),
				signUpBtn				= document.querySelectorAll('.sign-up-button'),
				signInBtn				= document.querySelectorAll('.sign-in-button'),

				// tabs
				tabs 					= document.querySelector('.tabs'),
				tab 					= document.querySelectorAll('.tab'),
				tabConteiner 			= document.querySelectorAll('.tab-conteiner'),

				// other 
				layout					= document.querySelector('.layout'), 
				closeWindow				= document.querySelectorAll('.btn-close-window'),
				closeAllWindow 			= document.querySelectorAll('.close-all-window'),
				contentPage				= document.querySelector('.content-page');
				
			// добавляем тех.переменную
			let t;

			menu.addEventListener('mouseover', function(e) { // используе делигирование 
				if (e.target && e.target.classList.contains('btn-menu')) { // проверяем что событие происходит иммено на кнопках
					let targets = e.target; // записоваем цель в переменную
					
					for (let i = 0; i < btnMenu.length; i++) { // перебираем массив с кнопками 
						if (targets == btnMenu[i]) { // проверяем цель с кнопкой
							listsMenu.forEach(function(elem) { // перебираем массив  с выподающими списками
								// скрываем элемент
								elem.style.opacity 		= "0";
								elem.style.display 		= "none";
								elem.style.transform	= "translate(0, -400%)";
							});

							// выводим элемент
							listsMenu[i].style.display 		= "flex";
							listsMenu[i].style.transform 	= "translate(0, 0)";

							setTimeout(function() {
								listsMenu[i].style.opacity = "1";								
							}, 500); // задержка в 500мс
						}
					}
				}
			});

			// создаем анонимную функцию
			let hideLists = () => {
				listsMenu.forEach(function(elem) { // перебираем массив с выпадающими списками
					elem.addEventListener('mouseleave', function(e) { // каждому выпадающими списками добавляем событие 
						// скрываем элемент
						elem.style.opacity 		= "0";
						elem.style.display 		= "none";
						elem.style.transform	= "translate(0, -400%)";
					});
				});
			};

			hideLists(); // вызываем функцию

			closeAllWindow.forEach(function(item) { // перебираем массив 
				item.addEventListener('click', function(e) { // каждому элементу даем событие клик
					windows.forEach(function(elem) { // перебираем массив с модальными окнами
						if (getComputedStyle(elem).opacity == "1") { // получаем стиль из модального окна 
							layout.style.display = "none"; // скрываем layout
							elem.style.opacity = "0"; // скрываем каждое окно
							
							layout.classList.remove('catalog-mode'); // удаляем класс catalog-menu
							contentPage.classList.remove('special'); // удаляем класс special

							setTimeout(function() {
								elem.style.transform = "translate(0, -200%)"; // выносим за экран	
							}, 400); // задержка в 400мс
						}
						
					});
				});
			});

			phone.addEventListener('click', function() {
				layout.style.display 			= "block"; // делаем видимым
				modalNumber.style.transform 	= "translate(-54%, 0)"; // центрируем

				setTimeout(function() {
					modalNumber.style.opacity 	= 1; // делаем видимым
				}, 302); // делаем задержку в 302мс
			});

			closeWindow.forEach(function(elem) { // получаем каждую кнопку из массива 
				elem.addEventListener('click', function() { // присваеваем к кнопке событие 
					windows.forEach(function(item) { // перебираем массив с модальными окнами
						layout.style.display = "none"; // скрываем layout
						layout.classList.remove('catalog-mode'); // удаляем класс catalog-menu
						contentPage.classList.remove('special'); // удаляем класс special
						item.style.opacity = "0"; // скрываем каждое окно

						setTimeout(function() {
							item.style.transform = "translate(0, -200%)"; // выносим за экран	
						}, 400); // задержка в 400мс
					});
				});
			});

			spanCity.addEventListener('click', function() {
				layout.style.display 			= "block"; // делаем видимым элемент
				modalCity.style.transform 		= "translate(-37%, 0)"; // центрируем

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
				spanCity.textContent = `Город ${t.textContent}`; // добавляем город в спан из кнопки 0
				layout.style.display 				= "none"; // скраваем элемент
				modalCity.style.opacity 			= '0'; // скраваем элемент

				setTimeout(function() {
					modalCity.style.transform 		= "translate(0, -200%)"; // выносим ха экран элемент 
				}, 302); // задежка в 302мс
			});

			btnSignHeader.addEventListener('click', function() {
				layout.style.display 						= "block"; // делаем видимым элемент
				signInWindowHeader.style.transform 			= "translate(-50%, 0)"; // выводим на экран
				
				setTimeout(function() {
					signInWindowHeader.style.opacity = "1"; // делаем видимым элемент
				}, 302);
			});

			signInBtn[0].addEventListener('click', function() {
				fieldSignIn.forEach(function(elem) { // перебираем массив
					if (elem.value.length < 7) { // если меньше 7 символов то выбьет предупреждение 
						warningMassegeSignIn.style.display 	= "block"; // делаем видимым 
						warningMassegeSignIn.textContent 	= 'Введите 8 или более символов'; // добавляем текст в warning
					} else if (elem.value.length > 7){
						warningMassegeSignIn.textContent 	= null; // убираем текст в warning
						layout.style.display 				= "none"; // скрываем элемент
						signInWindowHeader.style.opacity 	= "0"; // скрываем элемент

						setTimeout(function() {
							signInWindowHeader.style.transform 		= "translate(0, -200%)"; // выносим за экран
						}, 302); // задержка в 302мс
						
						setTimeout(function() {
							formSign[0].reset(); // очищаем форму
						}, 500); // задержку в 500мс
					};
				});
			});

			signInBtn[1].addEventListener('click', function() {
				signInWindowHeader.style.opacity 		= "0"; // скрываем элемент
				signUpWindow.style.transform 			= "translate(-52%, 0)"; // скрываем элемент

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
					if (elem.value.length < 3 ||fieldSignUp[3].value.length < 7 || fieldSignUp[2].value.length < 9) { // проверяме по условию input
						warningMassegeSignUp.style.display 		= "block"; // делаем видимым 
						warningMassegeSignUp.textContent 		= 'Введите 4 или более символов, но для пароля 8, и более'; // добавляем текст в warning
					} else if (elem.value.length > 3 && fieldSignUp[3].value.length > 7 && fieldSignUp[2].value.length > 9) { // проверяем по условию Input
						warningMassegeSignUp.textContent = null;
						layout.style.display 						= "none"; // делаем видимым элемент
						signUpWindow.style.opacity 					= "0"; // скрываем элемент

						setTimeout(function() {
							signUpWindow.style.transform 				= "translate(0, -200%)"; // выводим на экран
						}, 302); // задержка в 302мс

						setTimeout(function() {
							formSign[0].reset(); // очищаем форму
						}, 500); // задержку в 500мс
					}
				});
			});

			signUpBtn[1].addEventListener('click', function() {
				signUpWindow.style.opacity 					= "0"; // скрываем элемент
				signInWindowHeader.style.transform 			= "translate(-50%, 0)"; // выводим на экран

				setTimeout(function() {
					signUpWindow.style.transform 				= "translate(0, -200%)"; // выносим за экран
					signInWindowHeader.style.opacity 			= "1"; // делаем видимым
				}, 302); // задержка в 302мс
			});

			btnShowCatalog.addEventListener('click', function() {
				if (getComputedStyle(catalogMenu).opacity == "1") { // проверяем по условию стиль элемента
					contentPage.classList.remove('special'); // удаляем класс
					layout.classList.remove('catalog-mode'); // удаляем класс
					catalogMenu.style.opacity = "0"; // скрываем элемент
					
					setTimeout(function() {
						catalogMenu.style.transform = "translate(0, -200%)"; // выносим за экран 
					}, 510);
				} else {
					contentPage.classList.add('special'); // добавляем класс
					layout.classList.add('catalog-mode'); // добавляем класс
					catalogMenu.style.transform = "translate(0, 0%)" // выводим на экран 

					setTimeout(function() {
						catalogMenu.style.opacity = "1"; // делаем видимым 
					}, 400);
				};
			});


			tabs.addEventListener('mouseover', function(e) {
				if (e.target && e.target.classList.contains('tab')) {
					let target = e.target; // получаем элемент на который нажали

					for (let i = 0; i < tab.length; i++) { // перебираем массив с табам
						if (target == tab[i]) { // если элемент на которы нажали совпадает с тем который есть в массив...
							tabConteiner.forEach(function(elem) {   // перебираю массив с tabConteiner
								elem.classList.remove('active');	// удаляю класс active
							});

							tabConteiner[i].classList.add('active'); // добавляю класс active элементу который мы вызвали
						}
					}
				}
			});
		},
	};

	Data.generalFuntion(); // Вызываем функцию в объекте 
});