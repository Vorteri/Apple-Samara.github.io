const sections   = document.querySelectorAll("section");
const navLi      = document.querySelectorAll("nav ul li");
const teamItems  = document.querySelector(".team__items:nth-of-type(2)");
const teamBtn    = document.querySelector(".team__btn");
const downlBtn   = document.querySelectorAll(".download__btn");
const popup      = document.querySelector(".overlay");
const closePopup = document.querySelector(".popup__close");
const bodyPage   = document.querySelector('body');


window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});


function clickAccordion (a, b) {
  a.addEventListener("click", () => {
    b.classList.add("team_active");
    a.style.display = 'none';
  }); 
}

clickAccordion(teamBtn, teamItems);

 downlBtn.forEach((el) => {
    el.addEventListener("click", () => {
      popup.style.display = "block";
      bodyPage.style.overflow = "hidden";
    });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  bodyPage.style.overflow = "scroll";

});

document.addEventListener('keydown', (evn) => {
	if(evn.key === "Escape"){
    popup.style.display = "none";
    bodyPage.style.overflow = "scroll";  
	}
});