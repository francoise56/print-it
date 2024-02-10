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

//objects
const banner = document.getElementById("banner");
const bannerImg = document.querySelector('.banner-img');
const bannerTxt = document.querySelector('#banner p');

const arrowLeft = document.createElement("div");
const arrowRight = document.createElement("div");
const arrowLeftPicture = document.createElement("img");
const arrowRightPicture = document.createElement("img");

// créer une const dots pour l'utiliser dans notre boucle plus bas
const dots = document.querySelector(".dots");
let dot_selected = document.querySelector(".dot_selected");

// Init arrows
arrowLeft.setAttribute("class", "arrow arrow_left");
arrowRight.setAttribute("class", "arrow arrow_right");

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

//init dots
for (let i = 0; i < slides.length; i++) {	
	//init dot
	let dot = document.createElement("div");
	dot.classList.add('dot');
	dot.dataset.index = i;
	
	if (i == cursor) {
        dot.classList.add('dot_selected');
	}
	
	dot.addEventListener('click', function(event){
        updateSlidesAndDots(event.target.dataset.index);
    });

	//insert dot into html
	dots.appendChild(dot);
	
}

//Listen Arrows Click Events
arrowRight.addEventListener('click', function () { 
	cursor++;
    if (cursor > slides.length - 1) {
        cursor = 0;
    }

    updateSlidesAndDots(cursor);	
		
});

arrowLeft.addEventListener('click', function (){ 
	cursor--;
    if (cursor < 0) {
        cursor = slides.length - 1;
    }
	updateSlidesAndDots(cursor);
	
});

function updateSlidesAndDots(cursor){
    bannerImg.src = './assets/images/slideshow/' + slides[cursor].image;
	bannerTxt.innerHTML = slides[cursor].tagLine;

	let dot_selected = document.querySelector('.dot_selected');
    dot_selected.classList.remove('dot_selected');

    let dots = document.querySelectorAll('.dot');
    dots[cursor].classList.add('dot_selected');
}

