var dado_pc=Math.ceil(Math.random() * 6);
var dado_utente=Math.ceil(Math.random() * 6);

parseInt(dado_pc);
parseInt(dado_utente);

if(dado_pc>dado_utente){
    console.log("il pc ha fatto: " + dado_pc + ";");
    console.log("tu hai fatto: " + dado_utente + ";"); 
    console.log("Mi dispiace, HAI PERSO!!!!!");
}else if(dado_utente>dado_pc){
    console.log("il pc ha fatto: " + dado_pc + ";");
    console.log("tu hai fatto: " + dado_utente + ";"); 
    console.log("Bravo, Hai vinto!!");
}else{
    console.log("il pc ha fatto: " + dado_pc + ";");
    console.log("tu hai fatto: " + dado_utente + ";"); 
    console.log("accipicchia, è un pareggio")
}