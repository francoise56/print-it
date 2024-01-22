const slides = [
	{
		"image1": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image2": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image3": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image4": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
]



let arrow = document.createElement("div");
let parentElement = document.getElementById("banner");
arrow.setAttribute("class", "arrow");
parentElement.appendChild(arrow);
console.log(arrow);


let arrow_left = document.createElement("img");
arrow_left.src = "./assets/images/arrow_left.png";
let src = document.querySelector(".arrow");
arrow_left.setAttribute("class", "arrow_left");
arrow_left.setAttribute("alt", "flèche dirigée vers la gauche");
arrow.appendChild(arrow_left);
console.log(arrow_left);

//pereElement.appendChild(arrow_Left);

let arrow_right = document.createElement("img");
arrow_right.src = "./assets/images/arrow_right.png";
src = document.querySelector(".arrow");
arrow_right.setAttribute("class", "arrow_right");
arrow_right.setAttribute("alt", "flèche dirigée vers la droite");
arrow.appendChild(arrow_right);
console.log(arrow_right);

//arrow_left = document.querySelector("#banner .arrow_left");
//console.log(arrow_left);
//arrow_left.addEventListener("click", Function carouselDecroissant(){	
//})