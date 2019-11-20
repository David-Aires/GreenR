function verifPseudo(champ){
    if(champ.value.length < 2 || champ.value.length > 25)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifMail(champ){
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifAdresse(champ){
    if(champ.value.length < 2 || champ.value.length > 50)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifTel(champ){
    var regex = /^0[1-6]\d{8}$/;
    if(!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifAutre(champ){
    if(champ.value.length < 2 || champ.value.length > 50)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifPQ(champ){
    if(champ.value.length < 2)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function surligne(champ,boolean){
    if(boolean){
        champ.style.borderColor = "red";
    }
    else {
        champ.style.borderColor = "white";
    }
}


function test_verifPseudo(valeurAVerifier){
    document.getElementsByTagName("input").nom.value=valeurAVerifier;
    if(verifPseudo(document.getElementsByTagName("input").nom) == true){
        return true;
    }
    else{
        return false;
    }
}

function test_verifMail(valeurAVerifier){
    document.getElementsByTagName("input").email.value=valeurAVerifier;
    if(verifMail(document.getElementsByTagName("input").email) == true){
        return true;
    }
    else{
        return false;
    }
}

function test_verifAdresse(valeurAVerifier){
    document.getElementsByTagName("input").adresse.value=valeurAVerifier;
    if(verifAdresse(document.getElementsByTagName("input").adresse) == true){
        return true;
    }
    else{
        return false;
    }
}

function test_verifTel(valeurAVerifier){
    document.getElementsByTagName("input").tel.value=valeurAVerifier;
    if(verifTel(document.getElementsByTagName("input").tel) == true){
        return true;
    }
    else{
        return false;
    }
}

function test_verifAutre(valeurAVerifier){
    document.getElementsByTagName("input").autre.value=valeurAVerifier;
    if(verifAutre(document.getElementsByTagName("input").autre) == true){
        return true;
    }
    else{
        return false;
    }
}

function test_verifPQ(valeurAVerifier){
    document.getElementsByTagName("textarea").pq.value=valeurAVerifier;
    if(verifPQ(document.getElementsByTagName("textarea").pq) == true){
        return true;
    }
    else{
        return false;
    }
}



function testUnitaire(){
    console.log("test pseudo - michel: " + test_verifPseudo("michel"));
    console.log("test pseudo - guillaume vdh: " + test_verifPseudo("guillaume vdh"));
    console.log("test pseudo - a: " + test_verifPseudo("a"));
    console.log("test pseudo - 12: " + test_verifPseudo("12"));

    console.log("test adresse - rue des potiers: " + test_verifAdresse("rue des potiers"));
    console.log("test adresse - : " + test_verifAdresse(""));
    console.log("test adresse - a: " + test_verifAdresse("a"));

    console.log("test mail - guillaume.test@test.com: " + test_verifMail("guillaume.test@test.com"));
    console.log("test mail - guillaume.test@test: " + test_verifMail("guillaume.test@test"));
    console.log("test mail - guillaume.test.com: " + test_verifMail("guillaume.test.com"));
    console.log("test mail - : " + test_verifMail(""));

    console.log("test tel - 0456765432: " + test_verifTel("0456765432"));
    console.log("test tel - 0456765950694509645432: " + test_verifTel("0456765950694509645432"));
    console.log("test tel - 04432: " + test_verifTel("04432"));
    console.log("test tel - alpha: " + test_verifTel("alpha"));

    console.log("test autre - : " + test_verifAutre(""));
    console.log("test autre - test: " + test_verifAutre("test"));

    console.log("test pq - : " + test_verifPQ(""));
    console.log("test pq - test: " + test_verifPQ("test"));


}