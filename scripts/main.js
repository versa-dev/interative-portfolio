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
var cloudDiv = document.getElementById("contact-cloud");
var socialDiv = document.getElementById("social-container");
var fireworkDiv = document.getElementById("fireworks-container");
var bannerDiv = document.getElementById("banners-container");

var robby_flag = 0;
var final;



balloonDiv.style.left = 7480 - document.body.clientWidth/2 + "px";          /* set the balloon position when screen resize */
cloudDiv.style.bottom = -bannerDiv.offsetTop + 3840 + "px";       /* set the position of the contact-cloud */
window.addEventListener("resize", resize);
window.onwheel = robby_move;           /* add the onwheel event function */

// waterfall flow animation
setInterval(() => {
    if(waterfallDiv2.style.opacity == 1) {
        waterfallDiv2.style.opacity = 0;
    } else {
        waterfallDiv2.style.opacity = 1;
    }
}, 500);

// robby eye animation
setInterval(() => {
    robbyeyecloseDiv.style.opacity = 1;
    setTimeout(() => {
        robbyeyecloseDiv.style.opacity = 0;
    }, 300);
}, 3000); 

loading();
robby_drop();


function resize() {
    balloonDiv.style.left = 7480 + dockDiv.offsetLeft - document.body.clientWidth/2 + "px";
    cloudDiv.style.bottom = -bannerDiv.offsetTop + 3840 + "px";
}

// banner animation when preloading
function loading(){
    setTimeout(() => {
    }, 300);
    setTimeout(() => {
        preloaderDiv.style.top = '0px';
        preloaderDiv.style.marginTop = '-115px';
        staticDiv.style.bottom = '0px';
    }, 2450);
}

// robby animation when loading
function robby_drop() {
    setTimeout(() => {
        robbycontainerDiv.style.bottom = '0';
    }, 2950);
}

function robby_move(event) {  /* onwheel event function for horizontal move */
    
    var splash_left = splashDiv.offsetLeft;
    var dock_left = dockDiv.offsetLeft;
    var waterfall_left = waterfallDiv.offsetLeft;
    var balloon_left = balloonDiv.offsetLeft;
    var splash_top = splashDiv.offsetTop;
    var dock_top = dockDiv.offsetTop;
    var waterfall_top = waterfallDiv.offsetTop;
    var balloon_top = balloonDiv.offsetTop;
    var cloud_top = cloudDiv.offsetTop;
    var banner_top = bannerDiv.offsetTop;
    var y;
    var y1;
    var i = 0;
    
    if (((Math.abs(document.body.clientWidth/2 - balloonDiv.offsetWidth/2 - balloonDiv.offsetLeft) <= 2)) && robby_flag != 0) {
        y1 = event.deltaY; 
        if( y1 > 100 ) {
            y1 = 100;
        } else if( y1 < -100) {
            y1 = -100;
        }
        if (y1 > 0 && (cloudDiv.offsetTop >=0)) {
            if (robby_flag == 1) {
                robby_flag = 2;
                console.log("sadfhaskfhsuihefiufhiu ")
                robbycontainerDiv.style.left = robbycontainerDiv.offsetLeft + 200 + "px";
                cloudDiv.style.top = cloudDiv.offsetHeight - balloonDiv.offsetHeight - balloonDiv.offsetTop - document.getElementById("contact-cloud-middle").offsetHeight + "px";
                socialDiv.style.top = "0%";                  /* add the animation of banner of social sites */
                document.getElementById("robby-slides").style.left = '-1600px';
                final = setInterval(() => {
                    setTimeout(() => {
                        document.getElementById("robby-slides").style.left = '0px';
                    }, 300);
                    document.getElementById("robby-slides").style.left = '-1600px';
                    document.getElementById("robby-slides").style.top = "0px";
                    robbyeyecloseDiv.style.left = "90px";   
                }, 2100);
            }
        } else if ((balloonDiv.offsetHeight + balloonDiv.offsetTop >=  dockDiv.offsetTop) && (y1 < 0) && (robby_flag == 1)) {
            robby_flag = 0;
            console.log('------')
        } else {    
            if ( y1 < 0 && robby_flag == 2) {
                robby_flag = 1;
                console.log("-----------;;;;;;-------------");
                clearInterval(final);
                document.getElementById("robby-slides").style.left = '0px';
                document.getElementById("robby-slides").style.top = '-200px';
                robbyeyecloseDiv.style.left = "54px";
                robbycontainerDiv.style.left = robbycontainerDiv.offsetLeft - 200 + "px";
            }
            if ( y1 > 0) {
                document.getElementById("robby-slides").style.left = '0px';
                document.getElementById("robby-slides").style.top = '0px';
                robbyeyecloseDiv.style.left = "90px";
            } else {
                document.getElementById("robby-slides").style.left = '0px';
                document.getElementById("robby-slides").style.top = '-200px';
                robbyeyecloseDiv.style.left = "54px";
            }
            robby_flag = 1;
            socialDiv.style.top = "100%";
            splash_top += y1;
            dock_top += y1;
            waterfall_top += y1/2;
            cloud_top += y1;
            banner_top += y1;
            
            splashDiv.style.top = splash_top + "px";
            dockDiv.style.top = dock_top + "px";
            waterfallDiv.style.top = waterfall_top + "px";
            bannerDiv.style.top = banner_top + "px";
            cloudDiv.style.bottom = -bannerDiv.offsetTop + 3840 + "px";
            cloudDiv.style.top = cloud_top + "px";
            // console.log(balloonDiv.offsetTop + balloonDiv.offsetHeight, dockDiv.offsetTop)
        }
    } else {
        if (event.deltaY < 0 && splash_left >= 0){
            if (splash_left > 0) {
                balloon_left -= splash_left;
                waterfall_left -= splash_left;
                dock_left -= splash_left;
                splash_left =0;
            }
            y = 0;
        } else if ((dock_left <= (-7680 + document.body.clientWidth)) && (event.deltaY > 0) ) {
            if (dock_left < (-7680 + document.body.clientWidth)) {
                var dis = -7680 + document.body.clientWidth - dock_left;
                dock_left += dis;
                waterfall_left += dis;
                balloon_left += dis;
                splash_left += dis;  
            }
            robby_flag = 1;    
            y = 0;
        } else {
            y = event.deltaY;
            if (y > 0) {
                document.getElementById("robby-slides").style.left = '-200px';
                document.getElementById("robby-slides").style.top = "0px";
                robbyeyecloseDiv.style.left = "90px"; 
                setTimeout(() => {
                    document.getElementById("robby-slides").style.left = '-400px';
                }, 300);    
            } else if (y < 0){
                document.getElementById("robby-slides").style.left = "-200px";
                document.getElementById("robby-slides").style.top = "-200px";
                robbyeyecloseDiv.style.left = "54px";
                setTimeout(() => {
                    document.getElementById("robby-slides").style.top = "-200px";
                    document.getElementById("robby-slides").style.left = '-400px';
                    robbyeyecloseDiv.style.left = "54px";
                }, 300);                 
            } else {
                document.getElementById("robby-slides").style.top = "0px"; 
                document.getElementById("robby-slides").style.left = "0px";  
            }
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
}

