

function openColour(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function androidshow() {
var docelement = document.getElementById("bigman");
docelement.style.display='block';
}

function androidhide() {
var docelement = document.getElementById("bigman");
docelement.style.display='none';
}

function codeshow() {
var docelement = document.getElementById("codeman");
docelement.style.display='block';
}

function codehide() {
var docelement = document.getElementById("codeman");
docelement.style.display='none';
}

function electronicsshow() {
var docelement = document.getElementById("electronicsman");
docelement.style.display='block';
}

function electronicshide() {
var docelement = document.getElementById("electronicsman");
docelement.style.display='none';
}

function othershow() {
var docelement = document.getElementById("otherman");
docelement.style.display='block';
}

function otherhide() {
var docelement = document.getElementById("otherman");
docelement.style.display='none';
}

function introhide() {
var docelement = document.getElementById("introman");
docelement.style.display='none';
}
function introshow() {
var docelement = document.getElementById("introman");
docelement.style.display='block';
}

function onangleshow() {
var docelement = document.getElementById("on-angle");
docelement.style.display='block';
}
function onanglehide() {
var docelement = document.getElementById("on-angle");
docelement.style.display='none';
}
function offangleshow() {
var docelement = document.getElementById("off-angle");
docelement.style.display='block';
}
function offanglehide() {
var docelement = document.getElementById("off-angle");
docelement.style.display='none';
}
function anglexshow() {
var docelement = document.getElementById("anglex");
docelement.style.display='block';
}
function anglexhide() {
var docelement = document.getElementById("anglex");
docelement.style.display='none';
}
function angleyshow() {
var docelement = document.getElementById("angley");
docelement.style.display='block';
}
function angleyhide() {
var docelement = document.getElementById("angley");
docelement.style.display='none';
}
function fire() {
var docelement = document.getElementById("canvas");
	docelement.style.display='block';
var docelement = document.getElementById("off-button");
	docelement.style.display='block';
var docelement = document.getElementById("on-button");
	docelement.style.display='none';
	onangleshow()
}

function fireoff() {
var docelement = document.getElementById("canvas");
	docelement.style.display='none';
var docelement = document.getElementById("on-button");
	docelement.style.display='block';
var docelement = document.getElementById("off-button");
	docelement.style.display='none';
	offanglehide()
	onanglehide()
}

//code from here down is courtesy of shreyas : https://github.com/shreyaspandit/html5-fireworks

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;


    var fireworks = [];

    //requestAnimationFrame polyfill {{

    (function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    //}}

    function resizeCanvas(e) {
        var nW = window.innerWidth;
        var nH = window.innerHeight;

        canvas.width = nW;
        canvas.height = nH;
    }

    window.addEventListener("resize", resizeCanvas);

    function rad(deg) {
        return deg * Math.PI / 180;
    }
    function pad(str, length, prefix) {
        while (str.length < length) {
            str = prefix + str;
        }

        return str;
    }


    //Fireworks {{

    function Firework() {
        this.explosions = [];
        this.x = W / 2;
        this.y = H;

        this.radius = 4;
        this.color = "#" + (Math.floor(Math.random() * 0xffffff).toString(16));

        //Random number: Math.floor(Math.random() * (max - min + 1)) + min;

        this.life = Math.floor(Math.random() * ( ((3 * H) / 4) - (H / 2) + 1)) + (H / 2);

        this.velocity = 10;
        this.angle = Math.floor(Math.random() * (320 - 250 + 1)) + 250;
		

    }

    Firework.prototype.draw = function() {
        if(this.life <= 0) {

            var tx = this.x;
            var ty = this.y;

            fireworks.pop();

            for(var i = 0; i < 100; i++) {
                new Explosion(tx, ty);
				var element = document.getElementById("anglex");
element.innerHTML = (tx);
var element = document.getElementById("angley");
element.innerHTML = (ty);
            }

            fireworks.push(new Firework());
        }


        this.x += this.velocity * Math.cos(rad(this.angle));
        this.y += this.velocity * Math.sin(rad(this.angle));

        this.life -= 10;


        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }

    function Explosion(x, y) {
        this.x = x;
        this.y = y;
        this.w = 10;
        this.h = 10;

        this.hue = Math.round(Math.random() * 360);

        this.alpha = 1;
        this.fade = 0;

        this.shrink = 0.93;
        this.radius = 10;

        this.speed = Math.cos(Math.random() * Math.PI / 2) * 15;
        this.angle = Math.random() * Math.PI * 2;

        this.resistance = 0.95;


        this.vx = this.speed * Math.cos(this.angle);
        this.vy = this.speed * Math.sin(this.angle);


        this.gravity = 0.2;

        var that = this;
        var drawing = setInterval(function() {
            if (that.radius < 1) {
                clearInterval(drawing);
            } else {
                that.draw();
            }
        }, 30);

    };

    Explosion.prototype.draw = function() {
        this.vx *= this.resistance;
        this.vy *= this.resistance;

        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.radius *= this.shrink;
        this.alpha -= this.fade;


        ctx.save();

        ctx.globalCompositeOperation = 'lighter';

        var gradient = ctx.createRadialGradient(this.x, this.y, 0.1, this.x, this.y, this.radius);
        gradient.addColorStop(0.1, "rgba(255,255,255,"+ this.alpha +")");
        gradient.addColorStop(0.8, "hsla("+ this.hue +", 100%, 50%, "+ this.alpha +")");
        gradient.addColorStop(1, "hsla("+ this.hue +", 100%, 50%, 0.1)");

        ctx.fillStyle = gradient;


        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();

        ctx.restore();


    };

    //}}

    fireworks.push(new Firework());

    function draw() {

        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(0, 0, W, H);

        for(var i = 0; i < fireworks.length; i++) {
            fireworks[i].draw()
        }

        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);

};