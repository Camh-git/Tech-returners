import { Tool, ToolKit } from "./Tool";
import { Grid, CoOrdinate } from "./Map";
import { OUT_OF_BOUNDS_MESSAGES } from "../Assets/Out_of_bounds_Messages";
export type Vehicle = {
  name: string;
  position: CoOrdinate;
  oritentation: string;
  vicType: Vic_options;
  tools: Array<Tool>;
};
type Vic_options =
  | "Rover"
  | "Lander"
  | "Helicopter"
  | "Plane"
  | "Satellite"
  | "Orbiter";

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
function writeOutOfBoundsMessage() {
  console.log(
    OUT_OF_BOUNDS_MESSAGES[
      Math.floor(Math.random() * OUT_OF_BOUNDS_MESSAGES.length)
    ]
  );
}
function findNeighbors(centerPoint: CoOrdinate): Array<CoOrdinate> {
  //Finds and returns the coOrdinates of the 8 squares surrounding the center point
  return [
    [centerPoint[0] - 1, centerPoint[1] + 1],
    [centerPoint[0], centerPoint[1] + 1],
    [centerPoint[0] + 1, centerPoint[1] + 1],
    [centerPoint[0] - 1, centerPoint[1]],
    [centerPoint[0] + 1, centerPoint[1]],
    [centerPoint[0] - 1, centerPoint[1] - 1],
    [centerPoint[0], centerPoint[1] - 1],
    [centerPoint[0] + 1, centerPoint[1] - 1],
  ];
}

/*Vic class specific methods */

//This one is class specific since rovers move differently to aircraft and spacecraft/landers can't be moved
export function moveRover(rover: Vehicle, map: Grid) {
  if (rover.vicType !== "Rover") {
    console.log("Error: moveRover is only for rovers");
    return;
  }
  //Find the new target postion
  let target: CoOrdinate = [rover.position[0], rover.position[1]];
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
  if (checkBoundsOrForbidden(target, map)) {
    rover.position = target;
  } else {
    writeOutOfBoundsMessage();
  }
}
export function moveLander(lander: Vehicle): string {
  if (lander.vicType !== "Lander") {
    return "Error: moveLander is only for landers";
  }
  return "Unfortunately, landers cannot move";
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
    chopper.position = target;
  } else {
    writeOutOfBoundsMessage();
  }
}

export function movePlane(plane: Vehicle, target: CoOrdinate, map: Grid) {
  if (plane.vicType !== "Plane") {
    console.log("Error: movePlane is only for planes");
    return;
  }
  //check for out of bounds
  if (checkBoundsOrForbidden(target, map)) {
    //Look at each neighbour, if one is permited we have a good runway and can go to the target
    findNeighbors(target).forEach((point) => {
      if (checkBoundsOrForbidden(point, map)) {
        plane.position = target;
        return;
      }
    });
  }
  writeOutOfBoundsMessage();
}
/* Orbiter controls*/
export function moveOrbiter(orbiter: Vehicle, target: CoOrdinate, map: Grid) {
  if (orbiter.vicType !== "Orbiter") {
    console.log("Error: moveOrbiter is only for orbiters");
    return;
  }
  //Dont let the user change the Y axis position
  if (target[1] !== orbiter.position[1]) {
    console.log(
      "Error: target requireds and orbital period change, but only inclination changes are allowed, we're not made of money"
    );
    return;
  }
  if (checkBoundsOrForbidden(target, map)) {
    orbiter.position[0] = target[0];
  } else {
    writeOutOfBoundsMessage();
  }
}
