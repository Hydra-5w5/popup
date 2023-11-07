(function(){

let elm__cours = document.querySelectorAll(".blocflex__cours");
let btn__quitter = document.querySelectorAll(".btn__fermer");
let superposition = document.querySelector(".superposition");
let boiteActive = null;

for (const elm of elm__cours) {
  elm.addEventListener('click', function(event){
    event.stopPropagation();
    let id = this.id.split( '__')[0];
    let boite = document.getElementById(id+'__boite');
    boite.style.transform = 'scale(1) translate(-50%, -50%)';
    superposition.style.display = 'block';
    boiteActive = boite;
  })
}

for (const btn of btn__quitter) {
  btn.addEventListener('click', function(event){
    event.stopPropagation();
    let id = this.parentNode.id.split('__')[0];
    let boite = document.getElementById(id+'__boite');
    boite.style.transform = 'scale(0) translate(-50%, -50%)';
    superposition.style.display = 'none';
    boiteActive = null;
  }) 
}

superposition.addEventListener('click', function(){
  if (boiteActive) {
    boiteActive.style.transform = 'scale(0) translate(-50%, -50%)';
    superposition.style.display = 'none';
    boiteActive = null;
  }
})

})()