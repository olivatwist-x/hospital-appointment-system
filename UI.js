//UI Flexslider
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", function() {
  prevSlide();
  updateCircleIndicator();
  resetTimer();
});

next.addEventListener("click", function() {
  nextSlide();
  updateCircleIndicator();
  resetTimer();
});

//Circle Indicators
function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const circleDiv = document.createElement("div");
    circleDiv.innerHTML = i + 1;
    circleDiv.setAttribute("onclick", "indicateSlide(this)");
    circleDiv.id = i;
    if (i == 0) {
      circleDiv.className = "active";
    }
    indicator.appendChild(circleDiv);
  }
}
circleIndicator();

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

//Backward Slide
function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }

  changeSlide();
}

//Forward Slide
function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  changeSlide();
}

//Slide Changer
function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 4000);
}
function autoSlide() {
  nextSlide();
  updateCircleIndicator();
}
let timer = setInterval(autoSlide, 4000);
