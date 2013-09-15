var Controller = function(){

    var input = {
        up: 0,
        down: 0,
        left: 0,
        right: 0
    }

    this.up = function(){
        input.up += 1;
    }

    this.down = function(){
        input.down += 1;
    }

    this.left = function(){
        input.left += 1;
    }

    this.right = function(){
        input.right += 1;
    }

    this.getInput = function(deltaTime){

        var output = {
            up: substractKeyPress('up'),
            down: substractKeyPress('down'),
            left: substractKeyPress('left'),
            right: substractKeyPress('right')
        }

        return output;
    }

    var substractKeyPress = function(key){
        if(input[key] > 0){
            input[key]--
            return 1;
        } else {
            return 0;
        }
    }
}