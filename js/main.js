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
document.getElementById('date-with-js').innerText = date;