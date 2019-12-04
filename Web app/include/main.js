var ancienCont = '.commande';
var estAffiche = false;

function afficherForm(contenu){
    document.querySelector(ancienCont).style.display = "none";
    document.querySelector(contenu).style.display = "inline-block";
    ancienCont=contenu;
}
