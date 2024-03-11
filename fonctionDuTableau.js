//minimum et maximum d'un tableau

function min_max (arr) {
let min = arr[0];
let max =0;
    for (let i = 0 ; i < arr.length ; i ++){
        if (max < arr[i]) {
           max = arr[i];
        }
        else if (min > arr[i]){
            min = arr[i];
        }
    }
    return `Le maximum des nombres est ${max} et le mininum des nombres est ${min}`;
}
let tab = [3, 4, 1, 2, 23, 9];
console.log(min_max(tab));



//Somme des éléments d'un tableau

function sommeElement (arr) {
    let sum = 0;
    let i;

       for (i = 0; i < arr.length ; i ++) 
       {
         sum += arr[i];
       }
       return `La somme des nombre est : ${sum}`;
      
    }
    // let tab = [2, 1, 7, 8];
    // console.log(sommeElement(tab));


    
    // Tri d'un tableau par odre croissant.
function tri (arr) {

    console.log(arr);
    let i;
    let j;
    let tmp;
    
    for(i = 0; i < arr.length; i++) {

        for(let j = i+1 ; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        } 
    }

    return `Les éléments du tableau en ordre croissant ${arr}`;
}
// let tab = [2, 8, 9, 0, 7, 14, 6];
//console.log(tri(tab));
