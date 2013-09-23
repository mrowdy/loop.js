var Renderer = function(canvas){

    var gl, n,
        u_xFormMatrix;

    var VSHADER = document.querySelector('#shader-vs').innerHTML,
        FSHADER = document.querySelector('#shader-fs').innerHTML;

    this.draw = function(){
        draw();
    }

    var draw = function(){
        var angle = triangle.getAngle();
        var radian = Math.PI * angle / 180.0;
        var cosB = Math.cos(radian);
        var sinB = Math.sin(radian);

        var rotationMatrix = new Float32Array([
            cosB,  sinB, 0.0, 0.0,
            -sinB,  cosB, 0.0, 0.0,
            0.0,   0.0, 1.0, 0.0,
            0.0,   0.0, 0.0, 1.0

        ]);

        gl.uniformMatrix4fv(u_xFormMatrix, false, rotationMatrix);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, n);
    }

    var init = function(){
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        initShaders(gl, VSHADER, FSHADER);
        u_xFormMatrix = gl.getUniformLocation(gl.program, 'u_xFormMatrix');
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        n = initVertexBuffers(gl);
        gl.clear(gl.COLOR_BUFFER_BIT);
        draw();
    }

    var initVertexBuffers = function(gl){
        var vertices = new Float32Array([
            0.0,  0.3,
            -0.3, -0.3,
            0.3, -0.3
        ]);
        var n = 3;

        var vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(a_Position);

        return n;
    }

    var initShaders = function(gl, vshader, fshader){
        var program = createProgram(gl, vshader, fshader);
        gl.useProgram(program);
        gl.program = program;
        return true;
    }

    var createProgram = function(gl, vshader, fshader){
        var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
        var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        return program;
    }

    var loadShader = function(gl, type, string){
        var shader = gl.createShader(type);
        gl.shaderSource(shader, string);
        gl.compileShader(shader);
        return shader;
    }

    init();
}