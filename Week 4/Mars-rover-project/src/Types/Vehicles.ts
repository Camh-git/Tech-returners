import { Tool, ToolKit } from "./Tool";
import { Grid, CoOrdinate } from "./Map";
export type Vehicle = {
  postion: CoOrdinate;
  oritentation: string;
  vicType: string;
  tools: Array<Tool>;
};
/*Generic vic methods*/
export function returnToOrigin(vic: Vehicle): string {
  try {
    vic.postion[0] = 50;
    vic.postion[1] = 50;
    return "Success, new co-ordinates: 50,50";
  } catch (e) {
    return `Failed to reset position with error: ${e}`;
  }
}

/*Vic class specific methods */

//This one is class specific since rovers move differently to aircraft and spacecraft/landers can't be moved
export function basicMoveRover(rover: Vehicle, map: Grid) {
  if (rover.vicType !== "Rover") {
    console.log("Error: moveRover is only for rovers");
    return;
  }
  //Find the new target postion
  let target: CoOrdinate = rover.postion;
  switch (rover.oritentation) {
    case "N":
      target[0]++;
      break;
    case "E":
      target[1]++;
      break;
    case "S":
      target[0] -= 1;
      break;
    case "W":
      target[1] -= 1;
      break;
  }
  //Check that the new co-ordinates are allowed before returning
  if (
    target[0] < 0 ||
    target[1] < 0 ||
    target[0] > map.XMax ||
    target[1] > map.YMax
  ) {
    return `Error: target co-ordinates out of bounds, movement aborted at position: ${target[0]},${target[1]}`;
  }
  if (map.blockedTiles.includes(target)) {
    return `Error: target co-ordinates blocked, movement aborted at position: ${target[0]},${target[1]}`;
  }
  rover.postion = target;
}

//involve direction and moving forward only
export function moveRover(X: number, Y: number, vic: Vehicle): string {
  //Check for out of bounds or bad terain
  if ((!X && !Y) || X === undefined || Y === undefined) {
    return `Please enter at least 1 non zero number and no undefined values. Inputs where: X:${X}, Y:${Y}`;
  }
  //TODO: add if x or y are bigger than max x or y
  if (vic.postion[0] - X > 0 || vic.postion[1] - Y > 0) {
    return "Warning: target postion is out of bounds";
  }

  //TODO: if the end point is forbidden
  try {
    vic.postion[0] += X;
    vic.postion[1] += Y;
    return `Success, new co-ordinates: ${vic.postion[0]},${vic.postion[1]}`;
  } catch (e) {
    return `Failed to move with error: ${e}`;
  }
}
