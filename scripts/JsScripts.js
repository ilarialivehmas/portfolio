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

    rome1:["../portfolio/images/Anims/rome1/0001.jpg",
        "../portfolio/images/Anims/rome1/0002.jpg",
        "../portfolio/images/Anims/rome1/0003.jpg",
        "../portfolio/images/Anims/rome1/0004.jpg",],
    rome2:["../portfolio/images/Anims/rome2/0001.jpg",
        "../portfolio/images/Anims/rome2/0002.jpg",
        "../portfolio/images/Anims/rome2/0003.jpg",
        "../portfolio/images/Anims/rome2/0004.jpg",
        "../portfolio/images/Anims/rome2/0005.jpg",
        "../portfolio/images/Anims/rome2/0006.jpg",],
    rome3:["../portfolio/images/Anims/rome3/0003.jpg",
        "../portfolio/images/Anims/rome3/0002.jpg",
        "../portfolio/images/Anims/rome3/0003.jpg",
        "../portfolio/images/Anims/rome3/0004.jpg",
        "../portfolio/images/Anims/rome3/0005.jpg",
        "../portfolio/images/Anims/rome3/0006.jpg",],
    rome4:["../portfolio/images/Anims/rome4/0001.jpg",
        "../portfolio/images/Anims/rome4/0002.jpg",
        "../portfolio/images/Anims/rome4/0003.jpg",
        "../portfolio/images/Anims/rome4/0004.jpg",
        "../portfolio/images/Anims/rome4/0005.jpg",
        "../portfolio/images/Anims/rome4/0006.jpg",],



    hoplite:["../portfolio/images/JPGs/Hoplite_Illustration.jpg",
                    "../portfolio/images/JPGs/Hoplite_1_02_03.jpg",
                    "../portfolio/images/JPGs/Hoplite_2_04_30.jpg",
                    "../portfolio/images/JPGs/Hoplite_3_06_20.jpg"],
    kettu:["../portfolio/images/JPGs/Kettu.jpg"],

    kypara:["../portfolio/images/JPGs/kypara2.jpg",
                    "../portfolio/images/JPGs/kypara.jpg"],

    sienilamppu:["../portfolio/images/JPGs/Lamppu_paiva_yo.jpg",
                    "../portfolio/images/JPGs/sieniLamppu"],

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
    elementId.src= paths[elementId.id][(paths[elementId.id].length-1)];
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
    /*changeColour();*/
}

function drawStaticCanvas(){
    var navCanvScale = navH/document.documentElement.scrollHeight;
    var digitalArtS = document.getElementById("digitalArt").getBoundingClientRect();

    /*Digital art Color*/
    ctx.fillStyle = "hsla(359, 35%, 49%, 0.7)";
    ctx.fillRect(0, (digitalArtS.y+window.pageYOffset)*navCanvScale, navWW, digitalArtS.height*navCanvScale);
    document.getElementById("toDigitalArtID").style.top = ((digitalArtS.y+window.pageYOffset)*navCanvScale+(digitalArtS.height*navCanvScale/2)-15).toString()+"px";

    var programmingS = document.getElementById("programming").getBoundingClientRect();
    /*programming Color art Color*/
    ctx.fillStyle = "hsla(19, 40%, 50%, 0.7)";
    ctx.fillRect(0, (programmingS.y+window.pageYOffset)*navCanvScale, navWW, programmingS.height*navCanvScale);
    document.getElementById("toProgrammingID").style.top = ((programmingS.y+window.pageYOffset)*navCanvScale+(programmingS.height*navCanvScale/2)-15).toString()+"px";

    /*design Color*/
    var designS = document.getElementById("design").getBoundingClientRect();
    ctx.fillStyle = "hsla(122, 89%, 10%, 0.7)";
    ctx.fillRect(0, (designS.y+window.pageYOffset)*navCanvScale, navWW, designS.height*navCanvScale);
    document.getElementById("toDesignID").style.top = ((designS.y+window.pageYOffset)*navCanvScale+(designS.height*navCanvScale/2)-15).toString()+"px";

}




function drawNavWindow(wPosY){
    initCanvas();
    drawStaticCanvas();
    ctx.fillStyle = "hsla(206, 48%, 40%, 0.3)";
    ctx.fillRect(0, (wPosY*navH/document.documentElement.scrollHeight), navWW, navWH);
    /*deco color*/
    ctx.fillStyle = "hsla(206, 48%, 57%, 0.6)";
    ctx.fillRect(0, ((wPosY*navH/document.documentElement.scrollHeight))+2, navWW, navWH-2);
}

function initCanvas(){
    navDiv = document.getElementById("navDiv");
    navDiv.style.top = (navH-(1/2*navH)).toString()+"px";
    c = document.getElementById("nCanvas");
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.canvas.width  = navWW;
    ctx.canvas.height = navH;
}
/*
function changeColour(){
    var body = document.getElementById("bodyID");
    var digitalArtS = document.getElementById("digitalArt").getBoundingClientRect();
    var programmingS = document.getElementById("programming").getBoundingClientRect();
    var designS = document.getElementById("design").getBoundingClientRect();
    if (digitalArtS.top < window.pageYOffset+window.innerHeight/2 < digitalArtS.bottom){
        body.style.boxShadow = "0vw 3vh 12vh 9vw hsl(123deg 91% 25%),0vw 2vh 7vh 3vw hsl(194deg 90% 83%),0vw 1vh 2vh 2vw hsl(188deg 100% 95%)";
    }else if(programmingS.top < window.pageYOffset+window.innerHeight/2 < programmingS.bottom){
        body.style.boxShadow = "0vw 3vh 12vh 9vw hsl(44deg 91% 75%),0vw 2vh 7vh 3vw hsl(194deg 90% 83%),0vw 1vh 2vh 2vw hsl(188deg 100% 95%)";
    }else if (designS.top < window.pageYOffset+window.innerHeight/2 < designS.bottom) {
        body.style.boxShadow = "0vw 3vh 12vh 9vw hsl(3deg 91% 75%),0vw 2vh 7vh 3vw hsl(194deg 90% 83%),0vw 1vh 2vh 2vw hsl(188deg 100% 95%)";
    }else {
        body.style.boxShadow = "0vw 3vh 12vh 9vw hsl(206deg 91% 75%),0vw 2vh 7vh 3vw hsl(194deg 90% 83%),0vw 1vh 2vh 2vw hsl(188deg 100% 95%)";
    }
}
*/
function skipTo(section){
    var element = undefined;
    if (section == "digitalArt"){
        element = document.getElementById("digitalArt");
        element.scrollIntoView();

    }else if (section == "programming"){
        element = document.getElementById("programming");
        element.scrollIntoView();

    }else if (section == "design"){
        element = document.getElementById("design");
        element.scrollIntoView();

    }else {
        console.log("wrong parameter at skip to");
    }

}
