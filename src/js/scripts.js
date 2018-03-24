var popupLetter = document.querySelector(".modal-letter");
var linkLetter = document.querySelector(".button-letter");
var closeLetter = document.querySelector(".modal-close");
var user = popupLetter.querySelector("[name=user]");
var mail = popupLetter.querySelector("[name=mail]");
var letterText = popupLetter.querySelector("[name=letter_text]");
var form = popupLetter.querySelector("form");
var storageUser = localStorage.getItem("user");
var storageUserMail = localStorage.getItem("user-mail");

var popupMap = document.querySelector(".modal-map");
var linkMap = document.querySelector(".link-map");
var closeMap = document.querySelector(".modal-close--map");
var changeMap1 = document.querySelector(".modal-map__img-1");
var changeMap2 = document.querySelector(".modal-map__img-2");

var linkDelivery = document.querySelector(".button-services--delivery");
var linkWarranty = document.querySelector(".button-services--warranty");
var linkCredit = document.querySelector(".button-services--credit");

var divDelivery = document.querySelector(".services__item--delivery");
var divWarranty = document.querySelector(".services__item--warranty");
var divCredit = document.querySelector(".services__item--credit");

linkDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  linkDelivery.classList.add("button-services--active");
  linkWarranty.classList.remove("button-services--active");
  linkCredit.classList.remove("button-services--active");

  divDelivery.classList.remove("hide");
  divWarranty.classList.add("hide");
  divCredit.classList.add("hide");
});

linkWarranty.addEventListener("click", function (evt) {
  evt.preventDefault();
  linkDelivery.classList.remove("button-services--active");
  linkWarranty.classList.add("button-services--active");
  linkCredit.classList.remove("button-services--active");

  divDelivery.classList.add("hide");
  divWarranty.classList.remove("hide");
  divCredit.classList.add("hide");
});

linkCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  linkDelivery.classList.remove("button-services--active");
  linkWarranty.classList.remove("button-services--active");
  linkCredit.classList.add("button-services--active");

  divDelivery.classList.add("hide");
  divWarranty.classList.add("hide");
  divCredit.classList.remove("hide");
});


form.addEventListener("submit", function (evt) {
  if (!user.value || !mail.value || !letterText.value) {
    evt.preventDefault();
    popupLetter.classList.remove("modal--error");
    void popupLetter.offsetWidth;
    popupLetter.classList.add("modal--error");
  } else {
    localStorage.setItem("user-mail", mail.value);
    localStorage.setItem("user", user.value);
  }
  //
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    if (popupLetter.classList.contains("modal--show")) {
      popupLetter.classList.remove("modal--show");
      popupLetter.classList.remove("modal--error");
    }
    if (popupMap.classList.contains("modal--show")) {
      popupMap.classList.remove("modal--show");
    }
  }
});

linkLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLetter.classList.add("modal--show");
  if (storageUser) {
    user.value = storageUser;
    mail.focus();
  } else {
    user.focus();
  }
  if (storageUserMail) {
    mail.value = storageUserMail;
    letterText.focus();
  } else {
    mail.focus();
  }
});

closeLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLetter.classList.remove("modal--show");
  popupLetter.classList.remove("modal--error");
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal--show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal--show");
});

changeMap1.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeMap1.classList.toggle("modal--hide");
  changeMap2.classList.toggle("modal--hide");
});

changeMap2.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeMap1.classList.toggle("modal--hide");
  changeMap2.classList.toggle("modal--hide");
});
