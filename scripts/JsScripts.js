/*
function hoverOverImage(id) {
    document.getElementById(id).src = "../portfolio/images/penkki2.jpg"
}
*/
var paths = {
    profiilikuva:["../portfolio/images/Anims/profiilikuva/0001.jpg",
                    "../portfolio/images/Anims/profiilikuva/0002.jpg",
                    "../portfolio/images/Anims/profiilikuva/0003.jpg",
                    "../portfolio/images/Anims/profiilikuva/0004.jpg",
                    "../portfolio/images/Anims/profiilikuva/0005.jpg",
                    "../portfolio/images/Anims/profiilikuva/0006.jpg",
                    "../portfolio/images/Anims/profiilikuva/0007.jpg",
                    "../portfolio/images/Anims/profiilikuva/0008.jpg",
                    "../portfolio/images/Anims/profiilikuva/0009.jpg",
                    "../portfolio/images/Anims/profiilikuva/0010.jpg",
                    "../portfolio/images/Anims/profiilikuva/0011.jpg",
                    "../portfolio/images/Anims/profiilikuva/0012.jpg"],
    profiilipaa:["../portfolio/images/Anims/profiilipaa/0001.jpg",
                    "../portfolio/images/Anims/profiilipaa/0002.jpg",
                    "../portfolio/images/Anims/profiilipaa/0003.jpg",
                    "../portfolio/images/Anims/profiilipaa/0004.jpg",
                    "../portfolio/images/Anims/profiilipaa/0005.jpg",
                    "../portfolio/images/Anims/profiilipaa/0006.jpg",
                    "../portfolio/images/Anims/profiilipaa/0007.jpg",
                    "../portfolio/images/Anims/profiilipaa/0008.jpg",
                    "../portfolio/images/Anims/profiilipaa/0009.jpg",
                    "../portfolio/images/Anims/profiilipaa/0010.jpg",
                    "../portfolio/images/Anims/profiilipaa/0011.jpg"],
    kasvot:["../portfolio/images/Anims/kasvot/0001.jpg",
                    "../portfolio/images/Anims/kasvot/0002.jpg",
                    "../portfolio/images/Anims/kasvot/0003.jpg",
                    "../portfolio/images/Anims/kasvot/0004.jpg",
                    "../portfolio/images/Anims/kasvot/0005.jpg",
                    "../portfolio/images/Anims/kasvot/0006.jpg",
                    "../portfolio/images/Anims/kasvot/0007.jpg",
                    "../portfolio/images/Anims/kasvot/0008.jpg",
                    "../portfolio/images/Anims/kasvot/0009.jpg",
                    "../portfolio/images/Anims/kasvot/0010.jpg",
                    "../portfolio/images/Anims/kasvot/0011.jpg",
                    "../portfolio/images/Anims/kasvot/0012.jpg",
                    "../portfolio/images/Anims/kasvot/0013.jpg",
                    "../portfolio/images/Anims/kasvot/0014.jpg",
                    "../portfolio/images/Anims/kasvot/0015.jpg",
                    "../portfolio/images/Anims/kasvot/0016.jpg"],
    puutyot:["../portfolio/images/Anims/puutyot/0001.jpg",
                    "../portfolio/images/Anims/puutyot/0002.jpg"],
    metsa:["../portfolio/images/Anims/metsa/0001.jpg",
                    "../portfolio/images/Anims/metsa/0002.jpg",
                    "../portfolio/images/Anims/metsa/0003.jpg",
                    "../portfolio/images/Anims/metsa/0004.jpg",
                    "../portfolio/images/Anims/metsa/0005.jpg",
                    "../portfolio/images/Anims/metsa/0006.jpg",
                    "../portfolio/images/Anims/metsa/0007.jpg",
                    "../portfolio/images/Anims/metsa/0008.jpg"],
    uimari:["../portfolio/images/Anims/uimari/0001.jpg",
                    "../portfolio/images/Anims/uimari/0002.jpg",
                    "../portfolio/images/Anims/uimari/0003.jpg",
                    "../portfolio/images/Anims/uimari/0004.jpg",
                    "../portfolio/images/Anims/uimari/0005.jpg",
                    "../portfolio/images/Anims/uimari/0006.jpg",
                    "../portfolio/images/Anims/uimari/0007.jpg",
                    "../portfolio/images/Anims/uimari/0008.jpg",
                    "../portfolio/images/Anims/uimari/0009.jpg",
                    "../portfolio/images/Anims/uimari/0010.jpg"]

}
/*
GLOBAL VARIABLES
*/

var intervalID;
var progressIntervalID;
var ww = 0;
var wh = 0;
var navScale;
/*EVENT LISTENERS

*/
window.addEventListener("orientationchange", function(event) {
    setTimeout(function() {
        createNavigator();
    }, 500)

});


/*
FUNCTIONS

*/
function mOver(elementId){
    var pathlenght = 0;
    intervalID = setInterval(frame, 2000);
    var imgCount = paths[elementId.id].length;
    var animFrame = 0;
    var step = (2000*imgCount/500);
    var width = 0;
    var prog = document.getElementsByClassName('progression');
    progressIntervalID = setInterval(progressfunction, step);
    function frame(){
        if (animFrame < imgCount){
            console.log(paths[elementId.id][animFrame]);
            elementId.src= paths[elementId.id][animFrame];
            animFrame++;
        }

    }
    function progressfunction(){
        if (width >= 100) {
            clearInterval(progressIntervalID);

        } else {
            width = width + 0.2;
            var k;
            for (k = 0; k < prog.length; k++) {
              prog[k].style.width = width + "%";
            }
        }





    }


}





function mOut(elementId){
    clearInterval(intervalID);
    clearInterval(progressIntervalID);
    elementId.src= paths[elementId.id][paths[elementId.id].length-1];

}

function createNavigator(){
    navScale = 18;
    var pw  = (document.documentElement.scrollWidth/navScale).toString();
    var ph = (document.documentElement.scrollHeight/navScale).toString();
    ww = (window.innerWidth/navScale).toString();
    wh = (window.innerHeight/navScale).toString();
    var c = document.getElementById("nCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = pw;
    ctx.canvas.height = ph;
    ctx.fillStyle = "hsl(206deg 48% 57%)";
    /*ctx.globalAlpha = 0.5;*/
    ctx.fillRect(0,0,ww,wh);



}

function mouseWheel(event){
    /*
    var dY = event.deltaY;
    wposY = wposY +dY;
    */
    var wposY = window.scrollY;
    if (wposY < 0) {
        wposY = 0;
    }
    if (wposY > document.documentElement.scrollHeight - wh*navScale) {
        wposY = document.documentElement.scrollHeight - wh*navScale;
    }

    var c = document.getElementById("nCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillRect(0, wposY/navScale, ww, wh);

}
