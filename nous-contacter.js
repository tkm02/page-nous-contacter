
const menu = document.querySelector('.toggle');
const body = document.querySelector('body');

menu.addEventListener('click',function(){
    if(body.classList.contains('open')){
        body.classList.remove('open');
    }
    else{
        body.classList.add('open');
    }
    
})
