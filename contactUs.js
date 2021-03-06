var x = document.getElementById("btnClick").addEventListener("click", click);
var z1; z2; z3; z4;
function click () {

    z1 = document.getElementById("textName").value;

    document.getElementById("text11").innerHTML = z1;
    z2 = document.getElementById("textEmail").value;
    document.getElementById("text12").innerHTML = z2;

    z3 = document.getElementById("textSubject").value;
    document.getElementById("text13").innerHTML = z3;

    z4 = document.getElementById("textMessage").value;
    document.getElementById("text14").innerHTML = z4;
}

function showNavBar(){
    document.getElementById("navRespID").style.display="block";
    document.getElementById("brgMenu").style.display="none";
    }
    function hideNavBar(){
    document.getElementById("navRespID").style.display="none";
    document.getElementById("brgMenu").style.display="block";
    }


