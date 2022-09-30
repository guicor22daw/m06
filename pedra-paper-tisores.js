// Guillem Corujo Garcia
// DAW2

let victories = 0
let empats = 0
let derrotes = 0

window.onload = main;

function main(){
    //esdeveniments dels tres botons
    document.getElementById("envia").onclick = enviarResultat;
    document.getElementById("neteja").onclick = neteja;
    document.getElementById("reset").onclick = reset;
}

function reset(){
    // reset dels comptadors i dels divs
    document.getElementById("resultat").innerText=``;
    document.getElementById("comptador").innerText=``;
    victories = 0;
    empats = 0;
    derrotes = 0;
}

function neteja(){
    // neteja de les seleccions
    let form = document.getElementsByName("seleccio");
    for(let i=0; i<form.length; i++){
        form[i].checked = false;
   }
}

function enviarResultat(){
    let seleccioUsuari = "";
    let form = document.getElementsByName("seleccio");
    
    //comprova quina selecció ha estat marcada
    for(let i=0; i<form.length; i++) {
        if (form[i].checked){
            seleccioUsuari = form[i].value;
            resultat(seleccioUsuari);
            break;
        } else {
            document.getElementById("resultat").innerHTML=`No has seleccionat cap opció <b>:::</b> Has perdut.`;
            document.getElementById("comptador").innerHTML=``;        
        }
    }
}

function resultat(seleccioUsuari){
    let random = Math.floor(Math.random() * 3);
    let seleccio = ["Pedra", "Paper", "Tisores"];
    let seleccioApp = seleccio[random];
    seleccioUsuari

    //comprovació del guanyador
    if (seleccioApp == "Pedra"){
        if (seleccioUsuari == "Paper"){
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b>Usuari:</b> ${seleccioUsuari} <b><b>:::</b></b> Guanyador: Usuari | Has guanyat`;
            victories++;
        } else if (seleccioUsuari == "Tisores"){
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b>Usuari:</b> ${seleccioUsuari} <b>:::</b> Guanyador: App | Has perdut`;
            derrotes++;
        } else {
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b>Usuari:</b> ${seleccioUsuari} <b>:::</b> Empat`;
            empats++;
        }
    } else if (seleccioApp == "Paper"){
        if (seleccioUsuari == "Pedra"){
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b>Usuari:</b> ${seleccioUsuari} <b>:::</b> Guanyador: App | Has perdut`;
            derrotes++;
        } else if (seleccioUsuari == "Tisores"){
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b>Usuari:</b> ${seleccioUsuari} <b>:::</b> Guanyador: Usuari | Has guanyat`;
            victories++;
        } else {
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b>Usuari:</b> ${seleccioUsuari} <b>:::</b> Empat`;
            empats++;
        }
    } else {
        if (seleccioUsuari == "Pedra"){
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b>Usuari:</b> ${seleccioUsuari} <b>:::</b> Guanyador: Usuari | Has guanyat`;
            victories++;
        } else if (seleccioUsuari == "Paper"){
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b><b>Usuari:</b></b> ${seleccioUsuari} <b>:::</b> Guanyador: App | Has perdut`;
            derrotes++;
        } else {
            document.getElementById("resultat").innerHTML=`<b>App:</b> ${seleccioApp} vs <b><b>Usuari:</b></b> ${seleccioUsuari} <b>:::</b> Empat`;
            empats++;
        }
    }

    comptador(victories, empats, derrotes)
}

function comptador(victories, empats, derrotes){
    // comptador de victories, empats i derrotes
   document.getElementById("comptador").innerHTML=`Victòries: ${victories}   Empats: ${empats}    Derrotes: ${derrotes}`;
}