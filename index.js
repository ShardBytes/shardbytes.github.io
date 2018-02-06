var fag = document.getElementById("fag");

function osc_faggot() {
  fag.style.color = "blue";
  fag.innerHTML = "faggot";
  setTimeout(osc_kys, 1);
}

function osc_kys() {
  fag.style.color = "red";
  fag.innerHTML = "kys";
  setTimeout(osc_faggot, 1);
}

osc_faggot();
