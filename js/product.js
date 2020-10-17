window.addEventListener('DOMContentLoaded', function() {
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

		// product
		listTopProductItem		= document.querySelectorAll('.list-top-product-item'),
		imgProdcutItem			= document.querySelectorAll('.img-product-item'),

		// аккордион 
		tabContent 				= document.querySelectorAll('.category-filter'),
		iconArrow 				= document.querySelectorAll('.icon-arrow'),
		accordionItem 			= document.querySelectorAll('.accordion-item'),
		link 					= document.querySelectorAll('.link'),

		// другое 
		layout					= document.querySelector('.layout'), 
		closeWindow				= document.querySelectorAll('.btn-close-window'),
		closeAllWindow 			= document.querySelectorAll('.close-all-window'),
		contentPage				= document.querySelector('.content-page'),
		t;

	let page  = { 
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
					catalogMenu.classList.remove('animate-special');
				} else {
					// добавляем класс
					contentPage.classList.add('special'); 
					layout.classList.add('catalog-mode');

					setTimeout(function() {
						catalogMenu.classList.add('animate-special'); // выводим каталог
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

		sidePanel: ()	=> {
			tabContent.forEach(function(elem) { // перебираем массив с tab-content 
				elem.addEventListener('click', function(e) { // навешиваем каждому элементу событие
					if (e.target && e.target.classList.contains('link')) { // проверяем о условию
						let target = e.target; // создаем переменную и вписываем туда кнопку

						for (let i = 0; i < link.length; i++) { // перебираем массив с tab-content 
							if (target == link[i]) { // проверяем по условию
								accordionItem[i].classList.toggle('hide');
								iconArrow[i].classList.toggle('rotate-arrow');
							}
						}
					}
				});
			});
		},	

		contentMainPage: () => {
			closeAllWindow.forEach(function(item) { // перебираем массив 
				item.addEventListener('click', function() { // каждому элементу даем событие клик
					modalWindows.forEach(function(elem) { // перебираем массив с модальными окнами
						if (getComputedStyle(elem).opacity == "1") { // получаем стиль из модального окна 
							catalogMenu.style.display = "none"; // скрываем элемент

							// удаляем классы
							elem.classList.remove('animate');
							layout.classList.remove('active-layout');
							layout.classList.remove('catalog-mode');
							contentPage.classList.remove('special');
							elem.classList.remove('animate-special');
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
						item.classList.remove('animate-special'); // скрываем каждое окно
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
				layout.classList.remove('active-layout'); // скраваем элемент
				modalWindowCity.classList.remove('animate');
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
						signInWindowHeader.classList.remove('animate'); // удаляем класс
						
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
						warningMassegeSign[1].textContent 	= null;
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
				signUpWindow.classList.remove('animate'); // удаляем предыдущее окно
				signInWindowHeader.classList.add('animate'); // выводим на экран
			});	
		}
	};

	page.header();
	page.sidePanel();
	page.switchImage();
	page.contentMainPage();
});