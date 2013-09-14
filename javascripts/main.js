var loop = new Loop();
var world = new World(320, 240);
var circle = new Circle({'x': 160, 'y': 120}, 50);
var renderer = new Renderer();

world.setCircle(circle);
loop.setRenderer(renderer);
loop.setState(world);

var $game = document.querySelector('#game')
var $stop = document.querySelector('#stop', $game);
var $resume = document.querySelector('#resume', $game);
var $pause = document.querySelector('#pause', $game);
var $start = document.querySelector('#start', $game);
var $fps = document.querySelector('#fps', $game);

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
