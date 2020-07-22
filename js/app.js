var elem = document.querySelector('.m-p-g');

document.addEventListener('DOMContentLoaded', function() {
	var gallery = new MaterialPhotoGallery(elem);
	
	new Splide('.splide', {
		type: 'loop',
		autoWidth: 'true',
		easing: 'linear',
		arrowPath: "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
		lazyLoad: 'sequential',
		gup: 30,
		perPage: 3,
	}).mount();




	let checkBox = document.getElementById("burger");

	function toggleBut(t) {
		if (t.target.closest(".nav-link-mob"))
		checkBox.checked = false;
	}





	var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

  document.addEventListener("click", toggleBut);


  window.onscroll = function() {myFunction()};

  var header = document.getElementById("nav");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  const sections = document.querySelectorAll("section");
  const menu_links = document.getElementsByClassName("nav-link");
  
  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

  const sectionMargin = 300;
  
  
  let currentActive = 0;
  window.addEventListener("scroll", () => {
    
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });


    document.body.onload = function() {
   

    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !document.body.classList.contains('active') )
    {
        document.body.classList.add('active');
    }
    },1000);
};



AOS.init({
  duration: 1200,
  useClassNames: true,
  once: false,
  // initClassName: true,
  // animatedClassName: 'animated',
});



}, false);