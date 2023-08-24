import { signalDelay } from "../index";
//compatibleVics is everything the tool can be installed on(eg.["rover","helicopter"]), function is the function an instance should call when used(eg."takePicture()")
export type Tool = {
  name: string;
  compatibleVics: string[];
  action: () => void;
};

//Used to associate the tools with compatible vehicles
export type vicTools = {
  victype: string;
  Tools: Array<Tool>;
};

//Declaring the tools
const camera: Tool = {
  name: "camera",
  compatibleVics: ["Rover", "Lander", "Helicopter", "Plane", "Orbiter"],
  action: () => {
    //If there was a UI this would return a random image from the assets/CameraImages folder
    console.log("Wow, that's a great picture, shame this terminal has no uI");
    return "good job";
  },
};
const drill: Tool = {
  name: "Drill",
  compatibleVics: ["Rover", "Lander"],
  action: () => {
    console.log(
      `Drilled to a depth of: ${Math.random() * 2} meters, sample stored`
    );
  },
};
const laser: Tool = {
  name: "Laser",
  compatibleVics: ["Rover", "Lander", "Plane"],
  action: () => {
    console.log("Firing program complete, data sent to the science team");
  },
};
const Spectrometer: Tool = {
  name: "Spectrometer",
  compatibleVics: ["Rover", "Orbiter", "Satellite"],
  action: () => {
    console.log("Spectral analysis complete, uploading data");
  },
};
const Magnetometer: Tool = {
  name: "Magnetometer",
  compatibleVics: ["Orbiter", "Satellite"],
  action: () => {
    console.log("Magnetic anomaly detected, alerting science team");
  },
};
const ShortRangeRadio: Tool = {
  name: "ShortRangeRadio",
  compatibleVics: [
    "Rover",
    "Lander",
    "Helicopter",
    "Plane",
    "Orbiter",
    "Satellite",
  ],
  action: () => {
    console.log("Ping complete, comms test passed");
  },
};
const LongRangeRadio: Tool = {
  name: "LongRangeRadio",
  compatibleVics: ["Orbiter", "Satellite"],
  action: () => {
    console.log(
      `Interplanetary linkup established, please note current signal delay is: ${signalDelay} seconds.`
    );
  },
};

//Exporting both a general toolkit and one that matches vics to their tools
export const vicToolKits: Array<vicTools> = [
  {
    victype: "Rover",
    Tools: [camera, drill, laser, Spectrometer, ShortRangeRadio],
  },
  {
    victype: "Lander",
    Tools: [camera, drill, laser, ShortRangeRadio],
  },
  {
    victype: "Helicopter",
    Tools: [camera, ShortRangeRadio],
  },
  {
    victype: "Plane",
    Tools: [camera, laser, ShortRangeRadio],
  },
  {
    victype: "Satellite",
    Tools: [Spectrometer, ShortRangeRadio, LongRangeRadio],
  },
  {
    victype: "Orbiter",
    Tools: [
      camera,
      Spectrometer,
      Magnetometer,
      ShortRangeRadio,
      LongRangeRadio,
    ],
  },
];
export const ToolKit: Array<Tool> = [
  camera,
  drill,
  laser,
  Spectrometer,
  Magnetometer,
  ShortRangeRadio,
  LongRangeRadio,
];
