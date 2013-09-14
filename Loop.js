if(!window.requestAnimationFrame){
    window.requestAnimationFrame = (function(){
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}

var Loop = function(options) {

    var defaultOptions = {
        deltaTime: 0.01,
        maxFrameTime: 0.25,
        fpsCallback: false
    }

    var status = '',
        time = 0.0,
        fps = 0,

        currentTime = 0.0,
        accumulator = 0.0,

        state = null,
        renderer = null;

    var STATUS = {
        RUNNING : 0,
        PAUSED : 1,
        STOPPED : 2
    }

    var init = function(){
        if (typeof options == 'object') {
            for (var property in defaultOptions) {
                if(!options[property]){
                    options[property] = defaultOptions[property];
                }
            }
        } else {
            options = defaultOptions;
        }

        console.log(options);
        status = STATUS.STOPPED;
    }

    /**
     * Sets current state
     * State needs update method
     * @param newState
     */
    this.setState = function(newState){
        state = newState;
    }

    /**
     * Sets Renderer.
     * Renderer needs render method
     * @param newRenderer
     */
    this.setRenderer = function(newRenderer){
        renderer = newRenderer;
    }

    /**
     * Start Game
     */
    this.start = function(callback){
        if(status == STATUS.STOPPED){
            currentTime = getCurrentTime();
            status = STATUS.RUNNING;
            if(state){
                state.init();
            }
            if(callback){
                callback();
            }
            loop();
        }
    }

    /**
     * Pause Game
     */
    this.pause = function(callback){
        if(status == STATUS.RUNNING){
            status = STATUS.PAUSED;
            if(callback){
                callback();
            }
        }
    }

    /**
     * Stop Game
     */
    this.stop = function(callback){
        if(status != STATUS.STOPPED){
            status = STATUS.STOPPED;
            if(callback){
                callback();
            }
        }
    }

    /**
     * Resume Paused Game
     */
    this.resume = function(callback){
        if(status == STATUS.PAUSED){
            status = STATUS.RUNNING;
            if(callback){
                callback();
            }
            loop();
        }
    }

    this.setFPSCallback = function(callback){
        if(callback){
            options.fpsCallback = callback;
        }
    }

    /**
     * Set new DeltaTime for timesteps
     * @param newDeltaTime
     */
    this.setDeltaTime = function(newDeltaTime){
        options.deltaTime = newDeltaTime;
    }

    /**
     * The Loop
     */
    var loop = function(){
        if(status == STATUS.RUNNING){
            var newTime = getCurrentTime();
            var frameTime = newTime - currentTime;

            fps = (1 / frameTime) * 1000;
            if(options.fpsCallback){
                options.fpsCallback(fps);
            }

            if(frameTime > options.maxFrameTime){
                frameTime = options.maxFrameTime;
            }

            currentTime = newTime;
            accumulator += frameTime;

            while(accumulator >= options.deltaTime){
                if(state){
                    state.update(options.deltaTime);
                }
                time += options.deltaTime;
                accumulator -= options.deltaTime;
            }

            render();
            window.requestAnimationFrame(loop);
        }
    }

    /**
     * @returns int current time in milliseconds
     */
    var getCurrentTime = function(){
        date = new Date();
        return date.getTime();
    }

    /**
     * Render current State with provided renderer
     */
    var render = function(){
        if(renderer != null && state != null){
            renderer.draw(state);
        }
    }

    init();
}