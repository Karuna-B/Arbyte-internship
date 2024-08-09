let count = 0;

const countHeader = document.getElementById("count");
countHeader.innerHTML=count;
const buttonMinus = document.getElementById("sub");
const buttonPlus = document.getElementById("add");

buttonMinus.addEventListener('click',()=>{
   if(count>0){ 
    count --;
    countHeader.innerHTML=count;
   }
});

buttonPlus.addEventListener('click',()=>{
    if(count < 10){ 
        count ++ ;
        countHeader.innerHTML=count;
    }
});




