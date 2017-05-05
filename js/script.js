var wind = document.querySelector('.window');
var first;
var position = 0;
var marginBottom;

var index = 0;
var reviews = [
	"We love this place! Whenever we are downtown this is probably where we will eat. We love the food. I would last or favorites but you can't really go wrong. Buy some sausage to take home and check out the candy.",
  "It's basically little germany in the middle of SLC. Great lunch options, a full butcher shop, bakery and a store in the back with all your favorite german brands!",
  "Delicious German food that always leaves me satisfied. I recommend their bratwurst (sandwich or otherwise).",
  "Amazing service! Amazing outdoor seating although we came in winter. Indoors was cute, great ambience for a dinner with friends or a dinner date. Loved the cheeseboard and thin bread it comes with.",
  "My all time favorite restaurant. I kind of don't want to tell people how great this place is because I'd hate for it to get so busy that I can't get in. The food is marvelous, the wine scrumptious, and the patio space in the summer is phenomenal. I love this restaurant!",
  "This place had amazing food and the patio was so cute!  highly recommend sitting outside when the weather is nice.  Make sure to stop by the book store as well!",
  "Great place! I took my family here for dinner before going to a show near by.  Erin our server and Shell the manager bent over backwards to provide us a fantastic, quick, and enjoyable dining experience. They well exceeded our expectations. Casual dining with great food. Thank you, ladies!",
  "There are a lot of Mexican restaurants that really only serve American Mexican food. If you want original Mexican, The Red Iguana is your place. Forget the décor, you are there for the food. And it's great.",
  "Absolutely delicious, authentic Italian. The Arista dish is amazing! Great service! Didn't know this place has been around for over 20 years! They also run the BTG Wine Bar a couple doors down.",
  "Great food and lots of it. Easy to find. Quiant.",
  "Amazing Italian food in a cozy setting. I would recommend making reservations if you plan on going on the weekend. During the summer they also have patio tables open.",
  "Service was just ok, but the food outweighed that, well worth the bill."
];

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
  first.style.marginTop = "-" + (position += .5) + "px";

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
  words.innerText = reviews[index++];
  if(index >= reviews.length){
  	index = 0;
  }


  //review.innerText = ++count;
  review.appendChild(stars);
  review.appendChild(words);
  wind.appendChild(review);
  first = document.querySelector('.review');
}

function showInitialReviews(){
	for(var i = 0; i < 6; i++){
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
