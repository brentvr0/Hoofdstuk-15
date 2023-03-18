const vervangen = (tekst, oud, nieuw) => {
    let result = tekst;
    let idx = result.indexOf(oud);
    while (idx !== -1) {
        let voor = result.slice(0, idx);
        let na = result.slice(idx + oud.length, result.length);
        result = voor + nieuw + na;
        idx = result.indexOf(oud, idx + nieuw.length);
    }
    return result;
};
let input = "Gisteren zat de jongen op de stoep en at de helft van de appel";
let output = vervangen(input, "de", "het");
console.log(output);