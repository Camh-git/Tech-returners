# Intro

## Basic controls

## Program flow

```typescript
move("L1", rover);
return "Test code please ignore";
```

## Vehicles

A selection of plausable additional vehicles was devised in order to ensure
that the application was developed with the ability to add, swap between and
control different vehicles in mind.

The following are the planned vehicles:

- Rover
- Lander (type defined, but not fully implemented)
- Helicopter (not yet implemented)
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
