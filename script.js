const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const myInput1 = document.getElementById('myInput1');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');

let currentLocation = 0;

//i did not come up with this, my teacher forced me to do this badness
let locations = [];
locations[0] = "Start Location";
locations[1] = "bridge";
locations[2] = "viewscreen";
locations[3] = "medbay";
locations[4] = "armory";
locations[5] = "engineering";
locations[6] = "hallway";
locations[7] = "shuttlebay";
locations[8] = "space";

images = [];
images[0] = "defiant.gif";
images[1] = "bridge.jpg";
images[2] = "viewscreen.jpg";
images[3] = "medbay.jpg";
images[4] = "armory.jpg";
images[5] = "engineering.jpg";
images[6] = "hallway.jpg";
images[7] = "shuttlebay.jpg";

directions = [];
directions[0] = ["bridge"];
directions[1] = ["viewscreen","engineering","hallway"];
directions[2] = ["bridge",];
directions[3] = ["hallway","shuttlebay"];
directions[4] = ["hallway"];
directions[5] = ["bridge","medbay","shuttlebay",];
directions[6] = ["bridge","medbay","engineering","shuttlebay","armory"];
directions[7] = ["engineering","hallway",];

descriptions = [];
descriptions[0] = "Good morning captain, Klingon activity is picked up from the border. Starfleet requests your attention, please proceed to the bridge.";
descriptions[1] = "Main bridge, operation are done from here.";
descriptions[2] = "The viewscreen, looks at the space ahead of the ship. Bird of prey spotted!";
descriptions[3] = "The medbay, here are our finest docters located.";
descriptions[4] = "The armory, the photon torpedoes can be launched from here.";
descriptions[5] = "Main engineering, our FTL drive (the warp core) is located here.";
descriptions[6] = "The hallway, we can reach any section of the ship from here!";
descriptions[7] = "Shuttlebay, we launch our shuttles from here and on some occations we receive guests here.";

myInput.addEventListener('keydown', getInput, false);

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "to") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "bridge":
            currentLocation = 1;
            break;
          case "viewscreen":
            currentLocation = 2;
            break;
          case "medbay":
            currentLocation = 3;
            break;
          case "armory":
            currentLocation = 4;
            break;
          case "engineering":
            currentLocation = 5;
            break;
          case "hallway":
            currentLocation = 6;
            break;
          case "shuttlebay":
            currentLocation = 7;
            break;
        }
      } else {
        feedback.innerHTML = "dat mag niet";
        setTimeout(removeFeedback, 2000);
      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "get") {
      console.log('picked something up');
      myInput.value = "";
    }

    if (inputArray[0] == "use"){
      console.log('item used');
      myInput.value = "";
    }

    if (inputArray[0] != "to" && inputArray[0] != "get" && inputArray[0] != "use" ){
      feedback.innerHTML = "mogelijke commando's zijn: to, get, use en help";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }
  }
}

myInput1.addEventListener('keydown', getInput1, false);

function getInput1(evt) {
  if (evt.key == "Enter") {
    let inputArray1 = myInput1.value.split(" ");

    if (inputArray1[0] == "to") {
      if (directions[currentLocation].indexOf(inputArray1[1]) != -1) {
        switch (inputArray1[1]) {
          case "red":
            conditions = 0;
            break;
          case "yellow":
            conditions = 1;
              break;
          case "green":
            conditions = 2;
                break;
          case "grey":
            conditions = 3;
          break;
                  }
                }
              }
            }

          else {
            feedback.innerHTML = "dat mag niet";
            setTimeout(removeFeedback, 2000);
          }
        }

function giveLocation() {
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "Possible directions: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  myInventory.innerHTML = "The inventory is empty";
}

function removeFeedback() {
  feedback.innerHTML = "";
}

giveLocation();
