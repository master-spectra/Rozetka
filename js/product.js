window.addEventListener('DOMContentLoaded', function() {
	let slider = () => {
		$('.carusel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
		});

		$('.list-top-product').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
		});
	};

	slider();
});