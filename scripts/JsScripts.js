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
    id.src="../portfolio/images/12Comp.jpg";

}
