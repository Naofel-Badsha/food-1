/*----------Header------Section--------Start--------*/
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 



    /*-------Scroll---------Button--------Start------*/
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }
    else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
    /*-------Scroll---------Button--------End--------*/
};
/*----------Header------Section--------End--------*/



/*------------Loder----------Start------------*/
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
   }
  
   function fadeOut(){
    setInterval(loader, 3000)
   }
  
   window.onload = fadeOut();
   /*------------Loder----------End------------*/