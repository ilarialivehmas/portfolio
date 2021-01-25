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
                    "../portfolio/images/Anims/uimari/0010.jpg"],
    hoplite:["../portfolio/images/JPGs/Hoplite_Illustration.jpg",
                    "../portfolio/images/JPGs/Hoplite_1_02_03.jpg",
                    "../portfolio/images/JPGs/Hoplite_2_04_30.jpg",
                    "../portfolio/images/JPGs/Hoplite_3_06_20.jpg"],
    kettu:["../portfolio/images/JPGs/Kettu.jpg"],

    kypara:["../portfolio/images/JPGs/kypara.jpg"],

    sienilamppu:["../portfolio/images/JPGs/Lamppu_paiva_yo.jpg",
                    "../portfolio/images/JPGs/sienilamppu"],

    mokki:["../portfolio/images/JPGs/Mokkiskene.jpg"],

    lukutoukka:["../portfolio/images/JPGs/Lukutoukka.jpg"],

    zero:["../portfolio/images/JPGs/Zero.jpg"],

    atk:["../portfolio/images/JPGs/ATK.jpg"],

    budha:["../portfolio/images/JPGs/Budha.jpg"],

    lamppu7:["../portfolio/images/JPGs/Lamppu7"],

    patsaspaa:["../portfolio/images/JPGs/Patsaspaa.jpg"]


}
/*
GLOBAL VARIABLES
*/

var intervalID;
var progressIntervalID;
var navWW = undefined;
var navWH = undefined;
var navH = undefined;
var c = undefined;
var ctx =undefined;

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


    navH = window.innerHeight/2;
    navWH = navH*window.innerHeight/document.documentElement.scrollHeight;
    navWW = navWH*window.innerWidth/window.innerHeight;
    let box = document.getElementById('banner').getBoundingClientRect();
    initCanvas();
    drawStaticCanvas();
    drawNavWindow(0);
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
    if (wposY > document.documentElement.scrollHeight - navWH*window.innerHeight/document.documentElement.scrollHeight) {
        wposY = document.documentElement.scrollHeight - navWH*window.innerHeight/document.documentElement.scrollHeight;
    }
    drawNavWindow(wposY);
}

function drawStaticCanvas(){
    var navCanvScale = navH/document.documentElement.scrollHeight;
    var digitalArtS = document.getElementById("digitalArt").getBoundingClientRect();
    ctx.fillStyle = "hsla(359, 35%, 49%, 0.7)";
    ctx.fillRect(0, (digitalArtS.y+window.pageYOffset)*navCanvScale, navWW, digitalArtS.height*navCanvScale);
    var programmingS = document.getElementById("programming").getBoundingClientRect();
    ctx.fillStyle = "hsla(19, 40%, 50%, 0.7)";
    ctx.fillRect(0, (programmingS.y+window.pageYOffset)*navCanvScale, navWW, programmingS.height*navCanvScale);

}

function drawNavWindow(wPosY){
    initCanvas();
    drawStaticCanvas();
    ctx.fillStyle = "hsla(206, 48%, 57%, 0.7)";
    ctx.fillRect(0, (wPosY*navH/document.documentElement.scrollHeight), navWW, navWH);
}

function initCanvas(){
    c = document.getElementById("nCanvas");
    c.style.top = (navH-(1/2*navH)).toString()+"px";
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.canvas.width  = navWW;
    ctx.canvas.height = navH;
}
