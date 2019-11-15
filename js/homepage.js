
function displayIntoModal() {
  setTimeout(function() {
    // *displays modal a second after loading
    document.getElementById("intro-modal").style.display = "block";

    // *adds blur effect using "outside-modal" class
    let oustideModal = document.getElementById("homepage-container");
    oustideModal.classList.add("outside-modal");
  }, 1000);
}

function closeIntoModal() {
  document.getElementById("intro-modal").style.display = "none";

  let oustideModal = document.getElementById("homepage-container");
  oustideModal.classList.remove("outside-modal");
}

// *function to display 'mood gini?' explanation
function displayExplanation() {
  document.getElementById("explanation").style.display = "block";
}
function removeExplanation() {
  document.getElementById("explanation").style.display = "none";
}

let angry = {
  colour: "red",
  dark: "#AC3E3E",
  medium: "rgba(198, 135, 135, 0.87)",
  light: "rgba(209, 173, 173, 0.87)",
  emoji: "😤"
};
let happy = {
  colour: "yellow",
  dark: "#a7a25c",
  medium: "rgba(230, 227, 159, 0.87)",
  mediumDark: "rgba(219, 216, 128, 0.87)",
  mediumDark: "rgba(206, 203, 119, 0.87)",
  light: "rgb(231, 230, 207)",
  emoji: "😁"
};
let fearful = {
  colour: "green",
  dark: "#2C6F4A",
  medium: "#97C49E",
  light: "#CFD8D1",
  emoji: "😨"
};
let peaceful = {
  colour: "blue",
  dark: "#0D4FB1",
  medium: "rgba(95, 144, 189, 0.87)",
  light: "#BED8EC",
  emoji: "😌"
};

let colourArray = [angry, happy, fearful, peaceful];

function shuffleColours() {
  let colourCount = colourArray.length;
  let randColourIndex = Math.floor(colourCount * Math.random());
  let randomColourArrayItem = colourArray[randColourIndex];
  document.getElementsByClassName("light-bg")[0].style.backgroundColor =
    randomColourArrayItem.light;
  document.getElementsByClassName("light-bg")[1].style.backgroundColor =
    randomColourArrayItem.light;
  document.getElementsByClassName("light-cl")[0].style.color =
    randomColourArrayItem.light;
  document.getElementsByClassName("light-cl")[1].style.color =
    randomColourArrayItem.light;

  document.getElementsByClassName("medium-bg")[0].style.backgroundColor =
    randomColourArrayItem.medium;
  document.getElementsByClassName("medium-bg")[1].style.backgroundColor =
    randomColourArrayItem.medium;

  document.getElementsByClassName("dark-bg")[0].style.backgroundColor =
    randomColourArrayItem.dark;
  document.getElementsByClassName("dark-br")[0].style.borderColor =
    randomColourArrayItem.dark;
  document.getElementsByClassName("dark-br")[1].style.borderColor =
    randomColourArrayItem.dark;
  document.getElementsByClassName("dark-br")[2].style.borderColor =
    randomColourArrayItem.dark;
  document.getElementsByClassName("dark-br")[3].style.borderColor =
    randomColourArrayItem.dark;
  document.getElementsByClassName("dark-cl")[0].style.color =
    randomColourArrayItem.dark;
  document.getElementsByClassName("dark-cl")[1].style.color =
    randomColourArrayItem.dark;

  document.getElementById("lollipop-circle").innerHTML =
    randomColourArrayItem.emoji;

  // * for visibility insist Digi part of title should be medium Dark in happy mode
  if (randColourIndex == 1) {
    document.getElementById("digi-medium-cl").style.color =
      randomColourArrayItem.mediumDark;
  }
}
