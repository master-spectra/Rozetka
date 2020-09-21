window.addEventListener('DOMContentLoaded', function() {
	'use strict';
	// jQuery
	let slider = () => {
		$('.carusel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
		});
	};

	// JS
	let // Добавляем переменные
 
		// Header
		btnOpenWindows 			= document.querySelectorAll('.btn-open-window'),
		windowSpecial 			= document.querySelectorAll('.window-special'),
		selectorCity 			= document.querySelector('.select-city'),
		headerMenu 				= document.querySelector('.menu'),
		downList 				= document.querySelectorAll('.lists'),
		btnHeaderMenu 			= document.querySelectorAll('.btn-menu'),
		btnMenuVersus 			= document.querySelector('.btn-menu-versus'),
		btnShowCatalog 			= document.querySelector('.btn-show-catalog'),


		// side-bar
		btnSignInSideBar 		= document.querySelector('.btn-sign-in'),
		sideBarSelectorCity		= document.querySelector('.side-bar-select-city'),
		selectCityList 			= document.querySelector('.select-city-list'),
		address 				= document.querySelectorAll('.address-text'),
		city 					= document.querySelectorAll('.city'),

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

		// табы
		tabs 					= document.querySelector('.tabs'),
		tab 					= document.querySelectorAll('.tab'),
		tabConteiner 			= document.querySelectorAll('.tab-conteiner'),

		// другое 
		layout					= document.querySelector('.layout'), 
		closeWindow				= document.querySelectorAll('.btn-close-window'),
		closeAllWindow 			= document.querySelectorAll('.close-all-window'),
		contentPage				= document.querySelector('.content-page'),
		t;

	let page = { // используем инкапсуляцию 
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
							windowSpecial[i].style.transform 	= "translate(-50%, 0%)"; // выводим окно 
							
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
					contentPage.classList.remove('special'); // удаляем класс
					layout.classList.remove('catalog-mode'); // удаляем класс
					catalogMenu.style.opacity 	= "0"; // скрываем элемент
					
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
			btnSignInSideBar.addEventListener('click', function() {
				layout.classList.add('active-layout'); // делаем видимым элемент
				signInWindowHeader.style.transform = "translate(-50%, 0)"; // выводим на экран
				
				setTimeout(function() {
					signInWindowHeader.style.opacity = "1"; // делаем видимым элемент
				}, 302);  // задержку в 302мс
			});

			sideBarSelectorCity.addEventListener('click', function() {
				selectCityList.style.display = "block"; // делаем видимым элемент

				setTimeout(function() {
					selectCityList.style.opacity = "1"; // делаем видимым элемент
				}, 302); // задержка в 302мс
			});

			city.forEach(function(elem) { // перебраем массив 
				elem.addEventListener('click', function(e) { // каждому элементу добавляем событие
					if (e.target.textContent == "Киев") { // проверяем по условию 
						// выводим соответсвущии значения
						address[0].textContent = "пр-т. С. Бандеры, 6"; 
						address[1].textContent = "ул. Крещатик, 20-22";
						address[2].textContent = "ул. Киото, 25";
						address[3].textContent = "пр-т. Победы, 24";
							
						// делаем видимыми элементы
						address[0].style.display = "block";
						address[1].style.display = "block";
						address[2].style.display = "block"
						address[3].style.display = "block";
					} else if (e.target.textContent == "Одесса") {  // проверяем по условию 
						// выводим соответсвущии значения
						address[0].textContent = "пер. Семафорный, 4Т";
						address[1].textContent = "ул. Ивана и Юрия Лип, 13А";
						address[2].textContent = "ул. Академика Сахарова, 1Б";
						address[3].textContent = "пр-т. Академика Глушко, 17";
						
						// делаем видимыми элементы
						address[0].style.display = "block";
						address[1].style.display = "block";
						address[2].style.display = "block"
						address[3].style.display = "block";
					} else if (e.target.textContent == "Харьков") { // проверяем по условию 
						// выводим соответсвущии значения
						address[0].textContent = "ул. Героев Труда, 29Г";
						address[1].textContent = "ул. Полтавский Шлях, 140А";
						address[2].textContent = "ул. Нетеченская, 25";

						// делаем видимыми элементы
						address[0].style.display = "block";
						address[1].style.display = "block";
						address[2].style.display = "block"

						address[3].style.display = "none"; // скрываем элемент
					} else if (e.target.textContent == "Львов") {  // проверяем по условию 
						// выводим соответсвущии значения
						address[0].textContent = "ул. Кульпарковская, 226А";
						address[1].textContent = "ул. Гетьмана Мазепы, 1Б";
						address[2].textContent = "пр-т. Красной Калины, 36";
						
						// делаем видимыми элементы
						address[0].style.display = "block";
						address[1].style.display = "block";
						address[2].style.display = "block"
				
						address[3].style.display = "none"; // скрываем элемент
 					} else if (e.target.textContent == "Херсон") { // проверяем по условию 
						address[0].textContent = "Запорожское шоссе, 2"; // выводим соответсвущии значения 
						address[0].style.display = "block"; // делаем видимыми элементы

						// скрываем элемент
						address[1].style.display = "none";
						address[2].style.display = "none"
						address[3].style.display = "none";
					};

					sideBarSelectorCity.textContent = elem.textContent; // добавялем значение того элемента на который нажали
					selectCityList.style.opacity 	= "0"; // скрываем список
 
					setTimeout(function() {
					 	selectCityList.style.display = "none"  // скрываем список
					}, 302); // задежка в 302мс 
				});
			});
		},

		contentMainPage: () => {
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
				
				// скраваем элемент
				layout.classList.remove('active-layout');

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
					fieldSignUp[3].type = "text"; // переводим его в тип text
					spanShowPass.classList.remove('fa-eye'); // добавляем класс
					spanShowPass.classList.add('fa-eye-slash'); // удаляем класс
				} else {
					fieldSignUp[3].type = "password"; // переводим его тип в password
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
						warningMassegeSign[1].textContent = null;
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

			// табы 
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
		}
	};

	// вызываем функции
	page.header();
	page.sideBar();
	page.contentMainPage();
	slider();
});