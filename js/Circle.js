var Circle = function() {
    var angle = 0,
        growth = 5;

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
        angle += (growth * deltaTime);
        if(angle > 360){
            angle = angle - 360;
        }
    }
    init();
}

var CircleRender = function(){
    var $circle;

    var init = function(){
        $circle = document.querySelector('#circle');
    }

    this.draw = function(state){
        setCircleAngle(state.getAngle());
    }

    var setCircleAngle = function(angle){
        $circle.style.webkitTransform = "rotate(" + angle +"deg)";
    }

    init();
}