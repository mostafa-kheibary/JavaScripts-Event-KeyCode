const Text = document.getElementById('key');
const Ewhich = document.getElementById('Ewhich');
const Ekey = document.getElementById('EKey');
const ELocation = document.getElementById('ELocation');
const Ecode = document.getElementById('Ecode');
const MyText = document.querySelectorAll('.text');
const toast = document.querySelector('.toast');
// event
document.body.addEventListener("keydown",function (e){
    Text.innerHTML = e.keyCode;
    Ewhich.innerHTML = e.keyCode;
    Ekey.innerHTML = e.key;
    ELocation.innerHTML =  e.location;
    Ecode.innerHTML =e.code;
});
for(const text of MyText){
    text.addEventListener("click",function(e){
        Copy(text);
        toastshow(e.pageX,e.pageY);
    })
}

// function
function Copy(text){
    const Ctext = text.innerHTML;
    navigator.clipboard.writeText(Ctext);
}
function toastshow(x,y){
    toast.style.left = `${x-38}px`;
    toast.style.top =  `${y-50}px`;
    toast.classList.add('toast-show')
    setTimeout(()=>{
        toast.classList.remove('toast-show')
    },500)
}