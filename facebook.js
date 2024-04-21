var settingmenu = document.querySelector(".settings-menu");

function settingmenutoggle(){

    settingmenu.classList.toggle("setting-menu-height");
}

 var btn= document.getElementById("dark-btn");
function darkbtn(){
btn.classList.toggle("dark-btn-on")
document.body.classList.toggle("dark-theme")
}