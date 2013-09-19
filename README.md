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

| Name            | Default     | Description                                                          | Type       |
| --------------- | ----------- | -------------------------------------------------------------------- | ---------- |
| deltaTime       | **0.01**    | Game update interval in seconds (fast games need a slow value)       | `float`    |
| maxFrameTime    | **0.25**    | Maximum game updates per frame in seconds to prevent spiral of death | `float`    |
| updateCallback  | **false**   | Will be called every game update (deltaTime)                         | `callback` |
| renderCallback  | **false**   | Will be called every clock tick (frame)                              | `callback` |
| fpsCallback     | **false**   | Will be called every game update with the current fps rate           | `callback` |
| clock           | **false**   | Time giving clock. Uses requstAnimationFrame by default              | `callback` |


Methods
------------------------
| Name              | Description                 | Params                                                    |
| ----------------- | --------------------------- | --------------------------------------------------------- |
| start             | Starts gameloop.            | \[ `callback` **startCallback** \] called on success      |
| stop              | Stops started gameloop.     | \[ `callback` **stopCallback** \] called on success       |
| pause             | Pauses started gameloop.    | \[ `callback` **pauseCallback** \] called on success      |
| resume            | Resumes paused gameloop.    | \[ `callback` **resumeCallback** \] called on success     |
| setUpdateCallback | change update callback.     | `callback` **updateCallback**                             |
| setRenderCallback | change render callback      | `callback` **renderCallback**                             |
| setDeltaTime      | same as deltaTime option    | `float` **deltaTime**                                     |
| setFPSCallback    | same as fpsCallback  option | `callback` **fpsCallback**                                |

Basic Usage Example
------------------------

```javascript

   // World object as state. Here is the game logic
   // Examples: world, gameScreen, menuScreen, settingsScreen, etc.
   var World = function(){
        this.init = function(){
            //called on loop.start()
            //used to reset state
        }

        this.update = function(deltaTime){
            // called every game update
            // receives deltaTime
        }
   }

   // Rendering is completely freed from game logic.
   // Examples: render2D, render3D, renderHTML, renderWebGl, etc.
   var Render2D = function(){
        this.draw = function(state) {
            // called every frame, use to draw your game
            // receives actual state as param
        }
   }

   // Input handling is completely freed from game logic
   // Examples: mouseController, touchController, keyboardController, gamepadController
   var MouseControl = function(){
        this.getInput(deltaTime){
            // called every game update. use for input handling
            // receives deltaTime
        }
   }

   // Create loop instance with options
   var game = new Loop({
        deltaTime: 0.05
   });

   var world = new World();
   var render2D = new Render2D();
   var mControl = new MouseControl();

   // add your modules to the loop instance
   game.setState(world);
   game.setRenderer(render2D);
   game.setController(mControl);

   // log your fps to console
   loop.setFPSCallback(
        function(fps){
            console.log(fps);
        }
   );

   // start loop.
   loop.start();


```


