//code for the header it sets the content and colour of the top banner
function openColour(t, e, n) {
  // Hide all elements with class="tabcontent" by default */
  var i, o, a
  for (o = document.getElementsByClassName("tabcontent"), i = 0; i < o.length; i++) o[i].style.display = "none"
  for (a = document.getElementsByClassName("tablink"), i = 0; i < a.length; i++) a[i].style.backgroundColor = ""

  ; // Show the specific tab content
  document.getElementById(t).style.display = "block",
    // Add the specific color to the button used to open the tab content
    e.style.backgroundColor = n
}
//all the functions below are a hide and show function for the divs under each tab
function androidshow() {
  var t = document.getElementById("bigman")
  t.style.display = "block"
}

function androidhide() {
  var t = document.getElementById("bigman")
  t.style.display = "none"
}

function codeshow() {
  var t = document.getElementById("codeman")
  t.style.display = "block"
}

function codehide() {
  var t = document.getElementById("codeman")
  t.style.display = "none"
}

function electronicsshow() {
  var t = document.getElementById("electronicsman")
  t.style.display = "block"
}

function electronicshide() {
  var t = document.getElementById("electronicsman")
  t.style.display = "none"
}

function othershow() {
  var t = document.getElementById("otherman")
  t.style.display = "block"
}

function otherhide() {
  var t = document.getElementById("otherman")
  t.style.display = "none"
}

function introhide() {
  var t = document.getElementById("introman")
  t.style.display = "none"
}

function introshow() {
  var t = document.getElementById("introman")
  t.style.display = "block"
}

function changeb() {
  var t = document.body.style.backgroundImage = "url(imgs/jlogo.png)";
}
//all the functions below are a hide and show function for the firework angle buttons
function onangleshow() {
  var t = document.getElementById("on-angle")
  t.style.display = "block"
}

function onanglehide() {
  var t = document.getElementById("on-angle")
  t.style.display = "none"
}

function offangleshow() {
  var t = document.getElementById("off-angle")
  t.style.display = "block"
}

function offanglehide() {
  var t = document.getElementById("off-angle")
  t.style.display = "none"
}
//all the functions below are a hide and show function for the firework angle text
function anglexshow() {
  var t = document.getElementById("anglex")
  t.style.display = "block"
}

function anglexhide() {
  var t = document.getElementById("anglex")
  t.style.display = "none"
}

function angleyshow() {
  var t = document.getElementById("angley")
  t.style.display = "block"
}

function angleyhide() {
  var t = document.getElementById("angley")
  t.style.display = "none"
}
function everyhide() {
  var t = document.getElementsByClassName("content")
  t.style.opacity= "0.0"
}
/*these two here are the ones that are called when the firework button is pressed
they make the on or off button appear or dissapear and make the canvas show/notshow
as well as make the angle button visible*/
function fire() {
  var t = document.getElementById("canvas")
  t.style.display = "block"
  var t = document.getElementById("off-button")
  t.style.display = "block"
  var t = document.getElementById("on-button")
  t.style.display = "none", onangleshow()
}
//opposite of above but if pressed either angle button poof and the drit is gone
function fireoff() {
  var t = document.getElementById("canvas")
  t.style.display = "none"
  var t = document.getElementById("on-button")
  t.style.display = "block"
  var t = document.getElementById("off-button")
  t.style.display = "none", offanglehide(), onanglehide()
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(),
  //code from here down is courtesy of shreyas : https://github.com/shreyaspandit/html5-fireworks
  window.onload = function() {t(t)}
    //}}

    function lolol() {
    function t(t) {
      var e = window.innerWidth,
        n = window.innerHeight
      a.width = e, a.height = n
    }

    function e(t) {
      return t * Math.PI / 180
    }
    //Fireworks {{
    function n() {
      this.explosions = [], this.x = s / 2, this.y = d, this.radius = 4, this.color = "#" + Math.floor(16777215 * Math.random()).toString(16),
        //Random number: Math.floor(Math.random() * (max - min + 1)) + min;
        this.life = Math.floor(Math.random() * (3 * d / 4 - d / 2 + 1)) + d / 2, this.velocity = 10, this.angle = Math.floor(71 * Math.random()) + 250
    }

    function i(t, e) {
      this.x = t, this.y = e, this.w = 10, this.h = 10, this.hue = Math.round(360 * Math.random()), this.alpha = 1, this.fade = 0, this.shrink = .93, this.radius = 10, this.speed = 15 * Math.cos(Math.random() * Math.PI / 2), this.angle = Math.random() * Math.PI * 2, this.resistance = .95, this.vx = this.speed * Math.cos(this.angle), this.vy = this.speed * Math.sin(this.angle), this.gravity = .2
      var n = this,
        i = setInterval(function() {
          n.radius < 1 ? clearInterval(i) : n.draw()
        }, 30)
    }

    function o() {
      l.fillStyle = "rgba(0, 0, 0, 0.3)", l.fillRect(0, 0, s, d)
      for (var t = 0; t < h.length; t++) h[t].draw()
      window.requestAnimationFrame(o)
    }
    var a = document.getElementById("canvas"),
      l = a.getContext("2d"),
      s = window.innerWidth,
      d = window.innerHeight
    a.width = s, a.height = d
    var h = []

    ; //requestAnimationFrame polyfill {{
    ! function() {
      for (var t = 0, e = ["webkit", "moz"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"]
      window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
        var i = (new Date).getTime(),
          o = Math.max(0, 16 - (i - t)),
          a = window.setTimeout(function() {
            e(i + o)
          }, o)
        return t = i + o, a
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
      })
    }(), window.addEventListener("resize", t), n.prototype.draw = function() {
        if (this.life <= 0) {
          var t = this.x,
            o = this.y
          h.pop()
          for (var a = 0; 100 > a; a++) {
            new i(t, o)
            var s = document.getElementById("anglex")
            s.innerHTML = t
            var s = document.getElementById("angley")
            s.innerHTML = o
          }
          h.push(new n)
        }
        this.x += this.velocity * Math.cos(e(this.angle)), this.y += this.velocity * Math.sin(e(this.angle)), this.life -= 10, l.beginPath(), l.fillStyle = this.color, l.arc(this.x, this.y, this.radius, 2 * Math.PI, !1), l.fill(), l.closePath()
      }, i.prototype.draw = function() {
        this.vx *= this.resistance, this.vy *= this.resistance, this.vy += this.gravity, this.x += this.vx, this.y += this.vy, this.radius *= this.shrink, this.alpha -= this.fade, l.save(), l.globalCompositeOperation = "lighter"
        var t = l.createRadialGradient(this.x, this.y, .1, this.x, this.y, this.radius)
        t.addColorStop(.1, "rgba(255,255,255," + this.alpha + ")"), t.addColorStop(.8, "hsla(" + this.hue + ", 100%, 50%, " + this.alpha + ")"), t.addColorStop(1, "hsla(" + this.hue + ", 100%, 50%, 0.1)"), l.fillStyle = t, l.beginPath(), l.arc(this.x, this.y, this.radius, 2 * Math.PI, !1), l.closePath(), l.fill(), l.restore()
      },
      //}}
      h.push(new n), window.requestAnimationFrame(o)
  }
