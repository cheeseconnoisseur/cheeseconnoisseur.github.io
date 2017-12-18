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
var divOne = document.getElementById("bigman");
divOne.style.display='block';
}

function androidhide() {
var divOne = document.getElementById("bigman");
divOne.style.display='none';
}

function codeshow() {
var divOne = document.getElementById("codeman");
divOne.style.display='block';
}

function codehide() {
var divOne = document.getElementById("codeman");
divOne.style.display='none';
}

function electronicsshow() {
var divOne = document.getElementById("electronicsman");
divOne.style.display='block';
}

function electronicshide() {
var divOne = document.getElementById("electronicsman");
divOne.style.display='none';
}

function othershow() {
var divOne = document.getElementById("otherman");
divOne.style.display='block';
}

function otherhide() {
var divOne = document.getElementById("otherman");
divOne.style.display='none';
}