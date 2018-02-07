var blinktime = 20;
var fagtime = 500;

var fag = document.getElementById("fag");
var nigg = document.getElementById("nigg");

var xd = false;

function osc_faggot() {
  fag.style.color = "blue";
  fag.innerHTML = "faggot";
  setTimeout(osc_kys, fagtime);
}

function osc_kys() {
  fag.style.color = "red";
  fag.innerHTML = "kys";
  setTimeout(osc_faggot, fagtime);
}

function blincc() {
  if (xd ) {
	nigg.style.color = "white";
	xd = false;
  } else {
	nigg.style.color = "black";
	xd = true;
  }
  setTimeout(blincc, blinktime);
}

setTimeout(osc_faggot, fagtime);
setTimeout(blincc(), blinktime);