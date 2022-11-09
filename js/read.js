const readBtn = document.querySelector("[data-extra]");
const hiddenP = document.querySelector(".read-more");
const infoP = document.querySelector(".info-p");
const aboutInfo = document.querySelector(".about-text");
hiddenP.hidden = true;
let showPara = () => {
  if (hiddenP.hidden === true) {
    hiddenP.hidden = false;
    readBtn.innerHTML = "Hide More";
  } else {
    hiddenP.hidden = true;
    readBtn.innerHTML = "Read More";
  }
};

readBtn.addEventListener("click", showPara);
