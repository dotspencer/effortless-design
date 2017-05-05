var wind = document.querySelector('.window');
var first;
var position = 0;
var marginBottom;

var toggle = false;

showInitialReviews();
scrollUp();

function scrollUp(){
  // Total height of current first div
  var totalHeight = first.clientHeight + marginBottom;

  if(position >= totalHeight){
    position = 0;
    first.outerHTML = "";
    showReview();
  }

  first = document.querySelector('.review');
  // Use (position += .5)
  if(toggle){
    first.style.marginTop = "-" + (position += 1) + "px";
  }
  toggle = !toggle;

  window.requestAnimationFrame(scrollUp);
}

function showReview(){
	var review = createDiv('review');

  var stars = createDiv('stars');
  stars.innerHTML = "★★★★";
  if(Math.floor(Math.random() * 2) == 1){
  	stars.innerHTML += "★";
  }

  var words = createDiv('words');
  words.appendChild(createDiv('line'));
  words.appendChild(createDiv('line'));
  //words.appendChild(createDiv('line'));

  //review.innerText = ++count;
  review.appendChild(stars);
  review.appendChild(words);
  wind.appendChild(review);
  first = document.querySelector('.review');
}

function showInitialReviews(){
	for(var i = 0; i < 8; i++){
  	showReview();
  }
  var s = window.getComputedStyle(first);
  marginBottom = parseFloat(s["margin-bottom"]);
}

function createDiv(className){
	var div = document.createElement('div');
	div.classList.add(className);
  return div;
}
