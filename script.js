
//slider	
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
	
	dots[1].style.backgroundColor = "white";
	dots[0].style.backgroundColor = "transparent";
	dots[2].style.backgroundColor = "transparent";
	first.style.display = 'none';
	second.style.display = 'inline-block';
	third.style.display = 'none';
	if(document.body.style.width <= 684 && document.body.style.width > 412){
		polosa.style.left = -650 + 'px';
	}
	else if(document.body.style.width <= 412 && document.body.style.width > 320) {
		polosa.style.left = -360 + 'px';
	}
	else if(document.body.style.width <= 320){
		polosa.style.left = -300 + 'px';
	}
	else{
		polosa.style.left = -724 + 'px';
	}
}
dots[2].onclick = function(e){
	dots[2].style.backgroundColor = "white";
	dots[0].style.backgroundColor = "transparent";
	dots[1].style.backgroundColor = "transparent";
	first.style.display = 'none';
	second.style.display = 'none';
	third.style.display = 'inline-block';
	if(document.body.style.width <= 684 && document.body.style.width > 412){
		polosa.style.left = -1300 + 'px';
	}
	else if(document.body.style.width <= 412 && document.body.style.width > 320) {
		polosa.style.left = -740 + 'px';
	}
	else if(document.body.style.width <= 320){
		polosa.style.left = -700 + 'px';
	}
	else{
		polosa.style.left = -1448 + 'px';
	}
}

//burger menu

let burger = document.querySelector('#burger');
let wrapper = document.querySelector('.wrapper');

burger.onclick = function(e){
	if(wrapper.style.display == 'block'){
    wrapper.style.display = 'none';
	} else{
		wrapper.style.display = 'block';
		burger.style.display = 'none';
	}
}

window.addEventListener('mouseup', function(e){
	if(e.target != wrapper && e.target.parentNode != wrapper){
		wrapper.style.display = 'none';
		burger.style.display = 'block';
	}
});







