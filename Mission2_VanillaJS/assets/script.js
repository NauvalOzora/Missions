let LastImage = document.getElementsByClassName('last-img')[0];
let MidImage = document.getElementsByClassName('mid-img')[0];
let BirdImage = document.getElementsByClassName('bird-img')[0];
let FocusImage = document.getElementsByClassName('focus-img')[0];
let Leaf = document.getElementsByClassName('leaf-img')[0];
let Traveling = document.querySelector('#landing h1');
let Btn = document.querySelector('.btn');

window.addEventListener('scroll', function () {
  let value = window.scrollY;

  BirdImage.style.left = value * 0.9 + 'px';
  BirdImage.style.top = value * 0.7 + 'px';
  LastImage.style.top = value * 0.7 + 'px';
  MidImage.style.top = value * 0.3 + 'px';
  FocusImage.style.top = value * 0 + 'px';
  Leaf.style.left = value * 1 + 'px';
  Traveling.style.right = value * 0.5 + 'px';
  Btn.style.margintop = value * 0.1 + 'px';
});

window.addEventListener('scroll', muncul);

function muncul() {
  let elements = document.querySelectorAll('.elemen');
  for (let i = 0; i < elements.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 150;
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add('tampil');
    } else {
      elements[i].classList.remove('tampil');
    }
  }
}

var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {
  showSlide((slideIndex += n));
}

function dotslide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName('imgslide');
  var dot = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < slides.length; i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';

  dot[slideIndex - 1].className += ' active';
}

var typing = new Typed('.text', {
  strings: ['Challenging', 'Traveling', 'Wondering'],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
