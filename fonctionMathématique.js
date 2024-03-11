//Factoriel d'un nombre
function fact (a) {
    let fa = a;
    for (let i = 1; i < a; i ++) {
        fa = fa*i;
    }

    console.log(`Le factoriel est : ${fa}`);
}
fact(2); 


// Determination du nombre premier
function nbrePremier (a) {

    let nbre = a;
    let somme = 0; 
    
        for(let i = 1; i <= nbre; i ++)
        {
            if (nbre % i == 0) {
                somme +=1;
            }
        }
            if (somme == 2) 
            {
                return `${nbre} est un nombre premier`;
            }
            else {
                return `${nbre} n'est pas un nombre premier`;
            }
    }
    
    console.log(nbrePremier(2));