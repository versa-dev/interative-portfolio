var contentDiv = document.getElementById("content");
var preloaderDiv = document.getElementById("preloader-banner-container");
var staticDiv = document.getElementById("static-background");
var splashDiv = document.getElementById("splash-container");
var dockDiv = document.getElementById("dock-sea-container");
var waterfallDiv1 = document.getElementById("waterfall-1");
var waterfallDiv2 = document.getElementById("waterfall-2");
var robbycontainerDiv = document.getElementById("robby-container");
var robbyeyecloseDiv = document.getElementById("robby-eyes-close");
var waterfallDiv = document.getElementById("ground-and-grass-container-2");
var balloonDiv = document.getElementById("balloon");

function loading(){
    setTimeout(() => {
        preloaderDiv.style.top = '0px';
        preloaderDiv.style.marginTop = '-115px';
        staticDiv.style.bottom = '0px';
    }, 1450);
}

function robby_drop() {
    setTimeout(() => {
        robbycontainerDiv.style.bottom = '0';
    }, 2950);
}
balloonDiv.style.left = 7480 - document.body.clientWidth/2 + "px";
function robbyMove(event) {
    
    var splash_left = splashDiv.offsetLeft;
    var dock_left = dockDiv.offsetLeft;
    var waterfall_left = waterfallDiv.offsetLeft;
    var balloon_left = balloonDiv.offsetLeft;
    var y;
    
    if (event.deltaY < 0 && splash_left >= 0){
        if (splash_left > 0) {
            balloon_left -= splash_left;
            waterfall_left -= splash_left;
            dock_left -= splash_left;
            splash_left =0;
        }
        y = 0;
    }
    else if (dock_left <= ((-7680+document.body.clientWidth)) && event.deltaY > 0 ) {
        if (dock_left < (-7680+document.body.clientWidth)) {
            var dis = -7680 + document.body.clientWidth - dock_left;
            dock_left += dis;
            waterfall_left += dis;
            balloon_left += dis;
            splash_left += dis;
        }
        y = 0;
    }
    else {
        y = event.deltaY;
    }
    balloon_left -= y;
    waterfall_left -= y;
    splash_left -= y;
    dock_left -= y;
    splashDiv.style.left = splash_left + "px";
    dockDiv.style.left = dock_left + "px";    
    waterfallDiv.style.left = waterfall_left + "px";
    balloonDiv.style.left = balloon_left + "px";
    
}

contentDiv.onwheel = robbyMove;
// contentDiv.onwheel = balloon_position;
window.addEventListener("resize", balloon_position);
function balloon_position() {
    console.log(document.body.clientWidth,balloonDiv.offsetLeft)
    balloonDiv.style.left = 7480 - document.body.clientWidth/2 + "px";
    console.log(balloonDiv.offsetLeft)
}

setInterval(() => {
    if(waterfallDiv2.style.opacity == 1) {
        waterfallDiv2.style.opacity = 0;
    }
    else {
        waterfallDiv2.style.opacity = 1;
    }
}, 500);

setInterval(() => {
    robbyeyecloseDiv.style.opacity = 1;
    setTimeout(() => {
        robbyeyecloseDiv.style.opacity = 0;
    }, 300);
}, 3000); 

loading();
robby_drop();


