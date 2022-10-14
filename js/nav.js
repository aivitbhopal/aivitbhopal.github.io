myID = document.getElementById("arbazbtn");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 500) {
        myID.className = "showarbnav"
    } else {
        myID.className = "hidearbnav"
    }
};

window.addEventListener("scroll", myScrollFunc);