var navbar = document.querySelector("#nav-bar");
var ham = document.querySelector("#ham");
var list = navbar.querySelector("ul");

ham.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
	list.classList.toggle("expanded");
	list.classList.toggle("hidden");
	ham.classList.toggle("ham-close");
	if (list.style.height == "0rem" || list.style.height == ""){
		list.style.height = "24rem";
	}
	else{
		list.style.height = "";
	}
}