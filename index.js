// function classToggle() {
//     const navs = document.querySelectorAll('.Navbar__Items')
    
//     navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
//   }
  
//   document.querySelector('.Navbar__Link-toggle')
//     .addEventListener('click', classToggle);

var togglebtn = document.getElementById('toggle-btn')



var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
    modal.style.display = "none";
  };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };


  togglebtn.addEventListener('click' ,function () {
    modal.style.display = "block";
  } )