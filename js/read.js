const readBtn = document.querySelector("[data-extra]");
const hiddenP = document.querySelector(".read-more");
const infoP = document.querySelector(".info-p");
const aboutInfo = document.querySelector(".about-text");
hiddenP.hidden = true;
let showPara = () => {
  hiddenP.hidden = false;
  readBtn.style.marginTop = "1rem";
  removeEventListener;
};

readBtn.addEventListener("click", showPara);
