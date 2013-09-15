var World = function(width, height) {
    var circle;

    var init = function(){

    }

    this.getWidth = function(){
        return width;
    }

    this.getHeight = function(){
        return height;
    }

    this.init = function(){
        init();
        if(circle){
            circle.init();
        }
    }

    this.setCircle = function(newCircle){
        circle = newCircle;
    }

    this.getCircle = function(){
        return circle;
    }

    this.update = function(deltaTime, input){
        if(circle){
            circle.up(input.up),
            circle.down(input.down),
            circle.left(input.left),
            circle.right(input.right),
            circle.update(deltaTime);
        }
    }

    init();
}
