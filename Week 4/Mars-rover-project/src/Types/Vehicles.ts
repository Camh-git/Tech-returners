import { CoOrdinate } from "./Map";
import { Tool, ToolKit } from "./Tool";
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
