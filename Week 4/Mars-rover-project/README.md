# Intro

## Basic controls

Controlls for the currently implemented vehicles are as follows:

- Rover - L and R to rotate left or right 90 degrees, M to move forward in the direction you are facing
- Lander - Standard tool commands only
- Helicopter - M:x,y where x and y are the x and y co-ordinates of the target landing spot
- Plane - M:x,y, similar to the helicopter, but at least one block bordering the target must also be clear to land
- Satellite - Standard tool commands only
- Orbiter - M:x where x is the amount you want to move up or down by (think of it as an inclination change)
  _Note:_ when moving the helicopter, plane or orbiter it is important that the format be M:x,y or M:x and not M:[x,y] due to the way parseCoOrd behaves

All vehicles can use any of their equiped tools using the command use:toolname, eg: use:Camera

#### The following console/management commands are also available:

- listVic/ListVics - prints a list of all currently available vehicles
- addVic - starts a series of commands to add a new vehicle to the pool (not yet implemented)
- switchVic:name - changes the currently selected vehicle to the vehicle with a matching name (currently has bugs)
- use:tool - uses the named tool
- listTools - lists all tools on the currently selected vehicle
- help - provides general user help about the system
- help:vicType - provides help regarding the specified vehicle type
- exit - exits the programm

## Program flow

The program starts as required in the brief, the user defines the size of the map.
The next step is to define any forbidden blocks, the program will ask users to
input these as an array to co-ordinates.
The system will then spawn a default rover fo the user, named Rover1

From that point on the user has free reign, they can issue commands to move, add,
list and swap between vehicles (WIP).

The user will also be able to list and use the tools on their selected vehicle(WIP).

## Key features

The main features of this application are:

- Create a map for the rovers to rove on.
- Move rovers around the map.
- Manage a group of several types of (semi-credible) vehicles (not fully implemented)
- Use the tools available to each vehicle (not implemented)

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
- finish implementing the forbidden blocks system, preferably with a system to randomly generate them
- Add a Web UI, the intial setp would likely be a simple display with the same inputs as the console version
