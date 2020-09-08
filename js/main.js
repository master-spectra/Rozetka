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
	let phone 				= document.querySelector('span'),
		spanCity 			= document.querySelector('.select-city'),
		layout				= document.querySelector('.layout'), 
		btns 				= document.querySelector('.btns'),
		btnCity 			= document.querySelectorAll('.btn-city'),
		fieldSignIn			= document.querySelectorAll('.field-sign-in'),
		warningMassege		= document.querySelector('.warning-messege'),
		inputCity 			= document.querySelector('.city-input'),
		btnSignInheader		= document.querySelector('.sign-in-header'),
		applySetting		= document.querySelector('.ready'),
		closeWindow			= document.querySelectorAll('.btn-close-window'),
		formBtn				= document.querySelectorAll('.form-button'),
		signInWindowHeader	= document.querySelector('.sign-in-window'),
		modalCity 			= document.querySelector('.select-city-window'),
		modalNumber			= document.querySelector('.numbers-modal-window');

	let t;

	phone.addEventListener('click', function() {
		layout.style.display 			= "block";
		modalNumber.style.transform 	= "translate(-43%, 0)";

		setTimeout(function() {
			modalNumber.style.opacity 	= 1;
		}, 302);
	});

	closeWindow.forEach(function(elem) {
		elem.addEventListener('click', function() {
			layout.style.display 				= "none";
			modalNumber.style.opacity 			= '0';
			modalCity.style.opacity 			= '0';
			signInWindowHeader.style.opacity 		= "0";

			setTimeout(function() {
				modalNumber.style.transform 	= "translate(0%, -200%)";
				modalCity.style.transform 		= "translate(0, -200%)";
				signInWindowHeader.style.transform = "translate(0, -200%)"
			}, 302);
		});
	});

	spanCity.addEventListener('click', function() {
		layout.style.display 			= "block";
		modalCity.style.transform 		= "translate(-43%, 0)";

		setTimeout(function() {
			modalCity.style.opacity 	= '1';
		}, 302);
	});

	btns.addEventListener('click', function(e) {
		t = e.target;

		if (e.target && e.target.classList.contains('btn-city')) {
			btnCity.forEach(function(elem) {
				elem.style.border = "0";
			});

			t.style.border 	= "1px solid #00a046";
			inputCity.value = t.textContent;
		}
	});

	applySetting.addEventListener('click', function() {
		spanCity.textContent = `Город ${t.textContent}`;
		layout.style.display 				= "none";
		modalCity.style.opacity 			= '0';

		setTimeout(function() {
			modalCity.style.transform 		= "translate(0, -200%)";
		}, 302);
	});

	btnSignInheader.addEventListener('click', function() {
		layout.style.display 					= "block";
		signInWindowHeader.style.transform 		= "translate(0, 0)";
		
		setTimeout(function() {
			signInWindowHeader.style.opacity = "1";
		}, 302);
	});

	formBtn[0].addEventListener('click', function() {
		fieldSignIn.forEach(function(elem) {
			if (elem.value < 7) {
				warningMassege.style.display 	= "block";
				warningMassege.textContent 		= 'Введите 8 или более символов'
			} else {
				layout.style.display 					= "none";
				signInWindowHeader.style.opacity 		= "0";

				setTimeout(function() {
					signInWindowHeader.style.transform 		= "translate(0, -200%)";
				}, 302);
			}
		});
	});
});