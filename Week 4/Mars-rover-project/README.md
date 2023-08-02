# Intro

## Basic controls

## Program flow

The program starts as required in the brief, the user defines the size of the map.
The next step is to define any forbidden blocks, the program will ask users to
input these as an array to co-ordinates.
The system will then spawn a default rover fo the user, named Rover1

From that point on the user has free reign, they can issue commands to move, add,
list and swap between vehicles (WIP).

The user will also be able to list and use the tools on their selected vehicle(WIP).

## Key features

## Approach

## Vehicles

A selection of plausable additional vehicles was devised in order to ensure
that the application was developed with the ability to add, swap between and
control different vehicles in mind.

The following are the planned vehicles:

- Rover
- Lander (defined, but useless without tools)
- Helicopter
- Plane (not yet implemented)
- Satellite (not yet implemented)
- Orbiter (not yet implemented)

### All vehicles are defined using the Vehicle type, seen below

```typescript
export type Vehicle = {
  name: string; //A unique identifier for each vehicle
  position: CoOrdinate; //The vehicle's location on the grid given as [x,y]
  oritentation: string; //The direction the vehicle is facing
  vicType: string; //The type of vehicle the instance is, the options are available above
  tools: Array<Tool>; //An array of all the tools available to the vehicle
};
```

The modes of opperation for each of these vehicles is as follows:

- Rover - Rotates and moves around 1 step at a time as required in the brief.
- Lander - Can't move, just sits in it's spot and uses it's tools.
- Helicopter - flys around from point to point, but can't carry many tools.
- Plane - flys and can carry more tools, but needs a clear space next to it's landing point to use as a runway.
- Satellite - Can't be moved by us, but uses tools and has a long range radio to talk to earth.
- Orbiter - Similar to a satellite but with more tools(and a price to match), can move in orbit.

## Vehicles and tools

The following table lists what tools should be available to each type of vehicle:

| Tool            | Vehicles                                            |
| --------------- | --------------------------------------------------- |
| Camera          | Rover, Lander, Helicopter, Plane, Orbiter           |
| Drill           | Rover, Lander                                       |
| Laser           | Rover, Lander, Plane                                |
| Spectrometer    | Rover, Orbiter, Satellite                           |
| Magnetometer    | Orbiter, Satellite                                  |
| ShortRangeRadio | Rover, Lander, Helicopter, Plane, Orbiter,Satellite |
| LongRangeRadio  | Orbiter, Satellite                                  |

## Future thoughts

The following are possible future additions:

- Add the ability to que up movement commands to the rover, or give it a target and have it work it's way there
- Add a Web UI, the intial setp would likely be a simple display with the same inputs as the console version
