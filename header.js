document.addEventListener("DOMContentLoaded", function () {

  fetch("/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      initHeaderFunctions();
    });

});

function initHeaderFunctions(){

  const menu = document.getElementById("menu");
  const toggle = document.getElementById("toggle");
  const overlay = document.getElementById("overlay");
  const header = document.getElementById("site-header");

  toggle.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  overlay.addEventListener("click", ()=>{
    menu.classList.remove("active");
    overlay.classList.remove("active");
    toggle.classList.remove("active");
  });

  document.querySelectorAll("#menu a").forEach(link=>{
    link.addEventListener("click",(e)=>{
      if(link.classList.contains("dropbtn")){
        e.preventDefault();
        return;
      }

      menu.classList.remove("active");
      overlay.classList.remove("active");
      toggle.classList.remove("active");
    });
  });

  window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  document.querySelectorAll(".dropbtn").forEach(btn=>{
    btn.addEventListener("click", function(e){
      if(window.innerWidth <= 992){
        e.preventDefault();
        this.parentElement.classList.toggle("active");
      }
    });
  });

}
