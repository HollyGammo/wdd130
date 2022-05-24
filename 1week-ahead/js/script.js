/* Get Current Date for Header */
const currentDateSpan = document.querySelector("#currentDate");
const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);


/* hamburger toggle menu */
function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("open");
    document.getElementById("menuButton").classList.toggle("open");
}
const x = document.getElementById('menuButton');
x.onclick = toggleMenu;


/* last modified */
let nd = new Date();
document.getElementById("currentYear").textContent = nd.getFullYear();
document.querySelector("#modDate").textContent = document.lastModified;


/* Banner on Mondays & Tuesdays */
if(now.getDay() === 2) {
    document.getElementById("banner").style.display = "block";
}
const close = document.querySelector("#close");
close.addEventListener("click", () => {
    banner.style.display = "none";
});