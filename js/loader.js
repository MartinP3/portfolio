// Loader js
var myVar;

function loadPage() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("site--content").style.display = "block";
}