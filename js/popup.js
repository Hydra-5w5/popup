(function(){
let btn__quitter = document.querySelectorAll(".btn__fermer");
let superposition = document.querySelector(".superposition");


// Pour la section cours
let elm__cours = document.querySelectorAll(".blocflex__cours");
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
    if (boite) {
      boite.style.transform = 'scale(0) translate(-50%, -50%)';
    }
    superposition.style.display = 'none';
    boiteActive = null;
  }) 
}

if(superposition){
  superposition.addEventListener('click', function(){
    if (boiteActive) {
      boiteActive.style.transform = 'scale(0) translate(-50%, -50%)';
      superposition.style.display = 'none';
      boiteActive = null;
    }
  })
}

// Pour la section projets
let elm__projets = document.querySelectorAll(".conteneur__projet");
let infoActive = null;

  for (const elm of elm__projets) {
    elm.addEventListener('click', function(event){
      event.stopPropagation();
      let info = this.querySelector(".info__projet");
      infoActive = info;
      info.style.transform = 'scale(1) translate(-50%, -50%)';
      superposition.style.display = 'block';

    })
  }

  for (const btn of btn__quitter) {
    btn.addEventListener('click', function(event){
      event.stopPropagation();
      let info = document.querySelector(".info__projet");
      if (info) {
        info.style.transform = 'scale(0) translate(-50%, -50%)';
        superposition.style.display = 'none';
        infoActive = null;
      }
    }) 
  }

  if(superposition){
    superposition.addEventListener('click', function(){
      if (infoActive) {
        infoActive.style.transform = 'scale(0) translate(-50%, -50%)';
        superposition.style.display = 'none';
        infoActive = null;
      }
    })
  }

})()