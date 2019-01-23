	
let dots = document.getElementsByClassName('dot');
let firstSlide = document.querySelector('.first-slider');
let secondSlide = document.querySelector('.second-slider');
let thirdSlide = document.querySelector('.third-slider');
let polosa = document.querySelector('.polosa');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

dots[0].onclick = function(e){
	polosa.style.left = 0 + 'px';
	dots[0].style.backgroundColor = "white";
	dots[1].style.backgroundColor = "transparent";
	dots[2].style.backgroundColor = "transparent";
	first.style.display = 'inline-block';
	second.style.display = 'none';
	third.style.display = 'none';
}
dots[1].onclick = function(e){
	polosa.style.left = -724 + 'px';
	dots[1].style.backgroundColor = "white";
	dots[0].style.backgroundColor = "transparent";
	dots[2].style.backgroundColor = "transparent";
	first.style.display = 'none';
	second.style.display = 'inline-block';
	third.style.display = 'none';
}
dots[2].onclick = function(e){
	polosa.style.left = -1448 + 'px';
	dots[2].style.backgroundColor = "white";
	dots[0].style.backgroundColor = "transparent";
	dots[1].style.backgroundColor = "transparent";
	first.style.display = 'none';
	second.style.display = 'none';
	third.style.display = 'inline-block';
}






