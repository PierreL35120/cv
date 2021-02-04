"use strict";

const goku = document.querySelector(".goku");
const grey1 = document.querySelector(".grey1");
const koala = document.querySelector(".koala");
const grey2 = document.querySelector(".grey2");
const nora = document.querySelector(".nora");
const grey3 = document.querySelector(".grey3");
const willem = document.querySelector(".willem");
const grey4 = document.querySelector(".grey4");
const cont = document.querySelector(".cont");
const exp = document.querySelector(".exp");
const passio = document.querySelector(".passio");
const contg = document.querySelector(".contg");
const expg = document.querySelector(".expg");
const passiog = document.querySelector(".passiog");
const sakazuki = document.querySelector(".sakazuki");
const dio = document.querySelector(".dio");
const toggle = document.getElementById("toggle");
const mode = document.querySelector(".mode");
const modeg = document.querySelector(".modeg");

const gokuleur = function () {
  goku.classList.remove("grey1");
};

const gokuwhite = function () {
  goku.classList.add("grey1");
};

const koaleur = function () {
  koala.classList.remove("grey2");
};

const koawhite = function () {
  koala.classList.add("grey2");
};

const noraleur = function () {
  nora.classList.remove("grey3");
};

const norawhite = function () {
  nora.classList.add("grey3");
};

const willleur = function () {
  willem.classList.remove("grey4");
};

const willwhite = function () {
  willem.classList.add("grey4");
};

const contleur = function () {
  cont.classList.remove("contg");
};

const contwhite = function () {
  cont.classList.add("contg");
};

const passioleur = function () {
  passio.classList.remove("passiog");
};

const passiowhite = function () {
  passio.classList.add("passiog");
};

const expleur = function () {
  exp.classList.remove("expg");
};

const expwhite = function () {
  exp.classList.add("expg");
};

const sakazuleur = function () {
  sakazuki.classList.remove("grey5");
};

const sakazuwhite = function () {
  sakazuki.classList.add("grey5");
};

const dioleur = function () {
  dio.classList.remove("grey6");
};

const diowhite = function () {
  dio.classList.add("grey6");
};

const modeleur = function () {
  mode.classList.remove("modeg");
};

const modewhite = function () {
  mode.classList.add("modeg");
};

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

goku.addEventListener("mouseover", gokuleur);
goku.addEventListener("mouseout", gokuwhite);
koala.addEventListener("mouseover", koaleur);
koala.addEventListener("mouseout", koawhite);
nora.addEventListener("mouseover", noraleur);
nora.addEventListener("mouseout", norawhite);
willem.addEventListener("mouseover", willleur);
willem.addEventListener("mouseout", willwhite);
cont.addEventListener("mouseover", contleur);
cont.addEventListener("mouseout", contwhite);
exp.addEventListener("mouseover", expleur);
exp.addEventListener("mouseout", expwhite);
passio.addEventListener("mouseover", passioleur);
passio.addEventListener("mouseout", passiowhite);
sakazuki.addEventListener("mouseover", sakazuleur);
sakazuki.addEventListener("mouseout", sakazuwhite);
dio.addEventListener("mouseover", dioleur);
dio.addEventListener("mouseout", diowhite);
mode.addEventListener("mouseover", modeleur);
mode.addEventListener("mouseout", modewhite);
