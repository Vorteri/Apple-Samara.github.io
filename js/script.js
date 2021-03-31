document.addEventListener("DOMContentLoaded", function () {


  const btn = document.querySelectorAll(".portfolio__buttons button");
  const product = document.querySelectorAll(".itembox");
  const itemboxPreview = document.querySelectorAll('.itembox__preview');
  const html = document.createElement('div');
  const body = document.querySelector('body');


  btn.forEach(item => {
    item.addEventListener("click", function () {
      for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
      }

      item.classList.add("active");

      product.forEach(show => {
        show.style.display = "none";
        let products = item.textContent.toLowerCase();

        if (show.getAttribute("data-att") === products || products === "all") {
          show.style.display = "block";
        }
      });
    });
  });

  itemboxPreview.forEach(el => {
    el.addEventListener("click", function () {
      const titleDiv = document.querySelector('#iframe-content .demo-title');
      const dataDemoAttr = el.getAttribute("data-demo");
      html.className = "iframe-wrapper";
      html.innerHTML = '<iframe id="demo-iframe" src="' + dataDemoAttr + '">This feature requires inline frames. You have iframes disabled or your browser does not support them.</iframe>';
      const frameContn = document.querySelector("#iframe-content");
      frameContn.style.display = "block";
      frameContn.append(html);
      body.style.overflowY = "hidden";
    });
  });

  const closePreview = document.querySelector('.preview-close');

  closePreview.addEventListener("click", () => {
    const frameContn = document.querySelector('#iframe-content').style.display = "none";
    const htmlRemv = html.remove();
    const deviceBtnRemv = document.querySelector('.devices button').classList.remove('active');
    body.style.overflowY = "scroll";
  });

});
