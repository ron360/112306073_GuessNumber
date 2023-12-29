
let secretNumber = generateRandomNumber();

function generateRandomNumber() {
   return Math.floor(1 + Math.random() * 10);
}

function checkGuess() {

  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  if (parseInt(userGuess) === secretNumber){
    alert("Congratulations! You guessed the correct number!");
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    secretNumber = generateRandomNumber();
  }
  else{
    alert("Sorry, try again!");
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
  }

  document.getElementById("userGuess").value = "";
}

function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
