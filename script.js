let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)


function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

/*Menu lateral*/

const lines = document.getElementById('menu-lines');
const faketrigger = document.getElementById('faketrigger');

faketrigger.addEventListener("change", ()=>{
    if(faketrigger.checked){
        lines.style.left = '250px';
    }else{
        lines.style.left = '50px';
    }
})