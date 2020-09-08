window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// jquery 
	$('.carusel').slick();

	let phone 		= document.querySelector('span'),
		layout		= document.querySelector('.layout'), 
		closeWindow	= document.querySelector('.btn-close-window'),
		modalNumber	= document.querySelector('.numbers-modal-window');

	phone.addEventListener('click', function() {
		layout.style.display 			= "block";
		modalNumber.style.transform 	= "translate(0 ,0)";

		setTimeout(function() {
			modalNumber.style.opacity 	= 1;
		}, 302);
	});

	closeWindow.addEventListener('click', function() {
		layout.style.display 				= "none";
		modalNumber.style.opacity 			= 0;

		setTimeout(function() {
			modalNumber.style.transform 	= "translate(0%, -200%)";
		}, 302);
	});
});