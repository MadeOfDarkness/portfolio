/* Navbar dinamico */
var lastScrollTop = 0;
navbar = document.getElementById("menu");
window.addEventListener("scroll", function () {
  var scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});