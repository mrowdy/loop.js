var loop = new Loop();

var $start = document.querySelector('#start');
$start.onclick = function(){
    loop.start();
}

var $pause = document.querySelector('#pause');
$pause.onclick = function(){
    loop.pause();
}

var $resume = document.querySelector('#resume');
$resume.onclick = function(){
    loop.resume();
}

var $stop = document.querySelector('#stop');
$stop.onclick = function(){
    loop.stop();
}