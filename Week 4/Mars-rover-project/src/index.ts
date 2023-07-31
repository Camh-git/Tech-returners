import { Grid, CoOrdinate } from "./Types/Map";
import { rover } from "./Types/Vehicles";
import { ToolKit, Tool } from "./Types/Tool";

//This file is used to handle the user input commands and send it off to the appropriate vehicle
export let signalDelay: number = 0;
export function defineMap(XMax: number, YMax: number) {}

export function rotate(direction: string, vic: rover) {}

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
