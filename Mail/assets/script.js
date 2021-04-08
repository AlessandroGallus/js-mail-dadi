var mail_utente = prompt("inserisci la tua mail");
var lista_mail = [
    "pinco.pallo@mail.com" ,
    "pallo.pinco@mail.com" ,
    "tizio.caio@mail.com" ,
    "caio.tizio@mail.com" ,
    "random.mail@mail.com"];

var accesso=false;

for(i=0; i<lista_mail.length; i++){

    var mail_controllo = lista_mail[i];
    if(mail_utente == mail_controllo){
        accesso=true;
    }

}
if(accesso){
    console.log("Benvenuto!!!!!");
}else{
    console.log("https://www.youtube.com/watch?v=cw9FIeHbdB8");
}
