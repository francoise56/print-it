const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
console.log(slides[1].tagLine)
//let arrow = document.createElement("div");
//let parentElement = document.getElementById("banner");
//arrow.setAttribute("class", "arrow");
//parentElement.appendChild(arrow);
//console.log(arrow);

//let arrow_left = document.createElement("img");
//arrow_left.src = "./assets/images/arrow_left.png";
//let src = document.querySelector(".arrow");
//arrow_left.setAttribute("class", "arrow_left");
//arrow_left.setAttribute("alt", "flèche dirigée vers la gauche");
//arrow.appendChild(arrow_left);
//console.log(arrow_left);

//let arrow_right = document.createElement("img");
//arrow_right.src = "./assets/images/arrow_right.png";
//src = document.querySelector(".arrow");
//arrow_right.setAttribute("class", "arrow_right");
//arrow_right.setAttribute("alt", "flèche dirigée vers la droite");
//arrow.appendChild(arrow_right);
//console.log(arrow_right);

//arrow_left = document.querySelector("#banner .arrow_left");
//console.log(arrow_left);
//arrow_left.addEventListener("click", Function carouselDecroissant(){
//})


//objects
const banner = document.getElementById("banner");
const bannerImg = document.querySelector('.banner-img');
const bannerTxt = document.querySelector('#banner p');

// créer une const dots pour l'utiliser dans notre boucle plus bas
const arrowLeft = document.createElement("div");
const arrowRight = document.createElement("div");
const arrowLeftPicture = document.createElement("img");
const arrowRightPicture = document.createElement("img");

//let dot = document.querySelector(".dot");
//dot1 = document.createElement("div");
//let dots = document.querySelector(".dots");
//dots = document.createElement("ol");
let dot_selected = document.querySelector(".dot_selected");
//dot_selected = document.createElement("div");
//let fullDot = document.createElement("div");
//let dot2 = document.createElement("div");
//let dot3 = document.createElement("div");

//const imageSlideshow = document.createElement("table");
//const slide1 = document.createElement("img");
//const slide2 = document.createElement("img");
//const tagline1 = document.createElement("p");

// Init arrows
arrowLeft.setAttribute("class", "arrow arrow_left");
arrowRight.setAttribute("class", "arrow arrow_right");

//init dots
//dot1.setAttribute("class", "dot");
//dot2.setAttribute("class", "dot");
//dot3.setAttribute("class", "dot");
//dot_selected.setAttribute("class", "dot_selected");
//fullDot.setAttribute("class", "dot dot_selected");

//init slides
//imageSlideshow.setAttribute("class", "slideshow");
//slide1.setAttribute("class", "slides");
//slide1.setAttribute("tagline","Impressions tous formats <span>en boutique et en ligne</span>")
//slide2.setAttribute("class", "slides");

// Insert arrows pictures
arrowLeftPicture.src = "./assets/images/arrow_left.png";
arrowRightPicture.src = "./assets/images/arrow_right.png";

arrowLeftPicture.setAttribute("alt", "flèche dirigée vers la gauche");
arrowRightPicture.setAttribute("alt", "flèche dirigée vers la droite");

// Pictures placement
arrowLeft.appendChild(arrowLeftPicture);
arrowRight.appendChild(arrowRightPicture);

// Arrows placement
banner.appendChild(arrowLeft);
banner.appendChild(arrowRight);

// Declare cursor position
let cursor = 0;
let i = 0;

let dot = document.querySelector(".dot");
let dots = document.querySelector(".dots");
//dots placement
//dots.appendChild(dot);
//dots.appendChild(dot2);
//dots.appendChild(dot3);
//dots.appendChild(dot_selected);
//dot_selected.appendChild(fullDot);

//console.log(dot2)
//console.log(dot3)
//console.log(dot1)
//console.log(dot_selected)

