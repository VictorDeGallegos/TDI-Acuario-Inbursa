//OCENARIO
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 8000); // Cambiar imagen cada 3 segundos

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[slideIndex - 1].className += ' active';
}

//Antartida
let slideIndexAntartida = 1;
showSlidesAntartida(slideIndexAntartida);

function plusSlides(n) {
  showSlidesAntartida((slideIndexAntartida += n));
}

function currentSlideAntartida(n) {
  showSlidesAntartida((slideIndexAntartida = n));
}

function showSlidesAntartida(n) {
  let i;
  let slides = document.getElementsByClassName('mySlidesAntartida');
  let dots = document.getElementsByClassName('dotAntartida');
  if (n > slides.length) {
    slideIndexAntartida = 1;
  }
  if (n < 1) {
    slideIndexAntartida = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndexAntartida++;
  if (slideIndexAntartida > slides.length) {
    slideIndexAntartida = 1;
  }
  slides[slideIndexAntartida - 1].style.display = 'block';
  setTimeout(showSlidesAntartida, 8000); // Cambiar imagen cada 3 segundos

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[slideIndexAntartida - 1].className += ' active';
}

//Zona
let slideIndexZona = 1;
showSlidesZona(slideIndexZona);

function plusSlides(n) {
  showSlidesZona((slideIndexZona += n));
}

function currentSlideZona(n) {
  showSlidesZona((slideIndexZona = n));
}

function showSlidesZona(n) {
  let i;
  let slides = document.getElementsByClassName('mySlidesZona');
  let dots = document.getElementsByClassName('dotZona');
  if (n > slides.length) {
    slideIndexZona = 1;
  }
  if (n < 1) {
    slideIndexZona = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndexZona++;
  if (slideIndexZona > slides.length) {
    slideIndexZona = 1;
  }
  slides[slideIndexZona - 1].style.display = 'block';
  setTimeout(showSlidesZona, 8000); // Cambiar imagen cada 3 segundos

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[slideIndexZona - 1].className += ' active';
}

//Implementar un while que cuente hasta 10 y muestre en consola el valor de i
//No tiene nada que ver con el ejercicio anterior, pero es un ejemplo de while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
