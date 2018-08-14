let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');
let navLink=document.getElementsByClassName('nav-links');
let body=document.getElementById('body');



navbarToggle.addEventListener('click',function(){

    if(mainNav.classList.contains('active')){
        mainNav.classList.remove('active');
        body.classList.remove('active');
    }
    else{
        mainNav.classList.add('active');
        body.classList.add('active');
    }
});

for(i=0; i<navLink.length; i++){
  (function () {
          navLink[i].addEventListener("click", function() { if(mainNav.classList.contains('active')){
              mainNav.classList.remove('active');
              body.classList.remove('active');
          }});
      }());
};
