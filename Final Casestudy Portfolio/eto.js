
var icon1 = document.getElementById("icon1");
icon1.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon1.src = "img/moon.png";
    } else{
        icon1.src ="img/sun.png";
    }
};
