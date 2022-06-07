// Loader js
var myVar;

function loadPage() {
  myVar = setTimeout(showPage, 300);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("site--content").style.display = "block";
}