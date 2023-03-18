const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    voornaam();
    familienaam();
    geboorteDatum();
    email();
    aantalKinderen();
    let elements = document.getElementsByClassName("invalid");
    if(elements.length === 0){
        window.alert("proficiat!");
    }
};

const voornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if(voornaam.length > 30){
        report(txtVoornaam, "max. 30 karakters");
    }else{
        clear(txtVoornaam);
    }
};

const familienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if(familienaam.length === 0){
        report(txtFamilienaam, "verplicht veld");
    }else if(familienaam.length > 50){
        report(txtFamilienaam, "max. 50 karakters");
    }else{
        clear(txtFamilienaam);
    }
};

const geboorteDatum = () => {
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let geboorteDatum = txtGeboorteDatum.value.trim();

    if(geboorteDatum.length !== 10){
        report(txtGeboorteDatum, "verplicht veld in formaat jjjj-mm-dd");
    }else{
        let formatCorrect = true;
        if(formatCorrect && !(geboorteDatum.charAt(4) === '-' && geboorteDatum.charAt(7) === '-')){
            formatCorrect = false;
        }
        if(formatCorrect){
            let yearText = geboorteDatum.substring(0,4);
            if(!positiefNietNul(yearText)){
                formatCorrect=false;
            }
        }
        if(formatCorrect){
            let monthText = geboorteDatum.substring(5,7);
            if(!positiefNietNul(monthText)){
                formatCorrect=false;
            }
        }
        if(formatCorrect){
            let dayText = geboorteDatum.substring(8,11);
            if(!positiefNietNul(dayText)){
                formatCorrect=false;
            }
        }
        if(formatCorrect){
            clear(txtGeboorteDatum);
        }else{
            report(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");
        }
    }
};
const email = () => {
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();
    if(email.length===0){
        report(txtEmail, "verplicht veld");
    }else{
        let formatCorrect = true;
        let idx = email.indexOf("@");
        if(idx<1 || idx === email.length - 1){
            formatCorrect = false;
        }
        idx = email.indexOf("@", idx + 1);
        if(formatCorrect && idx !== -1){
            formatCorrect = false;
        }
        if(formatCorrect){
            clear(txtEmail);
        }else{
            report(txtEmail, "geen geldig email adres");
        }
    }
};
const aantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let aantalKinderenText = txtAantalKinderen.value.trim();
    if(aantalKinderenText.length === 0){
        report(txtAantalKinderen, "verplicht veld");
    }else if(!positiefNummer(aantalKinderenText)) {
        report(txtAantalKinderen, "is geen positief getal");
    }else{
        let aantal = parseInt(aantalKinderenText);
        if(aantal>=99){
            report(txtAantalKinderen, "te vruchtbaar");
        }else{
            clear(txtAantalKinderen);
        }
    }
};
const positiefNummer = (text) => {
    if(isNaN(text)){
        return false;
    }else{
        let number = parseInt(text, 10);
        return number >= 0;
    }
};
const positiefNietNul = (text) => {
    if(isNaN(text)){
        return false;
    }else{
        let number = parseInt(text, 10);
        return number > 0;
    }
};
const report = (element, message) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId.substring(3, elementId.length);
    let errElement = document.getElementById(errElementId);
    element.className = "invalid";
    errElement.innerHTML = message;
};
const clear = (element) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId.substring(3, elementId.length);
    let errElement = document.getElementById(errElementId);
    element.className = "";
    errElement.innerHTML = "";
};
window.addEventListener("load", setup);