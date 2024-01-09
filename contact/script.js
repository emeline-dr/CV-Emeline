function Verification() {
    var Prenom = document.getElementById('idPrenom').value;
    var Nom = document.getElementById('idNom').value;
    var Mail = document.getElementById('idMail').value;
    var Objet = document.getElementById('idObjet').value;
    var Msg = document.getElementById('idMessage').value;

    if (Prenom == '' || Nom == '' || Mail == '' || Objet == '' || Msg == '') {
        document.getElementById('idError').style.display = 'block' ;
        return false;
    }
    else {
        alert("Tout est bien rempli mais ce formulaire ne fonctionne pas pour le moment.");
    }
}