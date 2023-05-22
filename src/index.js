const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

const menu = document.querySelector(".menu") 
// console.log(menu)

menu.onclick = function toggle_nav() {
	const nav_links = navbar.querySelector('.container')
	if (nav_links.style.display === "none")
	{
		nav_links.style.display = "flex";
	}
	else{
		nav_links.style.display = "none"
	}

}

//Type Writing Effect
var i = 0;
var intro = "The purpose of this website is to explore the advantages and disadvantages of AI, and to provide readers with a better understanding of the impact of this technology on our lives and society."
var speed = 50;

function typeWriter () {
	if (i < intro.length) {
		document.getElementById("intro").innerHTML += intro.charAt(i);
		i++;
		setTimeout(typeWriter,speed)
	}
}

window.onload = function () {
	typeWriter();
	console.log("Page Loaded ")
}