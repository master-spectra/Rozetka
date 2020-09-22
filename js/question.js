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

		// form и её элементы
		btnShowPass 			= document.querySelector('.btn-show-pass'),
		spanShowPass 			= document.querySelector('.eye'),
		btns 					= document.querySelector('.btns'),
		btnCity 				= document.querySelectorAll('.btn-city'),
		btnSignRedirect 		= document.querySelector('.sign-in-redirect'),
		fieldSignIn				= document.querySelectorAll('.field-sign-in'),
		fieldSignUp				= document.querySelectorAll('.field-sign-up'),
		warningMassegeSign		= document.querySelectorAll('.warning-messege-sign'),
		formSign 				= document.querySelectorAll('.form-sign'),
		applySetting			= document.querySelector('.ready'),
		inputCity 				= document.querySelector('.city-input'),
		signUpBtn				= document.querySelectorAll('.sign-up-button'),
		signInBtn				= document.querySelectorAll('.sign-in-button'),

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
								// скрываем окна
								elem.style.transform 	= "translate(0, -200%)";
								elem.style.opacity 		= "0";
							});

							layout.classList.add('active-layout'); //выводим layout
							windowSpecial[i].style.transform = "translate(-50%, 0%)"; // выводим окно 
							
							setTimeout(function() {
								windowSpecial[i].style.opacity 		= "1"; // делаем окно видимым
							}, 302);
						}
					}
				});
			});

			// добавляем событие для открытие каталога
			btnShowCatalog.addEventListener('click', function() {
				if (getComputedStyle(catalogMenu).opacity == "1") { // проверяем по условию стиль элемента
					layout.classList.remove('catalog-mode'); // удаляем класс
					catalogMenu.style.opacity 	= "0"; // скрываем элемент
					
					setTimeout(function() {
						contentPage.classList.remove('special'); // удаляем класс
						catalogMenu.style.transform = "translate(0, -200%)"; // выносим за экран 
					}, 510);
				} else {
					contentPage.classList.add('special'); // добавляем класс
					layout.classList.add('catalog-mode'); // добавляем класс

					// выводим на экран
					catalogMenu.style.transform = "translate(0, 0%)"; 
					catalogMenu.style.top 		= "0"; 

					setTimeout(function() {
						catalogMenu.style.opacity = "1"; // делаем видимым 
					}, 400);
				};
			});

			// используем дилегирование
			headerMenu.addEventListener('mouseover', function(e) { // используе делигирование 
				if (e.target && e.target.classList.contains('btn-menu')) { // проверяем что событие происходит иммено на кнопках
					let targets = e.target; // записоваем цель в переменную
					
					for (let i = 0; i < btnHeaderMenu.length; i++) { // перебираем массив с кнопками 
						if (targets == btnHeaderMenu[i]) { // проверяем цель с кнопкой
							downList.forEach(function(elem) { // перебираем массив  с выподающими списками
								// скрываем элемент
								elem.style.opacity 		= "0";
								elem.classList.remove('active-lists');
							});

							// выводим элемент
							downList[i].classList.add('active-lists');

							setTimeout(function() {
								downList[i].style.opacity = "1";								
							}, 302); // задержка в 302мс
						}
					}
				};
			});

			// добавляем событие на  ссылку
			btnMenuVersus.addEventListener('click', function() {
				// делаем видимыми элементы
				layout.classList.add('active-layout');
				versusList.style.transform = "translate(50%, 0)";

				setTimeout(function() {
					versusList.style.opacity = "1";
				}, 302); // задежка в 302мс
			});

			// добавляем событие на ссылку
			btnSignRedirect.addEventListener('click', function(e) {
				e.preventDefault(); // отключаем стандартное повидение браузера
				layout.classList.add('active-layout'); // делаем видимым элемент
				signInWindowHeader.style.transform = "translate(-50%, 0)"; // выводим на экран
				
				setTimeout(function() {
					signInWindowHeader.style.opacity = "1"; // делаем видимым элемент
				}, 302); // задержка в 302мс
			});

			btnHeaderMenu[2].addEventListener('click', function() {
				// делаем видимыми элементы
				layout.classList.add('active-layout');
				basketWindow.style.transform 	= "translate(50%, 0)";

				setTimeout(function() {
					basketWindow.style.opacity = "1";
				}, 302); // задежка в 302мс
			});

			// создаем анонимную функцию
			let hideLists = () => { 
				downList.forEach(function(elem) { // перебираем массив с выпадающими списками
					elem.addEventListener('mouseleave', function(e) { // каждому выпадающими списками добавляем событие 
						// скрываем элемент
						elem.style.opacity 	= "0";
						elem.classList.remove('active-lists');
					});
				});

				document.addEventListener('click', function(e) {
					if (e.target && e.target.classList.contains('lists') == false && e.target.classList.contains('lists-child') == false) { // проверяем по условию событие
						downList.forEach(function(elem) { // перебираем массив с выпадающими списками
							// скрываем элемент
							elem.style.opacity 	= "0";
							elem.classList.remove('active-lists');
						});
					}
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
							elem.style.opacity 		= "0"; // скрываем каждое окно
							layout.classList.remove('active-layout');
							layout.classList.remove('catalog-mode'); // удаляем класс catalog-menu
							
							setTimeout(function() {
								contentPage.classList.remove('special'); 
								elem.style.transform = "translate(0, -200%)"; // выносим за экран	
							}, 400); // задержка в 400мс
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
						item.style.opacity = "0"; // скрываем каждое окно

						setTimeout(function() {
							item.style.transform = "translate(0, -200%)"; // выносим за экран	
						}, 400); // задержка в 400мс
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
				selectorCity.textContent 		= `Город ${t.textContent}`; // добавляем город в спан из кнопки
				modalWindowCity.style.opacity 	= '0'; // скраваем элемент
				layout.classList.remove('active-layout'); // скраваем элемент

				setTimeout(function() {
					modalWindowCity.style.transform 		= "translate(0, -200%)"; // выносим ха экран элемент 
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
						layout.classList.remove('active-layout'); // скраваем элемент

						setTimeout(function() {
							signInWindowHeader.style.transform 		= "translate(0, -200%)"; // выносим за экран
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
					signInWindowHeader.style.transform 		= "translate(0, -200%)"; // скрываем элемент
					signUpWindow.style.opacity 				= "1"; // делаем видимым элемент
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
					if (elem.value.length < 3 ||fieldSignUp[3].value.length < 7 || fieldSignUp[2].value.length < 9) { // проверяме по условию input
						warningMassegeSign[1].style.display 		= "block"; // делаем видимым 
						warningMassegeSign[1].textContent 			= 'Введите 4 или более символов, но для пароля 8, и более'; // добавляем текст в warning
					} else if (elem.value.length > 3 && fieldSignUp[3].value.length > 7 && fieldSignUp[2].value.length > 9) { // проверяем по условию Input
						warningMassegeSign[1].textContent 	= null;
						signUpWindow.style.opacity 			= "0"; // скрываем элемент
						layout.classList.remove('active-layout'); // скраваем элемент

						setTimeout(function() {
							signUpWindow.style.transform 				= "translate(0, -200%)"; // выводим на экран
						}, 302); // задержка в 302мс

						setTimeout(function() {
							formSign[0].reset(); // очищаем форму
						}, 302); // задержку в 302мс
					}
				});
			});

			// показываем окно входа
			signUpBtn[1].addEventListener('click', function() {
				signUpWindow.style.opacity 					= "0"; // скрываем элемент
				signInWindowHeader.style.transform 			= "translate(-50%, 0)"; // выводим на экран

				setTimeout(function() {
					signUpWindow.style.transform 				= "translate(0, -200%)"; // выносим за экран
					signInWindowHeader.style.opacity 			= "1"; // делаем видимым
				}, 302); // задержка в 302мс
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
						selectorError.setAttribute('disabled', 'disabled'); // выключаем select
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
						selectorError.setAttribute('disabled', 'disabled');// меняем фон checkbox
					}
				});
			};

			checkboxTest();
		},
	};

	page.header();
	page.sideBar();
	page.contentQuestionPage();
});