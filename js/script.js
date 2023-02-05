// set function on scroll, so it starts on scroll down// 
window.onscroll = function() {
  const navbar = document.querySelector("nav");
  //Y off set of page to 50 // 
  if (window.pageYOffset > 50) {
    // if statment to add css class rule "scrolled"// 
    navbar.classList.add("scrolled");
    // else statment to remove css class rule "scrolled"// 
  } else {
    navbar.classList.remove("scrolled");
  }
};