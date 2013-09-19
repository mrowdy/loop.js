
(function(){
    var $game = document.querySelector('#example2 .game')
    var $stop = $game.querySelector('.stop', $game);
    var $resume = $game.querySelector('.resume', $game);
    var $pause = $game.querySelector('.pause', $game);
    var $start = $game.querySelector('.start', $game);
    var $canvas = $game.querySelector('canvas', $game);
    var $fps = $game.querySelector('.fps', $game);

    var loop = new Loop({
        updateCallback: gameUpdater,
        renderCallback: gameRenderer
    });

    var world = new World(320, 240);
    var circle = new Circle({'x': 160, 'y': 120}, 50);
    var renderer = new Renderer($canvas);
    var controller = new Controller();
    var inputHandler = new InputHandler(controller);

    world.setCircle(circle);

    loop.setFPSCallback(function(fps){
        fps = fps.toFixed(2);
        $fps.innerHTML = fps;
    });

    $start.onclick = function(){
        loop.start(function(){
            console.log('started');
            $stop.classList.remove('inactive');
            $pause.classList.remove('inactive');
            $start.classList.add('inactive');
            $resume.classList.add('inactive');
        });
    }

    $pause.onclick = function(){
        loop.pause(function(){
            console.log('paused');
            $stop.classList.remove('inactive');
            $pause.classList.add('inactive');
            $start.classList.add('inactive');
            $resume.classList.remove('inactive');
        });
    }

    $resume.onclick = function(){
        loop.resume(function(){
            console.log('resumed');
            $stop.classList.remove('inactive');
            $pause.classList.remove('inactive');
            $start.classList.add('inactive');
            $resume.classList.add('inactive');
        });
    }

    $stop.onclick = function(){
        loop.stop(function(){
            console.log('stopped');
            $stop.classList.add('inactive');
            $pause.classList.add('inactive');
            $start.classList.remove('inactive');
            $resume.classList.add('inactive');
        });
    }

    function gameUpdater(deltaTime){
        world.update(deltaTime, controller.getInput(deltaTime));
    }

    function gameRenderer(){
        renderer.draw(world);
    }
})();
