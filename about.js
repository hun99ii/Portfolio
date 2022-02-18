const sunset = document.getElementById("sunset");
const beach = document.getElementById("beach");
const closeS = document.getElementById("closeSunset");
const closeB = document.getElementById("closeBeach");

function handleSun() {
  const sunPic = document.querySelector(".sunsetPic");
  if (sunPic.classList.contains("hidden")) {
    sunPic.classList.remove("hidden");
  } else {
    sunPic.classList.add("hidden");
  }
}

function handleBeach() {
  const beachPic = document.querySelector(".beachPic");
  if (beachPic.classList.contains("hidden")) {
    beachPic.classList.remove("hidden");
  } else {
    beachPic.classList.add("hidden");
  }
}

beach.addEventListener("click", handleBeach);
closeB.addEventListener("click", handleBeach);
sunset.addEventListener("click", handleSun);
closeS.addEventListener("click", handleSun);
