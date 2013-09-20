var Circle = function(position, size) {
    var angle = 0,
        rotation = 20,
        speed = 10,
        initSize,
        sizeDirection = 3,

        velocity = {
            'x': 1,
            'y': 1
        },

        start = {
           'x': position.x,
           'y': position.y
        };

    var init = function(){
        angle = 0;
        initSize = size;
        position.x = start.x;
        position.y = start.y;
    }

    this.init = function(){
        init();
    }

    this.getAngle = function(){
        return angle;
    }

    this.getPosition = function(){
        return position;
    }

    this.getSize = function(){
        return size;
    }

    this.update = function(deltaTime){
        angle += (rotation * deltaTime);
        if(angle > 360){
            angle = angle - 360;
        }

        size += sizeDirection * deltaTime;
        if(size > initSize + initSize / 2){
            sizeDirection *= -1;
        }
        if(size < initSize - initSize / 2){
            sizeDirection *= -1;
        }

        if(position.x >= (640 - size)){
            position.x = 640 - size;
            velocity.x *= -1;
        }

        if(position.x <= (0 + size)){
            position.x = 0 + size;
            velocity.x *= -1;
        }

        if(position.y <= (0 + size)){
            position.y = 0 + size;
            velocity.y *= -1;
        }

        if(position.y >= (240 - size)){
            position.y = 240 - size;
            velocity.y *= -1;
        }

        position.x += speed * velocity.x  * deltaTime;
        position.y += speed * velocity.y  * deltaTime;
    }
    init();
}
