# Intro

## Basic controls

## Program flow

```typescript
move("L1", rover);
return "Test code please ignore";
```

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
