let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/poro.jpg") {
    myImage.setAttribute("src", "images/lux.jpg");
  } else {
    myImage.setAttribute("src", "images/poro.jpg"); // 修正为 .jpg
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your Riot ID.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome back, " + myName;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome back, "  + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };

  function setUserName() {
    let myName = prompt("Please enter your Riot ID.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Welcome back, " + myName;
    }
  }