document.querySelector(".light-mode").addEventListener("click", function(){
  document.querySelector("body").style.backgroundColor="white";
  document.querySelector("body").style.color="black";
  document.querySelector(".nav-bar").style.backgroundColor="white"
  document.querySelector(".nav-bar").style.color="black"
  document.querySelector(".about").style.color="black";
  document.querySelector(".journey").style.color="black";
  document.querySelector(".projects").style.color="black";
  document.querySelector(".contact").style.color="black";
  document.querySelector(".footer").style.color="white";
  document.querySelector(".footer").style.backgroundColor="black";
  document.querySelector(".project-bg").style.color="white";
  document.querySelector(".project-bg").style.backgroundColor="black";
})

document.querySelector(".dark-mode").addEventListener("click", function(){
  document.querySelector("body").style.backgroundColor="black";
  document.querySelector("body").style.color="white";
  document.querySelector(".nav-bar").style.backgroundColor="black"
  document.querySelector(".nav-bar").style.color="white"
  document.querySelector(".about").style.color="white";
  document.querySelector(".journey").style.color="white";
  document.querySelector(".projects").style.color="white";
  document.querySelector(".contact").style.color="white";
  document.querySelector(".footer").style.color="black";
  document.querySelector(".footer").style.backgroundColor="white";
  document.querySelector(".project-bg")[i].style.color="black";
  document.querySelector(".project-bg")[i].style.backgroundColor="white";
  document.querySelector(".project-bg-1")[i].style.color="black";
  document.querySelector(".project-bg-1")[i].style.backgroundColor="white";
})
