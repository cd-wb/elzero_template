// main variblse
zsh:1: command not found: q

const counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = counterDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mints = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secened = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".min").innerHTML = mints < 10 ? `0${mints}` : mints;
  document.querySelector(".secend").innerHTML =
    secened < 10 ? `0${secened}` : secened;
  if (dateDiff < 0) {
    clearInterval();
  }
}, 1000);
