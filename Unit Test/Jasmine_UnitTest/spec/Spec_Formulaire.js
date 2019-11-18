describe("vérification des données formulaires avant envoie", function() {
	
	// test avec données correctement entrées
	var pseudo= 'test';
	var add_mail='david.test@test.be';
	var add_home='rue de verdun 467, 1130 BXL';
	var tel = '0497385984';
	var comp ='test moi';
	var texte = 'easy game';
	
	//test avec données mal entrées
	var pseudo2= '';
	var add_mail2='david@test@test.be';
	var add_home2='1';
	var tel2 = '98594';
	var comp2 ='';
	var texte2 = '';
	
	
	
	it("vérification qu'un pseudo est entré",function() {
		expect(verifPseudo(pseudo)).toBeDefined(verifPseudo+'\n\n pseudo is not defined');
		expect(verifPseudo(pseudo)).toBe(true,verifPseudo+'\n'+pseudo+' is not a valid pseudo');
		expect(verifPseudo(pseudo)).not.toBeNull(verifPseudo+'\n\n pseudo is null');
		
		
		
		expect(verifPseudo(pseudo2)).toBe(false);
		expect(verifPseudo).toThrow();
		
	});
	
	it("vérification de la bonne écriture d'une adresse mail",function() {
		expect(verifMail(add_mail)).toBeDefined(verifMail+ '\n\n none email type');
		expect(verifMail(add_mail)).toBeTruthy(verifMail+ "\n\n email wrong format");
		expect(verifMail(add_mail)).not.toBeNull(verifMail+ "\n\n none email type");
		
		
		
		expect(verifMail(add_mail2)).toBeFalsy();
		
		
	});
	
	it("vérification qu'une adresse est entrée",function() {
		expect(verifAdresse(add_home)).toBeDefined(verifAdresse+ '\n\n none address type');
		expect(verifAdresse(add_home)).toBeTruthy(verifAdresse+ '\n\n address wrong format');
		expect(verifAdresse(add_home)).not.toBeNull(verifAdresse+ '\n\n none address type');
		
		
		
		expect(verifAdresse(add_home2)).toBeFalsy();
		expect(verifAdresse).toThrow();
		
	});
	
	it("vérification de la bonne écriture du numero de tel",function() {
		expect(verifTel(tel)).toBeDefined(verifTel+'\n\n none tel type');
		expect(verifTel(tel)).toBeTruthy(verifTel +'\n\n tel wrong format');
		expect(verifTel(tel)).not.toBeNull(verifTel+'\n\n none tel type');
		
		
		expect(verifTel(tel2)).toBeFalsy();
	});
	
	it("vérification que le complément est bien entrée",function() {
		expect(verifAutre(comp)).toBeDefined(verifAutre+'\n\n none message complement type');
		expect(verifAutre(comp)).toBeTruthy(verifAutre+'\n\n message complement wrong format');
		expect(verifAutre(comp)).not.toBeNull(verifAutre+'\n\n none message complement type');
		
		
		expect(verifAutre(comp2)).toBeFalsy();
	});
	
	it("vérification que le texte info est bien entrée",function() {
		expect(verifPQ(texte)).toBeDefined(verifPQ+'\n\n none message info type');
		expect(verifPQ(texte)).toBeTruthy(verifPQ+'\n\n message info wrong format');
		expect(verifPQ(texte)).not.toBeNull(verifPQ+'\n\n none message info type');
		
		
		expect(verifPQ(texte2)).toBeFalsy();
	});
});