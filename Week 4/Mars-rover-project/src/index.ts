import { Grid, CoOrdinate } from "./Types/Map";
import * as Vics from "./Types/Vehicles";
import { ToolKit, Tool } from "./Types/Tool";
const readline = require("readline");

//This file is used to handle the user input commands and send them to the appropriate vehicle
export let signalDelay: number = 0;
type roverInstruction = "L" | "R" | "M";
let depolyedVics: Array<Vics.Vehicle> = [];
let selectedVic: Vics.Vehicle;
let map: Grid = { XMax: 0, YMax: 0, blockedTiles: [] };

/* Starting up and handling user input */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Please enter a map size in the format x,y: ", (answer: string) => {
  startUp(answer);
});

export function startUp(input: string) {
  //get the user's inital input to define the mapsize
  if (input) {
    map.XMax = parseInt(input.split(",")[0]);
    map.YMax = parseInt(input.split(",")[1]);
  }
  console.log(`The grid has been set to: ${map.XMax} by ${map.YMax}`);

  //Add a default rover and set it as the selected vic

  depolyedVics.push({
    name: "Rover1",
    position: [Math.round(map.XMax / 2), Math.round(map.YMax / 2)],
    oritentation: "N",
    vicType: "Rover",
    tools: [],
  });
  console.log(
    `Default rover: ${depolyedVics[0].name} deployed at: ${depolyedVics[0].position}`
  );
  selectedVic = depolyedVics[0];

  //Add any forbidden map squares
  rl.question(
    "Please enter any forbidden grid squares in the format x,y with each entry seperated by a colon(:) : ",
    (answer: string) => {
      rl.close;
      if (answer) {
        answer.split(":").forEach((entry: string) => {
          map.blockedTiles.push([
            parseInt(entry.split(",")[0]),
            parseInt(entry.split(",")[1]),
          ]);
        });
      }
      console.log("The following forbidden blocks where added:");
      if (map.blockedTiles.length === 0) {
        console.log("None");
      }
      map.blockedTiles.forEach((entry) => {
        console.log(`${entry[0]},${entry[1]}`);
      });
      awaitInput();
    }
  );
}

/*Input handling functions*/
export function awaitInput() {
  const commandIn = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  commandIn.question("Please enter a command:", (answer: string) => {
    commandIn.close();
    proccessInput(answer);
  });
}

function proccessInput(input: string) {
  //I'm sure there's a better way to do this, but there's not much time left so i'm going to use the approach I did in space engineers 😊
  //checking for commands that start with a command string followed by a parameter
  input = input.toUpperCase();
  if (input.includes("SWITCHVIC:")) {
    switchVic(input.split(":")[1], depolyedVics);
  } else if (input.includes("USE:")) {
    useTool(input.split(":")[1]);
  } else if (input.includes("DELAY:")) {
    setDelay(parseInt(input.split(":")[1]));
  } else if (input.includes("HELP:")) {
    vicHelp(input.split(":")[1]);
  }

  //Commands without parameters
  switch (input) {
    //Control commands
    case "L":
      Vics.rotate("L", selectedVic);
      break;
    case "R":
      Vics.rotate("R", selectedVic);
      break;
    case "M":
      if (selectedVic.vicType === "Rover") {
        Vics.moveRover(selectedVic, map);
      }
      break;

    //Mangement commands
    case "EXIT":
      break;
    case "LISTVICS":
    case "LISTVIC":
      console.log(listVics(depolyedVics));
      break;
    case "ADDVIC":
      addVic();
    case "LISTTOOLS":
      console.log(listTools());
  }
  if (input != "EXIT") {
    awaitInput();
  }
}

export function switchVic(vicName: string, vicList: Array<Vics.Vehicle>) {
  //swaps the active vic with the input vic
  vicList.forEach((vic) => {
    if (vic.name.toUpperCase() === vicName.toUpperCase()) {
      selectedVic = vic;
      return;
    }
  });
  console.log(`ERROR: No vehicle with the name: ${vicName} was found`);
}

export function listVics(vicList: Array<Vics.Vehicle>): string {
  //lists all vehicles in the given array, returns a string so it can be tested
  let list: string = "";
  vicList.forEach((vic) => {
    list += `${vicList.indexOf(vic)}:${vic.name}, type: ${vic.vicType}\n`;
  });
  return list;
}
export function addVic() {
  //gets user input for each property and pushes the new object to depolyedVics
  depolyedVics.push();
}

export function listTools() {
  let list: string = "";
  selectedVic.tools.forEach((entry) => {
    list += `${entry},`;
  });
  return list;
}
export function useTool(tool: string) {}

export function setDelay(length: number) {
  //Changes the signal delay, set to 0 by default for usability, for realism (and pain) set to 1260
  if (length < 0) {
    signalDelay = 0;
  } else {
    signalDelay = length;
  }
}
export function vicHelp(type: string) {}
export function help() {}
