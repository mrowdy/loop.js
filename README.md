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
loop.stop();
```

Options
------------------------

| Name         | Default | Description                                                          | Type     |
| ------------ | ------- | -------------------------------------------------------------------- | -------- |
| deltaTime    | 0.01    | Game update interval in seconds (fast games need a slow value)       | float    |
| maxFrameTime | 0.25    | Maximum game updates per frame in seconds to prevent spiral of death | float    |
| fpsCallback  | false   | Will be called every game update with the current fps rate           | Callback |


Methods
------------------------
| Name           | Description                 | Params                                                  |
| start          | Starts gameloop.            | [ startCallback ] ( called on success )                 |
| stop           | Stops started gameloop.     | [ stopCallback ] ( called on success )                  |
| pause          | Pauses started gameloop.    | [ pauseCallback ] ( called on success )                 |
| resume         | Resumes paused gameloop.    | [ resumeCallback ] ( called on success )                |
| setState       | Set Game State (Screen)     | object state (needs 'init' and 'update' method)         |
| setRenderer    | Set Renderer                | object rendderer (needs 'draw' method)                  |
| setController  | Se Controller for inputs    | object controller (needs 'getInput' method)             |
| setDeltaTime   | same as deltaTime option    | float deltaTime                                         |
| setFPSCallback | Set Callback for fps update | fpsCallback (called every game update with current fps) |
