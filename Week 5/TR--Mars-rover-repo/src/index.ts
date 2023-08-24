import { Grid, CoOrdinate } from "./Types/Map";
import * as Vics from "./Types/Vehicles";
import { ToolKit, Tool, vicToolKits } from "./Types/Tool";
import { awaitInput } from "./UI/Running_await_input";
const readline = require("readline");

//This file is used to handle the user input commands and send them to the appropriate vehicle
export let signalDelay: number = 0;
export let depolyedVics: Array<Vics.Vehicle> = [];
type roverInstruction = "L" | "R" | "M";
let selectedVic: Vics.Vehicle;
let map: Grid = { XMax: 0, YMax: 0, blockedTiles: [] };

/* Start up sequence (split each step into functions and chained them to make easier to expand, inspired by builder pattern we talked about 7/8) */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Please enter a map size in the format x,y: ", (answer: string) => {
  startUp(answer);
});

export function startUp(input: string) {
  //TODO: set this up to call the new external functions untill a good result is reached, then go to waiting for further input
  //get the user's inital input to define the mapsize

  map.XMax = parseInt(input.split(",")[0]);
  map.YMax = parseInt(input.split(",")[1]);

  console.log(`The grid has been set to: ${map.XMax} by ${map.YMax}`);

  //Go to step 2, add a default rover and set it as the selected vic
  addDefaultRover();
}
function addDefaultRover() {
  //Startup step 2
  rl.question("Please enter default rover postion: ", (answer: string) => {
    if (answer) {
      depolyedVics.push({
        name: "rover1",
        oritentation: "N",
        position: parseCoOrd(answer),
        vicType: "Rover",
        tools: vicToolKits[0].Tools,
      });
      selectedVic = depolyedVics[0];
      //Go to step 3, adding any forbidden squares
      addForbiddenSquares();
    } else {
      addDefaultRover();
    }
  });
}
function addForbiddenSquares() {
  //Startup step 3
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
      //With startup finished await input(this should be at the end of the last startup step,if not last add call to next step here)
      awaitInput();
    }
  );
}

export function proccessInput(input: string) {
  //I'm sure there's a better way to do this, but there's not much time left so i'm going to use the approach I did in space engineers 😊
  //checking for commands that start with a command string followed by a parameter
  input = input.toUpperCase();
  if (input.includes("M:")) {
    switch (selectedVic.vicType) {
      case "Helicopter":
        if (!checkForCollision(parseCoOrd(input), depolyedVics)) {
          Vics.moveHelicopter(selectedVic, parseCoOrd(input), map);
        } else {
          console.log(
            "Abort: This move would result in a collision with another vehicle"
          );
        }

        break;
      case "Plane":
        if (!checkForCollision(parseCoOrd(input), depolyedVics)) {
          Vics.movePlane(selectedVic, parseCoOrd(input), map);
        } else {
          console.log(
            "Abort: This move would result in a collision with another vehicle"
          );
        }
        break;
      case "Orbiter":
        Vics.moveOrbiter(selectedVic, parseCoOrd(input), map);
        break;
    }
  }
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
  else {
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
          if (!checkForCollision(parseCoOrd(input), depolyedVics)) {
            Vics.moveRover(selectedVic, map);
          } else {
            console.log(
              "Abort: This move would result in a collision with another vehicle"
            );
          }
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
      case "HELP":
        help();
      default:
        console.log(`Invalid input: ${input},use help for a list of commands`);
        break;
    }
  }
  if (input != "EXIT") {
    awaitInput();
  }
}

/*Command functions*/

export function switchVic(
  vicName: string,
  vicList: Array<Vics.Vehicle>
): string {
  //swaps the active vic with the input vic
  vicList.forEach((vic) => {
    if (vic.name.toUpperCase() === vicName.toUpperCase()) {
      selectedVic = vic;
      return;
    }
  });
  console.log(`ERROR: No vehicle with the name: ${vicName} was found`);
  return selectedVic.name;
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
  //dont forget to add toolkit
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

/* Help functions */

export function vicHelp(type: string) {}
export function help() {}

/*Misc functions*/

export function parseCoOrd(input: string): CoOrdinate {
  let sides = input.split(",");
  sides.forEach((entry) => {
    entry = entry.replace("[]", "");
  });
  return [parseInt(sides[0]), parseInt(sides[1])];
}

export function checkForCollision(
  target: CoOrdinate,
  allVics: Array<Vics.Vehicle>
): boolean {
  let result: boolean = false;
  allVics.forEach((vic) => {
    if (vic.position[0] === target[0] && vic.position[1] === target[1]) {
      result = true;
    }
  });
  return result;
}
