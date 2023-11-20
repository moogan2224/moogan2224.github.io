// get slideshow area from galleryImg container
const galleryContainer = document.querySelector('.galleryImg');
const galleryContainerSmall = document.querySelector('.galleryGrid');
console.log(galleryContainerSmall);
const forwardButton = document.querySelector('[data-js="forwardButton"]');
const backButton = document.querySelector('[data-js="backButton"]');

// console.log(galleryImg);

if(galleryContainer){
	$(galleryContainer).slick({
		slidesToShow: 1,
		prevArrow:$(backButton),
		nextArrow:$(forwardButton),
		asNavFor: galleryContainerSmall 
	});	
	$(galleryContainerSmall).slick({
		slidesToShow: 1,
		asNavFor: galleryContainer,
		dots: true,
		focusOnSelect: true,
	});

}