function verifPseudo(champ){
	try {
		if(champ.length < 2 || champ.length > 25)
		{
			//surligne(champ, true);
			return false;
		}
		else
		{
			//surligne(champ, false);
			return true;
		}
	}
	catch(error) {
		throw error
	}
    
}

function verifMail(champ){
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ))
    {
        //surligne(champ, true);
        return false;
    }
    else
    {
        //surligne(champ, false);
        return true;
    }
}

function verifAdresse(champ){
	try {
			if(champ.length < 2 || champ.length > 50)
		{
			//surligne(champ, true);
			return false;
		}
		else
		{
			//surligne(champ, false);
			return true;
		}
	}
	catch(error) {
		throw error;
	}
    
}

function verifTel(champ){
    var regex = /^0[1-6]\d{8}$/;
    if(!regex.test(champ))
    {
        //surligne(champ, true);
        return false;
    }
    else
    {
        //surligne(champ, false);
        return true;
    }
}

function verifAutre(champ){
    if(champ.length < 2 || champ.length > 50)
    {
        //surligne(champ, true);
        return false;
    }
    else
    {
        //surligne(champ, false);
        return true;
    }
}

function verifPQ(champ){
    if(champ.length < 2)
    {
        //surligne(champ, true);
        return false;
    }
    else
    {
        //surligne(champ, false);
        return true;
    }
}

