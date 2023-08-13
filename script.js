const readmore = document.querySelectorAll(".read-dtl");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".mdl");
const body = document.getElementsByTagName("body");
const clsmodal = document.querySelector(".modalcls");
const scrolltop = document.querySelector(".topbtn");
const opensidebar = document.querySelector(".showsbar");
const closesidebar = document.querySelector(".btnclose");
const sidecontent = document.querySelector(".sidecontent");
const subscribebtn = document.querySelector(".subscribe");
//fnc to open modal window
const showmodal = function () {
  // overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

for (let i = 0; i < readmore.length; i++)
  readmore[i].addEventListener("click", showmodal);

const closemodal = function () {
  sidecontent.classList.add("hidden");
  /*function to close mdoal window*/
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
overlay.addEventListener("click", closemodal);
clsmodal.addEventListener("click", closemodal);
/*SCROLL TOP FUNCTION*/
const scltop = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrolltop.style.display = "block";
  } else {
    scrolltop.style.display = "none";
  }
};
window.onscroll = function () {
  scltop();
};
const clicktoscroll = function () {
  window.scrollTo(0, 0);
};
scrolltop.addEventListener("click", clicktoscroll);

/*open side bar*/

const opnsbar = function () {
  sidecontent.style.left = 0;
  opensidebar.classList.add("hidden");
  overlay.classList.remove("hidden");
};
const clsbar = function () {
  sidecontent.style.left = -110 + "%";
  // body.style.left = 200 + "px";
  opensidebar.classList.remove("hidden");
  overlay.classList.add("hidden");
};
opensidebar.addEventListener("click", opnsbar);
overlay.addEventListener("click", clsbar);
closesidebar.addEventListener("click", clsbar);
const scrlbtm = function () {
  window.scrollTo(100000, 1000000);
};

subscribebtn.addEventListener("click", scrlbtm);
