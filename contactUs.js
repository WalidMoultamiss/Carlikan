var x = document.getElementById("btnClick").addEventListener("click", click);

function click () {
    var z = document.getElementById("textName").value;
    document.getElementById("text11").innerHTML = z;
    var z = document.getElementById("textEmail").value;
    document.getElementById("text12").innerHTML = z;

    var z = document.getElementById("textSubject").value;
    document.getElementById("text13").innerHTML = z;

    var z = document.getElementById("textMessage").value;
    document.getElementById("text14").innerHTML = z;
}

function showNavBar(){
    document.getElementById("navRespID").style.display="block";
    document.getElementById("brgMenu").style.display="none";
    }
    function hideNavBar(){
    document.getElementById("navRespID").style.display="none";
    document.getElementById("brgMenu").style.display="block";
    }