// FETCH THE TIME, RETURN TO DOM
const currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    hour = updateTime(hour);
    min = updateTime(min);
    document.querySelector("#time").innerHTML = `${hour}:${min}`;
}
const updateTime = (k) => {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}
setInterval(currentTime, 1000);

// TOGGLING THE DIFFERENT SECTIONS BECAUSE I WAS TOO LAZY TO DO VUE ROUTER OR SOMETHING LIKE THAT
let rulesButton = document.getElementById("rulesButton");
let rules = document.getElementById("rules");

rulesButton.onclick = () => {
  if (rules.style.display === "none") {
    rules.style.display = "flex";
  } else {
    rules.style.display = "none";
  }
};

let lovesButton = document.getElementById("lovesButton");
let loves = document.getElementById("loves");

lovesButton.onclick = () => {
  if (loves.style.display === "none") {
    loves.style.display = "flex";
  } else {
    loves.style.display = "none";
  }
};

let socialButton = document.getElementById("socialButton");
let social = document.getElementById("social");

socialButton.onclick = () => {
  if (social.style.display === "none") {
    social.style.display = "flex";
    
    rules.style.display = "none";
    loves.style.display = "none";
  } else {
    social.style.display = "none";
  }
};