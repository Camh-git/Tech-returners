import { Tool, ToolKit } from "./Tool";
import { Grid, CoOrdinate } from "./Map";
export type Vehicle = {
  postion: CoOrdinate;
  oritentation: string;
  vicType: string;
  tools: Array<Tool>;
};
/*Generic vic methods*/

export function rotate(movementDirection: string, vic: Vehicle) {
  const DIRECTIONS = ["N", "E", "S", "W"];
  if (movementDirection === "L") {
    const target = DIRECTIONS.indexOf(vic.oritentation) - 1;
    if (target < 0) {
      vic.oritentation = DIRECTIONS[3];
    } else {
      vic.oritentation = DIRECTIONS[target];
    }
  } else if (movementDirection === "R") {
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
function checkBoundsOrForbidden(position: CoOrdinate, map: Grid): Boolean {
  if (position[0] < 0 || position[1] < 0) {
    return false;
  }
  if (position[0] > map.XMax || position[1] > map.YMax) {
    return false;
  }
  if (map.blockedTiles.includes(position)) {
    return false;
  }
  return true;
}

/*Vic class specific methods */

//This one is class specific since rovers move differently to aircraft and spacecraft/landers can't be moved
export function moveRover(rover: Vehicle, map: Grid) {
  if (rover.vicType !== "Rover") {
    console.log("Error: moveRover is only for rovers");
    return;
  }
  //Find the new target postion
  let target: CoOrdinate = rover.postion;
  switch (rover.oritentation) {
    case "N":
      target[0] += 1;
      break;
    case "E":
      target[1] += 1;
      break;
    case "S":
      target[0] -= 1;
      break;
    case "W":
      target[1] -= 1;
      break;
  }
  //Check that the new co-ordinates are allowed before returning
  //For some reason having these checks call return in the out of bounds results in values being passed back anyway
  if (target[0] < 0 || target[1] < 0) {
    target[0] = 0;
    target[1] = 0;
  }
  if (target[0] > map.XMax || target[1] > map.YMax) {
    target[0] = map.XMax;
    target[1] = map.YMax;
  }
  if (map.blockedTiles.includes(target)) {
    target = rover.postion; //For some reason this shorter option doesn't work above
  }
  rover.postion = target;
}

export function moveHelicopter(
  chopper: Vehicle,
  target: CoOrdinate,
  map: Grid
) {
  if (chopper.vicType !== "Helicopter") {
    console.log("Error: moveHelicopter is only for helicopters");
    return;
  }
  //check for out of bounds
  if (checkBoundsOrForbidden(target, map)) {
    chopper.postion = target;
  }
}
