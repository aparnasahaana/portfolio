function bodyDiv(navTitle) {

  document.getElementById("skills").style.display="none";
  document.getElementById("qualifications").style.display="none";
  document.getElementById("project").style.display="none";
  document.getElementById("contacts").style.display="none";
  document.getElementById("structure").style.display="none";
  

  x = document.getElementById("structure");
  y=document.getElementById(navTitle)
  x.style.display = "block";
  y.style.display="block";
    }
 

function myFunction() {
  document.getElementById("structure").style.display = "none";
}
