var $game = document.querySelector('#example3 .game')
var $stop = $game.querySelector('.stop', $game);
var $resume = $game.querySelector('.resume', $game);
var $pause = $game.querySelector('.pause', $game);
var $start = $game.querySelector('.start', $game);
var $canvas = $game.querySelector('canvas', $game);
var $fps = $game.querySelector('.fps', $game);

var triangle = new Triangle();
var renderer = new Renderer($canvas);

var loop = new Loop({
    renderCallback: renderer.draw,
    updateCallback: triangle.update
});

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
        triangle.init();
        $stop.classList.add('inactive');
        $pause.classList.add('inactive');
        $start.classList.remove('inactive');
        $resume.classList.add('inactive');
    });
}

