// Get the element by tag name
var bodyElement = document.querySelector('body');
// Get the element by ID
var offerCard = document.getElementById('offerCard');

// Check if the body element has the 'overflow-x-hidden' class
if (bodyElement && bodyElement.classList.contains('overflow-x-hidden')) {
  // Check if the offerCard element exists before modifying it
  if (offerCard) {
    // Remove the 'active' class to hide the offerCard
    offerCard.classList.remove('active');
  }
}
