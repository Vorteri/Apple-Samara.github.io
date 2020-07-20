window.addEventListener('DOMContentLoaded', function () {
  let navTagLi = document.querySelectorAll('.nav li:not(:first-child)');
  let active;


  for (var i = 0; i < navTagLi.length; i++) {
    navTagLi[i].addEventListener('click', function (evt) {

      navTagLi[0].classList.remove('nav_li-active');

      if (active) {
        active.classList.remove('nav_li-active');
      }
      evt.currentTarget.classList.add('nav_li-active');
      active = evt.currentTarget;
    });
  }
  let centerText = document.getElementsByClassName("donut-center")[0];
  let donutSignature = document.getElementsByClassName("donut-center-signature")[0];

  function donut(a, b, c, d) {
    let number = a;
    let maxNumber = b;

    let interval = setInterval(function () {
      if (number == maxNumber || d == undefined) {
        clearInterval(interval);
      }
      if (d) { d.innerHTML = number; }
      number += c;
    }, 60);
  }
  donut(0, 7, 7, donutSignature);
  donut(0, 6, 6, centerText);
  
  let hamburger     = document.querySelector('.hamburger');

   hamburger.addEventListener('click', (event) => {
    
    let hamburger     = document.querySelector('.hamburger');
    let navMobileMenu = document.querySelector('.nav_mobile-menu');
    let newDiv        = document.createElement('div');
    let html          = document.querySelector('html');
    let body          = document.querySelector('body');

    event.preventDefault();
    hamburger.classList.toggle('hamburger-active');
    navMobileMenu.classList.toggle('active-mobile-menu');
    newDiv.classList.add('custom_div');

    if (hamburger.classList.contains('hamburger-active')) {
      body.append(newDiv);
      let customDiv = document.querySelector('.custom_div');

        document.addEventListener('click', (i) => {
            if (i.target == customDiv) {
                navMobileMenu.classList.remove('active-mobile-menu');
                hamburger.classList.remove('hamburger-active');
                html.style.overflow = 'auto';
                newDiv.remove();
            } else {
              hamburger.addEventListener('click', function () {
                newDiv.remove();
            });
            }
        });
        
  }


    if (html.style.overflow == '') {
      html.style.overflow = 'hidden';
  } else if (html.style.overflow == 'auto') {
    html.style.overflow = 'hidden';
  } else {
    html.style.overflow = 'auto';
  }
  });
});