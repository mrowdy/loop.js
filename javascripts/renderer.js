var Renderer = function() {

    var canvas,
        context;

    var init = function(){
        canvas = document.querySelector('#game canvas');
        context = canvas.getContext('2d');
        clear();
    }

    this.init = function(){
        init();
    }

    this.draw = function(world){
        clear();
        var circle = world.getCircle();
        var pos = circle.getPosition();
        var rad = circle.getAngle() * Math.PI / 180

        context.translate(pos.x, pos.y);
        context.rotate(rad);

        var gradient = context.createLinearGradient(0, circle.getSize() * -1, 0, circle.getSize());
        gradient.addColorStop(0,"#ff0000");
        gradient.addColorStop(1,"#0000ff")
        context.fillStyle = gradient;

        context.beginPath();
        context.arc(0, 0, circle.getSize(), 0, Math.PI*2, true);
        context.fill();
        context.closePath();

        context.rotate(rad * -1);
        context.translate(pos.x * -1, pos.y * -1);
    }

    var clear = function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#ffffff';
        context.fillRect(0,0, canvas.width,canvas.height);
    }

    init();
}
