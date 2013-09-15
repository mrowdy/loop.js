var InputHandler = function(controller){

    var init = function(){
        eventBindings();
    }

    var eventBindings = function(){
        Event.addEvent(window, 'keypress', onKeyPress);
    }

    var onKeyPress = function(evt){
        switch(evt.keyCode){
            case 119:
                controller.up();
                break;
            case 97:
                controller.left();
                break;
            case 115:
                controller.down();
                break;
            case 100:
                controller.right();
                break;
        }
    }
    init();
}
