var preloaderDiv = document.getElementById("preloader-banner-container");
var staticDiv = document.getElementById("static-background");
var waterfallDiv1 = document.getElementById("waterfall-1");
var waterfallDiv2 = document.getElementById("waterfall-2");

function loading(){
    setTimeout(() => {
        preloaderDiv.style.top = '0px';
        preloaderDiv.style.marginTop = '-115px';
        staticDiv.style.bottom = '0px';
    }, 1450);
}

function robby_drop() {
    setTimeout(() => {
        
    }, 1500);
}

setInterval(() => {
    if(waterfallDiv2.style.opacity == 1) {
        waterfallDiv2.style.opacity = 0;
    }
    else {
        waterfallDiv2.style.opacity = 1;
    }
}, 500);
loading();
robby_drop();