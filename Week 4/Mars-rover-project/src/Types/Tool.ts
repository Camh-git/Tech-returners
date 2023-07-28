//compatableVics is everything the tool can be installed on(eg.["rover","helicopter"]), function is the function an instance should call when used(eg."takePicture()")
export type Tool = {
  name: string;
  compatableVics: string[];
  function: Array<string>;
};

export const ToolKit: Array<Tool> = [
  {
    name: "Camera",
    compatableVics: ["Rover", "Lander", "Helicopter", "Plane", "Orbiter"],
    function: ["takePicture()", "calibrateCamera()"],
  },
  {
    name: "Drill",
    compatableVics: ["Rover", "Lander"],
    function: ["drill()", "takeSoilSample()"],
  },
  {
    name: "Laser",
    compatableVics: ["Rover", "Lander", "Plane"],
    function: ["fireLaser()", "ablateMaterial()"],
  },
  {
    name: "Spectrometer",
    compatableVics: ["Rover", "Orbiter", "Satellite"],
    function: ["spectrometerTakeReading()"],
  },
  {
    name: "Magnetometer",
    compatableVics: ["Orbiter", "Satellite"],
    function: ["magnetometerTakeReading()"],
  },
  {
    name: "ShortRangeRadio",
    compatableVics: [
      "Rover",
      "Lander",
      "Helicopter",
      "Plane",
      "Orbiter",
      "Satellite",
    ],
    function: ["sendMessage()"],
  },
  {
    name: "LongRangeRadio",
    compatableVics: ["Orbiter", "Satellite"],
    function: ["sendMessage()"],
  },
];
