import { Grid, CoOrdinate } from "./Types/Map";
import { Vehicle } from "./Types/Vehicles";
import { ToolKit, Tool } from "./Types/Tool";
const readline = require("readline");

//This file is used to handle the user input commands and send it off to the appropriate vehicle
export let signalDelay: number = 0;
type roverInstruction = "L" | "R" | "M";
let depolyedVics: Array<Vehicle> = [];
let selectedVic: Vehicle;
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

  //Add any forbidden map squares
  rl.question(
    "Please enter any forbidden grid squares in the format x,y with each entry seperated by a colon(:) : ",
    (answer: string) => {
      if (answer) {
        answer.split(":").forEach((entry: string) => {
          map.blockedTiles.push([
            parseInt(entry.split(",")[0]),
            parseInt(entry.split(",")[1]),
          ]);
        });
      }
      console.log("The following forbidden blocks where added:");
      map.blockedTiles.forEach((entry) => {
        console.log(`${entry[0]},${entry[1]}`);
      });
    }
  );

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
  switchVics("Rover1", depolyedVics);
}

export function move() {
  //Takes the movement command, processes it and sends it to the right vic
}

export function switchVics(vicName: string, vicList: Array<Vehicle>) {
  //swaps the active vic with the input vic
  vicList.forEach((vic) => {
    if (vic.name === "vicName") {
      selectedVic = vic;
      return;
    }
  });
}

export function listVics(vicList: Array<Vehicle>): string {
  let list: string = "";
  vicList.forEach((vic) => {
    list += `${vicList.indexOf(vic)}:${vic.name}, ${vic.vicType}\n`;
  });
  return list;
}
export function addVic() {}

export function listTools() {
  //Lists the tools available to the selected vehicle
}
export function useTool(tool: Tool) {}

export function delay(length: number) {
  //Changes the signal delay, set to 0 by default for usability, for realism (and pain) set to 1260
  if (length < 0) {
    signalDelay = 0;
  } else {
    signalDelay = length;
  }
}
export function vicHelp(type: Vehicle) {}
export function help() {}
