const Text = document.getElementById('key');
const Ewhich = document.getElementById('Ewhich');
const Ekey = document.getElementById('EKey');
const ELocation = document.getElementById('ELocation');
const Ecode = document.getElementById('Ecode');
// get all key code and shoow them
document.body.addEventListener("keydown",function(e){
    Text.innerHTML = e.keyCode;
    Ewhich.innerHTML = e.keyCode;
    Ekey.innerHTML = e.key;
    ELocation.innerHTML =  e.location;
    Ecode.innerHTML =e.code;
});