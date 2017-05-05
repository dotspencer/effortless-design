var wind = document.querySelector('.window');
var first;
var numReviews = 4;
var position = 0;
var marginBottom;

var toggle = false;

showInitialReviews();
scrollUp();

function scrollUp(){
  // Total height of current first div
  var totalHeight = first.clientHeight + marginBottom;

  // Check for total hight of half of reviews
  // since originally I added (numReviews * 2)
  if(position >= totalHeight * numReviews){
    position = 0;

    // Add and remove the same number of reviews
    var reviews = document.querySelectorAll('.review');
    for(var i = 0; i < numReviews; i++){
      reviews[i].outerHTML = "";  // Remove from top
      showReview();               // Add to bottom
    }
  }

  // Move every other iteration
  first = document.querySelector('.review');
  if(toggle){
    first.style.marginTop = "-" + (position += 1) + "px";
  }
  toggle = !toggle;

  // Keep animating
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
  words.appendChild(createDiv('line'));

  review.appendChild(stars);
  review.appendChild(words);
  wind.appendChild(review);
  first = document.querySelector('.review');
}

function showInitialReviews(){
	for(var i = 0; i < numReviews * 2; i++){
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
