var loop = new Loop();

var $status = document.querySelector('#status');

var $start = document.querySelector('#start');
$start.onclick = function(){
    loop.start(function(){
        appendStatus('started');
    });
}

var $pause = document.querySelector('#pause');
$pause.onclick = function(){
    loop.pause(function(){
        appendStatus('paused');
    });
}

var $resume = document.querySelector('#resume');
$resume.onclick = function(){
    loop.resume(function(){
        appendStatus('resumed');
    });
}

var $stop = document.querySelector('#stop');
$stop.onclick = function(){
    loop.stop(function(){
        appendStatus('stopped');
    });
}

function appendStatus(status){
    $status.innerHTML = $status.innerHTML + status + "<br />";
}