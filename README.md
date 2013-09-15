loop.js
=======

A crossbrowser semi-fixed game loop

loop.js separates game logic from render stuff and operates on an semi-fixed timestep

Demo: http://slemgrim.github.io/loop.js/

Usage
------------------------

```javascript
var options = {
    //your options
};

var loop = new Loop();

//Start game
loop.start();

//Stop game
loop.start();
```

Options
------------------------

| Name         | Default | Description                                                          | Type     |
| ------------ | ------- | -------------------------------------------------------------------- | -------- |
| deltaTime    | 0.01    | Game update interval in seconds (fast games need a slow value)       | float    |
| maxFrameTime | 0.25    | Maximum game updates per frame in seconds to prevent spiral of death | float    |
| fpsCallback  | false   | Will be called every game update with the current fps rate           | Callback |


