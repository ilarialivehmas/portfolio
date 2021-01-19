/*
function hoverOverImage(id) {
    document.getElementById(id).src = "../portfolio/images/penkki2.png"
}
*/
var paths = {
    profiilikuva:["../portfolio/images/Anims/profiilikuva/1.png",
                    "../portfolio/images/Anims/profiilikuva/2.png",
                    "../portfolio/images/Anims/profiilikuva/3.png",
                    "../portfolio/images/Anims/profiilikuva/4.png",
                    "../portfolio/images/Anims/profiilikuva/5.png",
                    "../portfolio/images/Anims/profiilikuva/6.png",
                    "../portfolio/images/Anims/profiilikuva/7.png",
                    "../portfolio/images/Anims/profiilikuva/8.png",
                    "../portfolio/images/Anims/profiilikuva/9.png",
                    "../portfolio/images/Anims/profiilikuva/10.png",
                    "../portfolio/images/Anims/profiilikuva/11.png",
                    "../portfolio/images/Anims/profiilikuva/12.png"],
    profiilipaa:["../portfolio/images/Anims/profiilipaa/1.png",
                    "../portfolio/images/Anims/profiilipaa/2.png",
                    "../portfolio/images/Anims/profiilipaa/3.png",
                    "../portfolio/images/Anims/profiilipaa/4.png",
                    "../portfolio/images/Anims/profiilipaa/5.png",
                    "../portfolio/images/Anims/profiilipaa/6.png",
                    "../portfolio/images/Anims/profiilipaa/7.png",
                    "../portfolio/images/Anims/profiilipaa/8.png",
                    "../portfolio/images/Anims/profiilipaa/9.png",
                    "../portfolio/images/Anims/profiilipaa/10.png",
                    "../portfolio/images/Anims/profiilipaa/11.png"],
    kasvot:["../portfolio/images/Anims/kasvot/1.png",
                    "../portfolio/images/Anims/kasvot/2.png",
                    "../portfolio/images/Anims/kasvot/3.png",
                    "../portfolio/images/Anims/kasvot/4.png",
                    "../portfolio/images/Anims/kasvot/5.png",
                    "../portfolio/images/Anims/kasvot/6.png",
                    "../portfolio/images/Anims/kasvot/7.png",
                    "../portfolio/images/Anims/kasvot/8.png",
                    "../portfolio/images/Anims/kasvot/9.png",
                    "../portfolio/images/Anims/kasvot/10.png",
                    "../portfolio/images/Anims/kasvot/11.png",
                    "../portfolio/images/Anims/kasvot/12.png",
                    "../portfolio/images/Anims/kasvot/13.png",
                    "../portfolio/images/Anims/kasvot/14.png",
                    "../portfolio/images/Anims/kasvot/15.png",
                    "../portfolio/images/Anims/kasvot/16.png"],
    puutyot:["../portfolio/images/Anims/puutyot/1.png",
                    "../portfolio/images/Anims/puutyot/2.png"],
    metsa:["../portfolio/images/Anims/metsa/1.png",
                    "../portfolio/images/Anims/metsa/2.png",
                    "../portfolio/images/Anims/metsa/3.png",
                    "../portfolio/images/Anims/metsa/4.png",
                    "../portfolio/images/Anims/metsa/5.png",
                    "../portfolio/images/Anims/metsa/6.png",
                    "../portfolio/images/Anims/metsa/7.png",
                    "../portfolio/images/Anims/metsa/8.png"],
    uimari:["../portfolio/images/Anims/uimari/1.png",
                    "../portfolio/images/Anims/uimari/2.png",
                    "../portfolio/images/Anims/uimari/3.png",
                    "../portfolio/images/Anims/uimari/4.png",
                    "../portfolio/images/Anims/uimari/5.png",
                    "../portfolio/images/Anims/uimari/6.png",
                    "../portfolio/images/Anims/uimari/7.png",
                    "../portfolio/images/Anims/uimari/8.png",
                    "../portfolio/images/Anims/uimari/9.png",
                    "../portfolio/images/Anims/uimari/10.png"]

}
var interval;

function mOver(elementId){
    var pathlenght = 0;
    var interval = setInterval(frame, 2000);
    var imgCount = paths[elementId.id].length;
    console.log(imgCount);
    var animFrame = 0;
    function frame(){
        if (animFrame < imgCount){
            console.log(paths[elementId.id][animFrame]);
            elementId.src= paths[elementId.id][animFrame];
            animFrame++;
        }else {
            clearInterval(interval);
        }

    }

}
function mOut(elementId){
    clearInterval(interval);
    id.src="../portfolio/images/12Comp.png";

}
