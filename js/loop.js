var Loop = function() {

    var status = '';

    this.start = function(){
        status = 'running';
        loop();
    }

    this.pause = function(){
        status = 'paused';
    }

    this.stop = function(){
        status = 'stopped';
        loop();
    }

    this.resume = function(){
        status = 'running';
        loop();
    }

    var init = function(){
        console.log('init loop');
        status = 'paused';
    }

    var loop = function(){
        while(status == 'running'){
            console.log('running');
        }
    }

    init();
}