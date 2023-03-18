const setup = () => {
    let gemeenten = [];
    let stop = false;
    while(!stop) {
        let input = prompt("Geef een gemeente in");
        stop = (input == null || input.trim().toLowerCase() === "stop");
        if(!stop){
            gemeenten.push(input);
        }
    }
    gemeenten.sort(vergelijken);
    toevoegen(gemeenten);
};
const vergelijken = (een,twee) => {
    return een.localeCompare(twee);
};
const toevoegen = (gemeenten) => {
    let div = document.getElementById("gemeenten");
    let htmlTekst = "<select>";
    for(let i = 0; i<gemeenten.length; i++){
        htmlTekst += "<option>" + gemeenten[i] + "</option>";
    }
    htmlTekst += "</select>";
    div.innerHTML = htmlTekst;
};
window.addEventListener("load", setup);