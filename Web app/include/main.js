var ancienCont = '.commande';
var estAffiche = false;

function afficherForm(contenu){
    document.querySelector(ancienCont).style.display = "none";
    document.querySelector(contenu).style.display = "inline-block";
    ancienCont=contenu;
}

function afficher3d(){
    if(estAffiche==false) {
        document.querySelector('.frame3d').style.display = "inline";
        document.querySelector('.bouton3d').innerHTML = "Masquer";
        estAffiche=true;
    }
    else{
        document.querySelector('.frame3d').style.display = "none";
        document.querySelector('.bouton3d').innerHTML = "Visualiser en 3d";
        estAffiche=false;
    }
}