//fonction pour évaluer (eval()) le chiffre et le renvoyer
function calculer() { 
    let a = document.getElementById('output').value 
    let b = eval(a) 
    document.getElementById('output').value = b 
} 

//fonction pour la valeur
function afficher(val) { 
    document.getElementById('output').value+=val 
} 

//fonction pour effacer (clr)
function reset() { 
    document.getElementById('output').value = "" 
} 

//fonction pour retirer le dernier caractère inscrit
function effacer() {
    var eff = document.getElementById('output').value;

    eff = eff.slice(0, -1);
    document.getElementById('output').value = eff
}