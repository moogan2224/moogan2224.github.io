// get slideshow area from galleryImg container
const galleryContainer = document.querySelector('.galleryImg');
const forwardButton = document.querySelector('[data-js="forwardButton"]');
const backButton = document.querySelector('[data-js="backButton"]');

// console.log(galleryImg);

if(galleryContainer){
	$(galleryContainer).slick({
		slidesToShow: 1,
		prevArrow:$(backButton),
		nextArrow:$(forwardButton),
	});

}