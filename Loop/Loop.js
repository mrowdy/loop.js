var Loop = function() {

    var instance = this,
        status = '',
        time = 0.0,
        deltaTime = 0.01,
        maxFrameTime = 0.25;

    var currentTime = 0.0,
        accumulator = 0.0;

    var state = null;
    var renderer = null;

    var STATUS = {
        RUNNING : 0,
        PAUSED : 1,
        STOPPED : 2
    }

    var init = function(){
        console.log('init loop');
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

    /**
     * The Loop
     */
    var loop = function(){
        if(status == STATUS.RUNNING){
            var newTime = getCurrentTime();
            var frameTime = newTime - currentTime;

            if(frameTime > maxFrameTime){
                frameTime = maxFrameTime;
            }

            currentTime = newTime;
            accumulator += frameTime;

            while(accumulator >= deltaTime){
                //console.log('update');
                if(state){
                    state.update(deltaTime);
                }
                time += deltaTime;
                accumulator -= deltaTime;
            }

            render();
            requestAnimationFrame(loop);
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

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();
