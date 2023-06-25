
// cartButton has been declare in cart_menu.js so no need to declare twice.
// const cartButton = document.getElementById('cartButton');

const overlay = document.getElementById('overlay');
const checkoutContainer = document.getElementById('checkoutContainer');
const exitButton = document.getElementById("exit-checkout");
const cancelButton = document.getElementById("cancel-button");
var checkout = false; // State that checks if the checkout menu is open or not

// Define the animation timeline
const timeline = gsap.timeline({ paused: true });
timeline
  .set([overlay, checkoutContainer], { opacity: 0, pointerEvents: 'auto', display: "flex" })
  .to(overlay, { opacity: 1, duration: 0.1 })
  .to(checkoutContainer, { opacity: 1, duration: 0.1, scale: 1.1 })
  .to(checkoutContainer, { scale: 0.9, duration: 0.1 })
  .to(checkoutContainer, { scale: 1, duration: 0.1 })
  .set([overlay, checkoutContainer], { pointerEvents: 'auto' });

// Event listener for the cart button
cartButton.addEventListener('click', () => {

  // Reset the animation timeline
  if (!checkout){
    checkout = true;
    timeline.restart();
  }
    
});

overlay.addEventListener('click', () => {
    if (checkout) {
        checkout = false;
        timeline.reverse();
    }
});

exitButton.addEventListener("click", () => {
    if (checkout) {
        checkout = false;
        timeline.reverse();
    }
});

cancelButton.addEventListener("click", () => {
  if (checkout) {
      checkout = false;
      timeline.reverse();
  }
});
