var menu = document.getElementById('menu');
var row = document.getElementById('row-2');
menu.style.maxHeight = '0px';
row.style.maxHeight = '100%';

function menutoggle() {
  if (menu.style.maxHeight == '0px') {
    menu.style.maxHeight = '200px';  
  } else { 
    menu.style.maxHeight = '0px';
  } 
}
// function menutoggle() {
//   if (row.style.maxHeight == '100%') {
//     row.style.maxHeight = '200%';  
//   } else { 
//     row.style.maxHeight = '100%';
//   } 
// }

// let menuIcon = document.querySelector('.menu-icon')
// let navBar = document.querySelector('.navbar') 

// menuIcon.onclick = function(){
//     menuIcon.style.opacity = '0'  
//     menuIcon.style.pointerEvents = 'none'
//     navBar.classList.add('active')
// } 
// menuIcon.onclick = function(){
//     menuIcon.style.opacity = '1'
//     menuIcon.style.pointerEvents = 'auto'
//     navBar.classList.remove('active')
// }   