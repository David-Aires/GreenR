var ancienCont = '.commande';

function afficherForm(contenu){
    document.querySelector(ancienCont).style.display = "none";
    document.querySelector(contenu).style.display = "inline-block";
    ancienCont=contenu;
}

