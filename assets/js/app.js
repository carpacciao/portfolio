// header-carousel

let leftA = document.querySelector('.left-arrow a');
let rightA = document.querySelector('.right-arrow a');
let bg = document.querySelector('.header-carousel');

//inserer images dans le tableau
let images = ['assets/img/1.jpeg', 'assets/img/2.jpeg', 'assets/img/3.jpeg', 'assets/img/4.jpeg'];
let count = 0;

function right(){
    count ++;
    if(count > images.length -1){
        count = 0;
    }
    bg.style.backgroundImage = "url(" + images[count] +")";
    console.log(count);
}
function left(){
    count --;
    if(count < 0){
        count = images.length -1;
    }
    bg.style.backgroundImage = "url(" + images[count] + ")";
    console.log(count);
}
leftA.addEventListener('click', left);
rightA.addEventListener('click', right);
setInterval(right, 5000);

