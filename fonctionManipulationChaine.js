
//Fonction qui permet d'inverser une chaine
function inverse (chaine) {
    let i;
    for (i = chaine.length-1; i >= 0; i --){
          process.stdout.write(chaine[i]);
    }
}
let mot = "Bonjour";
inverse(mot);



//Fonction qui compte le nombre caractère dans une chaine
function nombreCaractere (texte) {
    return `Cette chaine contient ${texte.length} caractère`;
}
chaineCaractere = "Bonjour Les gars";
console.log(nombreCaractere (chaineCaractere));


//fonction qui met en majuscule la première lettre de chaque mot dans une phrase.
function upper (chaine) {
    let c = chaine.split(" ");

    let newChaine = ""; 

    for (let i of c){
        newChaine += i[0].toUpperCase() + i.slice(1) + " ";
    }
    return newChaine;
}
let charactere = "je suis là";
//console.log(upper(charactere));