const {Builder, By, Key, util} = require('selenium-webdriver');



async function interface_test() {
    try {
        let value="particulier";
        var driver = await new Builder().forBrowser("chrome").build();

        // vérifie que le formulaire a bien été complété
        function check_title(){
            var promise= driver.getTitle().then(function(title){
                if(title === "Formspree") {
                    console.log('success');
                    return true;
                } else {
                    console.log('fail --' + title);
                }
            });
            return promise;
        }

        // Remplis le formulaire avec des données et le submit
        await driver.get("https://green-r.be/include/commande.php");
        await driver.findElement(By.name("nom")).sendKeys("David Aires");
        await driver.findElement(By.name("adresse")).sendKeys("Rue De Verdun 467, 1130 BXL");
        await driver.findElement(By.name("email")).sendKeys("david.airespimentel@gmail.com");
        await driver.findElement(By.name("tel")).sendKeys("0497439582");
        await driver.findElement(By.css("input[value='"+value+"']")).click();
        if(value=="autre"){
            await driver.findElement(By.name("autre")).sendKeys("web developer")
        }
        await driver.findElement(By.name("pq")).sendKeys("Test Selenium");
        


        //Vérification de toutes les entrées une par une
        var name = await driver.findElement(By.name("nom")).getAttribute('value');
        if(name !="David Aires"){
            console.log('erreur dans l\'entrée du nom');
        }
        
        var adresse = await driver.findElement(By.name("adresse")).getAttribute('value');
        if(adresse != "Rue De Verdun 467, 1130 BXL") {
            console.log('erreur dans l\'entrée de l\'adresse');
        }

        var email= await driver.findElement(By.name("email")).getAttribute('value');
        if(email != "david.airespimentel@gmail.com") {
            console.log('erreur dans l\'entrée de l\'email');
        }

        var tel= await driver.findElement(By.name("tel")).getAttribute('value');
        if(tel != "0497439582") {
            console.log('erreur dans l\'entrée du numéro de téléphone');
        }

        var input= await driver.findElement(By.css("input[value='"+value+"']")).getAttribute('value');
        if(input != value) {
            console.log('erreur dans l\'entrée du input radio');
        }

        if(value=="autre"){
            autre = await driver.findElement(By.name("autre")).getAttribute('value');
            if(autre != "web developer") {
                console.log('erreur dans l\'entrée autre');
            }
        }

        var pq= await driver.findElement(By.name("pq")).getAttribute('value');
        if(pq != "Test Selenium") {
            console.log('erreur dans l\'entrée description');
        }

        // Envoie du formulaire
        await driver.findElement(By.css("input[type='submit']")).click();

        // Lance le test de validation du formulaire
        driver.wait(check_title,1000);
    } finally {
        //await driver.quit();
      }
}
interface_test();