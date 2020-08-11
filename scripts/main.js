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
var cloudDiv_5 = document.getElementById("cloud-5");
var cloudDiv_6 = document.getElementById("cloud-6");
var cloudDiv_7 = document.getElementById("cloud-7");
var cloudDiv_8 = document.getElementById("cloud-8");
var cloudDiv_9 = document.getElementById("cloud-9");
var contactDiv = document.getElementById("contact-center");
var buildingDiv = document.getElementById("buildings-container");
var experienceDiv = document.getElementById("experience-2-container");
var skill_1_container = document.getElementById("skill-1-container");
var ribbon_2_1 = document.getElementById("ribbon-2-1");
var fish_list = document.getElementsByClassName("fish");
// var building_list = document.getElementsByClassName("building");
// var hand_open_list = document.getElementsByClassName("squid-hand-open");
// var hand_close_list = document.getElementsByClassName*("squid-hand-close");
// var chain = document.getElementsByClassName("chain-block-and-string-container");
// var experienceDiv = document.getElementById("experience-text-container-2");
// console.log(hand_close_list, hand_open_list, chain, experienceDiv)
var robby_flag = 0;
var final;




balloonDiv.style.left = 7480 - document.body.clientWidth/2 + "px";          /* set the balloon position when screen resize */
cloudDiv.style.bottom = -bannerDiv.offsetTop + 3840 + "px";
contactDiv.style.bottom = -bannerDiv.offsetTop + 3840 + document.getElementById("contact-cloud-middle").offsetHeight + "px";       /* set the position of the contact-cloud */
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
    contactDiv.style.bottom = -bannerDiv.offsetTop + 3840 + document.getElementById("contact-cloud-middle").offsetHeight + "px";
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
    var skill_1_left = skill_1_container.offsetLeft;
    var ribbon2_left = ribbon_2_1.offsetLeft;
    var buildings_left = buildingDiv.offsetLeft;
    var experience_left = experienceDiv.offsetLeft;
    var dock_left = dockDiv.offsetLeft;
    var waterfall_left = waterfallDiv.offsetLeft;
    var balloon_left = balloonDiv.offsetLeft;
    var cloud5_left = cloudDiv_5.offsetLeft;
    var cloud6_left = cloudDiv_6.offsetLeft;
    var cloud7_left = cloudDiv_7.offsetLeft;
    var cloud8_left = cloudDiv_8.offsetLeft;
    var cloud9_left = cloudDiv_9.offsetLeft;
    var splash_top = splashDiv.offsetTop;
    var skill_1_top = skill_1_container.offsetTop;
    var ribbon2_top = ribbon_2_1.offsetTop;
    var buildings_top = buildingDiv.offsetTop;
    var experience_top = experienceDiv.offsetTop;
    var dock_top = dockDiv.offsetTop;
    var waterfall_top = waterfallDiv.offsetTop;
    var balloon_top = balloonDiv.offsetTop;
    var cloud_top = cloudDiv.offsetTop;
    var banner_top = bannerDiv.offsetTop;
    var cloud5_top = cloudDiv_5.offsetTop;
    var cloud6_top = cloudDiv_6.offsetTop;
    var cloud7_top = cloudDiv_7.offsetTop;
    var cloud8_top = cloudDiv_8.offsetTop;
    var cloud9_top = cloudDiv_9.offsetTop;
    var contact_top = contactDiv.offsetTop;
    

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
            dockDiv.style.top = document.getElementById("vertical-layer").offsetHeight + "px";
            splashDiv.style.top = document.getElementById("vertical-layer").offsetHeight - splashDiv.offsetHeight + "px";
        } else {    
            if ( y1 < 0 && robby_flag == 2) {
                robby_flag = 1;
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
            if (dock_top + y1 < balloonDiv.offsetTop + balloonDiv.offsetHeight) {
                y1 = balloonDiv.offsetTop + balloonDiv.offsetHeight - dock_top;
            }
            // vertical movement of robby
            robby_flag = 1;
            socialDiv.style.top = "100%";
            splash_top += y1;
            dock_top += y1;
            skill_1_top += y1;
            ribbon2_top += y1;
            buildings_top += y1;
            experience_top += y1;
            waterfall_top += y1/2;
            cloud_top += y1;
            banner_top += y1;
            contact_top += y1;
            cloud5_top += y1/10;
            cloud6_top += y1/10;
            cloud7_top += y1/10;
            cloud8_top += y1/10;
            cloud9_top += y1/10;            
            
            contactDiv.style.top = contact_top + "px";
            splashDiv.style.top = splash_top + "px";
            dockDiv.style.top = dock_top + "px";
            waterfallDiv.style.top = waterfall_top + "px";
            bannerDiv.style.top = banner_top + "px";
            cloudDiv.style.bottom = -bannerDiv.offsetTop + 3840 + "px";
            cloudDiv.style.top = cloud_top + "px";
            cloudDiv_5.style.top =cloud5_top + "px";
            cloudDiv_6.style.top =cloud6_top + "px";
            cloudDiv_7.style.top =cloud7_top + "px";
            cloudDiv_8.style.top =cloud8_top + "px";
            cloudDiv_9.style.top =cloud9_top + "px";
            skill_1_container.style.top = skill_1_top + "px";
            ribbon_2_1.style.top = ribbon2_top + "px";
            buildingDiv.style.top = buildings_top + "px";
            experienceDiv.style.top = experience_top + "px";
        }
    } else {
        if (event.deltaY < 0 && splash_left >= 0){
            if (splash_left > 0) {
                balloon_left -= splash_left;
                waterfall_left -= splash_left;
                dock_left -= splash_left;
                skill_1_left -= splash_left;
                ribbon2_left -= splash_left;
                buildings_left -= splash_left;
                experience_left -= splash_left;
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
                skill_1_left += dis;
                ribbon2_left += dis;
                buildings_left += dis;
                experience_left += dis;
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
                console.log('fhasufhwehrfawfhuaihwirufhasuirhweuifhawiuefhui')
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
        // horizontal movement of robby
        balloon_left -= y;
        waterfall_left -= y;
        splash_left -= y;
        dock_left -= y;
        skill_1_left -= y;
        ribbon2_left -= y;
        buildings_left -= y;
        experience_left -= y;
        cloud5_left -= y/10;
        cloud6_left -= y/10;
        cloud7_left -= y/10;
        cloud8_left -= y/10;
        cloud9_left -= y/10; 
        cloudDiv_5.style.left =cloud5_left + "px";
        cloudDiv_6.style.left =cloud6_left + "px";
        cloudDiv_7.style.left =cloud7_left + "px";
        cloudDiv_8.style.left =cloud8_left + "px";
        cloudDiv_9.style.left =cloud9_left + "px"; 
        splashDiv.style.left = splash_left + "px";
        dockDiv.style.left = dock_left + "px";
        waterfallDiv.style.left = waterfall_left + "px";
        balloonDiv.style.left = balloon_left + "px";
        skill_1_container.style.left = skill_1_left + "px";
        ribbon_2_1.style.left = ribbon2_left + "px";
        experienceDiv.style.left = experience_left + "px";
        buildingDiv.style.left = buildings_left + "px";
    }
}