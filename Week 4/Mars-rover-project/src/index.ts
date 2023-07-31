import { Grid, CoOrdinate } from "./Types/Map";
import { Vehicle } from "./Types/Vehicles";
import { ToolKit, Tool } from "./Types/Tool";

//This file is used to handle the user input commands and send it off to the appropriate vehicle
export let signalDelay: number = 0;

export function defineMap(XMax: number, YMax: number) {}

export function rotate(movementDirection: string, vic: Vehicle) {
  const DIRECTIONS = ["N", "E", "S", "W"];
  if (movementDirection == "L") {
    const target = DIRECTIONS.indexOf(vic.oritentation) - 1;
    if (target < 0) {
      vic.oritentation = DIRECTIONS[3];
    } else {
      vic.oritentation = DIRECTIONS[target];
    }
  } else if (movementDirection == "R") {
    const target = DIRECTIONS.indexOf(vic.oritentation) + 1;
    if (target > 3) {
      vic.oritentation = DIRECTIONS[0];
    } else {
      vic.oritentation = DIRECTIONS[target];
    }
  } else {
    vic.oritentation = movementDirection;
    console.log("Invalid rotation direction, please choose L or R");
  }
}

export function move() {
  //Takes the movement command, processes it and sends it to the right vic
}

export function switchVics() {}
export function listVics() {}

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
