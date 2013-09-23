var Triangle = function(){

    var angle = 0,
        speed = 10;

    var init = function(){
        angle = 0;
    }

    this.init = function(){
        init();
    }

    this.getAngle = function(){
        return angle;
    }

    this.update = function(deltaTime){
        angle += speed * deltaTime;
        angle %= 360;
    }

    init();
}