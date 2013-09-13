var loop = new Loop();
var state = new Circle();
var renderer = new CircleRender();
loop.setState(state);
loop.setRenderer(renderer);

var $status = document.querySelector('#status');
var $stop = document.querySelector('#stop');
var $resume = document.querySelector('#resume');
var $pause = document.querySelector('#pause');
var $start = document.querySelector('#start');
var $range =  document.querySelector('#deltaTime');
var $deltaTimeValue =  document.querySelector('#deltaTimeValue');
var $fps = document.querySelector('#fps');

loop.setFPSCallback(function(fps){
    fps = fps.toFixed(2);
    $fps.innerHTML = fps;
});


$start.onclick = function(){
    loop.start(function(){
        appendStatus('started');
    });
}

$pause.onclick = function(){
    loop.pause(function(){
        appendStatus('paused');
    });
}

$resume.onclick = function(){
    loop.resume(function(){
        appendStatus('resumed');
    });
}

$stop.onclick = function(){
    loop.stop(function(){
        appendStatus('stopped');
    });
}

$range.onchange = function(){
    var deltaTime = $range.value;
    $deltaTimeValue.innerHTML = deltaTime / 10+ 'ms';
    loop.setDeltaTime(deltaTime / 1000);
}

function appendStatus(status){
    $status.innerHTML = $status.innerHTML + status + "<br />";
}

