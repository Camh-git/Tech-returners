import { CoOrdinate } from "./Map";
import { Tool, ToolKit } from "./Tool";
import { Grid } from "./Map";
type Vehicle = {
  postion: CoOrdinate;
  vicType: string;
  tools: Array<Tool>;
};
export const rover: Vehicle = {
  postion: [50, 50],
  vicType: "Rover",
  tools: [],
};
export function moveRover(X: number, Y: number): string {
  //Check for out of bounds or bad terain
  if ((!X && !Y) || X === undefined || Y === undefined) {
    return `Please enter at least 1 non zero number and no undefined values. Inputs where: X:${X}, Y:${Y}`;
  }
  //TODO: add if x or y are bigger than max x or y
  if (rover.postion[0] - X > 0 || rover.postion[1] - Y > 0) {
    return "Warning: target postion is out of bounds";
  }

  //TODO: if the end point is forbidden
  try {
    rover.postion[0] += X;
    rover.postion[1] += Y;
    return `Success, new co-ordinates: ${rover.postion[0]},${rover.postion[1]}`;
  } catch (e) {
    return `Failed to move with error: ${e}`;
  }
}
export function returnToOrigin(): string {
  try {
    rover.postion[0] = 50;
    rover.postion[1] = 50;
    return "Success, new co-ordinates: 50,50";
  } catch (e) {
    return `Failed to reset position with error: ${e}`;
  }
}
