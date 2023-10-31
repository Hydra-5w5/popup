(function(){

let elm__cours = document.querySelectorAll(".blocflex__cours");

for (const elm of elm__cours) {
  elm.addEventListener('mousedown', function(){
    let id = this.id.split( '__')[0];
    console.log('console'+id);
    let boite = document.getElementById(id+'__boite');
    boite.style.transform = 'scale(1)'
  })
}

})()