//imagesSlideshow placement
//banner.appendChild(imageSlideshow);
//banner.appendChild(slide1);
//imageSlideshow.appendChild(slide1);
//imageSlideshow.appendChild(slide2);
//banner.appendChild(slide1);
//banner.appendChild(slide2);
//banner.appendChild(tagline1);

//let dot = document.querySelector(".dot");
//let dots = document.querySelector(".dots");
//dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {	
	dot = document.createElement("div");
	banner.appendChild(dots);
	dots.appendChild(dot);
	dot.setAttribute("class", "dot");		
}

//Listen Arrows Click Events
arrowRight.addEventListener('click', function () { 
	cursor++;
    if (cursor > slides.length - 1) {
        cursor = 0;
    }

    updateSlides(cursor);	
		
});
arrowLeft.addEventListener('click', function (){ 
	cursor--;
    if (cursor < 0) {
        cursor = slides.length - 1;
    }
	updateSlides(cursor);
	updateDot(cursor);

	//let dotActive = document.getElementsByClassName("dot_selected");
	//dotActive = dot(cursor);
	//if (dot(cursor) === slides(cursor)) {
	//dot.className. toogle("dot_selected");				
	//}
	
});

function updateSlides(cursor){
    bannerImg.src = './assets/images/slideshow/' + slides[cursor].image;
	bannerTxt.innerHTML = slides[cursor].tagLine;
	//dot[i].classList = dot[i].classList.replace("dot_selected", "");
	}

function updateDot(cursor) {
	let dot_selected = document.getElementsByClassName("dot_selected");
	dot_selected = document.createElement("div");
	dot_selected.setAttribute("class", "dot_selected");
	let dotActive = document.getElementsByClassName("dot_selected");
	dotActive = dot[cursor];
	if (dot[i] === slides[cursor]) {
		//dot.className. toogle("dot_selected");
		cursor[0] = cursor[0].replace("dot_selected", "dot");
	
	}
				
}
// Init dots
/**
 * Récupérer la longueur de l'objet slides
 * Faire une boucle de 'let i' allant de 0 à cette longueur
 * A chaque itération de la boucle, il faudra créer et ajouter un .dot dans .dots (qui est déjà dans index.html)
 */

/**
 * Parcourir à travers une boucle le tableau "slides"
 * Pour récupérer l'enfant à chaque itération de la boucle
 * Afin de placer la propriété "image" et la propriété "tagLine" au bon endroit
 */
	
	
	
//console.log(slides[0])
//console.log(slides[1])
//console.log(slides[2])
//console.log(slides[3])

//slides[0].setAttribute = ("src", "assets/images/slideshow/slide1.jpg");
//slides[1].setAttribute = ("src", "assets/images/slideshow/slide2.jpg");
//slides[2].setAttribute = ("src", "assets/images/slideshow/slide3.jpg");
//slides[3].setAttribute = ("src", "assets/images/slideshow/slide4.jpg");
//console.log(slides[2])

//dots.addEventListener("click", function () {
	//dots = dot_selected;
	//alert('ok')
//});
//console.log(dot)

//for (let i = 0; i < slides.length; i++){
	//let nextImage = slides[i+1];
	//let nextTagline = slides.tagLine;
	//let nextSlide = nextImage + nextTagline;
		//return nextImage
	//console.log(nextImage)
	//console.log(nextTagline)
//}
//arrowRight.addEventListener('click', function () { 
	//for (let i = 0; i < slides.length; i++) {
		//let nextImage = slides[i];
		//let nextTagline = slides.tagLine;
		//slide1.src = "assets/images/slideshow/slide1.jpg";
		//slide1.tagLine = 
		//slide2.src = "assets/images/slideshow/slide2.jpg";
		//return nextImage
		//console.log(slides[i].src)
		//console.log(nextTagline)	
		//alert('ok')
	//}
//});
//console.log(slide1.src)//
//slide2.src ="assets/images/slideshow/slide2.jpg";
