let toggler = document.getElementById("navbar__toggler");
let menu = document.getElementById("navbar__menu");

toggler.addEventListener("click", function () {
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
});

// let teamItem = document.querySelectorAll("team__item");

// teamItem.onclick = function() {
//     console.log("jhaaahah");
// }

let date = new Date().getFullYear();
document.getElementById("date-with-js").innerText = date;

// Scroll up icon
let scrollUp = document.getElementById("scroll-up");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollUp.style.transform = "translateY(0px)";
  } else {
    scrollUp.style.transform = "translateY(100px)";
  }
}

// Loader
let loader = document.getElementById("loader");

window.onload = function () {
  loader.classList.add("active");
};
