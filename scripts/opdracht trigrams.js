const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", update);
};
const update = () => {
    let txtTekst = document.getElementById("txtText");
    let tekst = txtTekst.value;
    let lstTrigrams = document.getElementById("lstTrigrams");
    let trigrams = getTrigrams(tekst);
    let output = "";
    for (let i = 0; i < trigrams.length; i++) {
        output += "<li>" + trigrams[i] + "</li>";
    }
    lstTrigrams.innerHTML = output;
};
const getTrigrams = (tekst) => {
    let result = [];
    let trigram;
    for (let i = 0; i<= tekst.length - 3; i++) {
        trigram = tekst.slice(i,i + 3);
        result.push(trigram);
    }
    return result;
};
window.addEventListener("load", setup);