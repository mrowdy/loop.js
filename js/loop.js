var Loop = function() {

    var instance = this,
        status = '',
        time = 0.0,
        deltaTime = 0.01;

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
    var setState = function(newState){
        state = newState;
    }

    /**
     * Sets Renderer.
     * Renderer needs render method
     * @param newRenderer
     */
    var setRenderer = function(newRenderer){
        renderer = newRenderer;
    }

    /**
     * Start Game
     */
    this.start = function(){
        if(status == STATUS.STOPPED){
            console.log('start');
            currentTime = getCurrentTime();
            status = STATUS.RUNNING;
            loop();
        }
    }

    /**
     * Pause Game
     */
    this.pause = function(){
        if(status == STATUS.RUNNING){
            console.log('pause');
            status = STATUS.PAUSED;
        }
    }

    /**
     * Stop Game
     */
    this.stop = function(){
        if(status != STATUS.STOPPED){
            console.log('stop');
            status = STATUS.STOPPED;
        }
    }

    /**
     * Resume Paused Game
     */
    this.resume = function(){
        if(status == STATUS.PAUSED){
            console.log('resume');
            status = STATUS.RUNNING;
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

            if(frameTime > 0.25){
                frameTime = 0.25;
            }

            currentTime = newTime;
            accumulator += frameTime;

            while(accumulator >= deltaTime){
                //console.log('update');
                //state.update(deltaTime);
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
        //console.log('render');
        if(renderer != null && state != null){
            renderer.render(state);
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
