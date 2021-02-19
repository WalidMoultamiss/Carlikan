var vPrice = 0;

function checker(id){
    p=0;
    if(id=="moto"){
        vPrice=10;
        document.getElementById("essence").style.display="block";
        document.getElementById("diesel").style.display="none";
        document.getElementById("electric").style.display="block";
        document.getElementById("hybrid").style.display="none";
        document.getElementById("imgCheckCont").style.backgroundImage = "url('red-Kawasaki-Z1000-2.jpg')";
        p=1;
        document.getElementById("textPrice3").innerHTML= "NaN";
    }
    else if(id=="compact"){
        vPrice=12;
        document.getElementById("essence").style.display="block";
        document.getElementById("diesel").style.display="block";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybrid").style.display="block";
        document.getElementById("imgCheckCont").style.backgroundImage = "url('S8-nouvelle-volkswagen-golf-8-gti-un-prix-corse-de-43-210-eur-185627.jpg')";
        p=1;
        document.getElementById("textPrice3").innerHTML= "manual";
    }
    else if(id=="citadine"){
        vPrice=14;
        document.getElementById("essence").style.display="block";
        document.getElementById("diesel").style.display="block";
        document.getElementById("electric").style.display="block";
        document.getElementById("hybrid").style.display="block";
        document.getElementById("imgCheckCont").style.backgroundImage = "url('Fiat_500_by_Pogea_Racing_026.jpg')";
        p=1;
        document.getElementById("textPrice3").innerHTML= "manual";
    }
    else if(id=="utilitaire"){
        vPrice=20;
        document.getElementById("essence").style.display="none";
        document.getElementById("diesel").style.display="block";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybrid").style.display="none";
        document.getElementById("imgCheckCont").style.backgroundImage = "url('utilitaire.jpg')";
        p=1;
        document.getElementById("textPrice3").innerHTML= "manual";
    }
    else if(id=="berline"){
        vPrice=16;
        document.getElementById("essence").style.display="block";
        document.getElementById("diesel").style.display="block";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybrid").style.display="block";
        document.getElementById("imgCheckCont").style.backgroundImage = "url('berline.jpg')";
        p=1;
        document.getElementById("textPrice3").innerHTML= "automatic";
    }
    else if(id=="camion"){
        vPrice=250;
        document.getElementById("essence").style.display="none";
        document.getElementById("diesel").style.display="block";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybrid").style.display="block";
        document.getElementById("imgCheckCont").style.backgroundImage = "url('Scania_Trucks_R500_V8_6_x_2_AY12AOE_Red_536050_1280x851.jpg')";
        p=1;
        document.getElementById("textPrice3").innerHTML= "automatic";
    }
    else if(id=="engin"){
        vPrice=900;
        document.getElementById("essence").style.display="block";
        document.getElementById("diesel").style.display="block";
        document.getElementById("electric").style.display="none";
        document.getElementById("hybrid").style.display="none";
        document.getElementById("imgCheckCont").style.backgroundImage = "url('engin.jpg')";
        p=1;
        document.getElementById("textPrice3").innerHTML= "manual";

    }
    document.getElementById("textPrice").innerHTML= vPrice;
}



var perCent;
var prcPrice;
function clicker(id){
    if(id=="essence"){
        perCent=0.14;
        document.getElementById("textPrice3").innerHTML= "essence";
    }
    if(id=="hybrid"){
        perCent=0.09;
        document.getElementById("textPrice3").innerHTML= "hybrid";
    }
    if(id=="diesel"){
        perCent=0.21;
        document.getElementById("textPrice3").innerHTML= "diesel";
    }
    if(id=="electric"){
        perCent=0.05;
        document.getElementById("textPrice3").innerHTML= "electric";
    }


    prcPrice = vPrice*perCent+vPrice
}




function daysCalc () {
    var x = document.getElementById("daysType").value;
    document.getElementById("textPrice2").innerHTML=x;
    document.getElementById("textPrice4").innerHTML= Math.floor(x*prcPrice);
}


function showNavBar(){
        document.getElementById("navRespID").style.display="block";
        document.getElementById("brgMenu").style.display="none";
        }
        function hideNavBar(){
        document.getElementById("navRespID").style.display="none";
        document.getElementById("brgMenu").style.display="block";
        }

