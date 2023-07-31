import { CoOrdinate } from "./Map";
import { Tool, ToolKit } from "./Tool";
import { Grid } from "./Map";
type Vehicle = {
  postion: CoOrdinate;
  oritentation: string;
  vicType: string;
  tools: Array<Tool>;
};
export interface rover extends Vehicle {
  postion: [50, 50];
  oritentation: "N";
  vicType: "Rover";
  tools: [];
}
//involve direction and moving forward only
export function moveRover(X: number, Y: number, vic: rover): string {
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
export function returnToOrigin(vic: rover): string {
  try {
    vic.postion[0] = 50;
    vic.postion[1] = 50;
    return "Success, new co-ordinates: 50,50";
  } catch (e) {
    return `Failed to reset position with error: ${e}`;
  }
}
