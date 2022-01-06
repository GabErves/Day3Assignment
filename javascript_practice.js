//for each

let arrayz =["g", "a", "b","r", "i","e","l","l","e"]



function myEach(item){
    console.log(item)

}

for (let index=0; index<arrayz.length; index++){
    console.log(arrayz[index])
}
/*arrayz.forEach((item)=>console.log(item))*/

//map code

let array2 = [2, 4, 6, 8, 10]
var result = [];

function myMap(item2){
    console.log(item2)
}

const times2 = function(num){  
    return num*2;
}

for (let index=0; index<array2.length; index++){
    result.push(times2(array2[index]));
}

console.log(result);




function myFilter(arraynames){
    for (let i = 0; i < fullname.length; i++) {
        if (fullname[i].namecount < 5) {
            arraynames.push(fullname[i]);
        }
    }
    console.log(arraynames);

}



let fullname= [
    {firstname: 'gabrielle', namecount: 9},
    {firstname: 'austin', namecount: 6},
    {firstname: 'william', namecount: 7},
    {firstname: 'bree', namecount: 4},
    {firstname: 'anastasia', namecount: 9}
];

let arraynames = [];
for (let i = 0; i < fullname.length; i++) {
    if (fullname[i].namecount < 5) {
        arraynames.push(fullname[i]);
    }
}
console.log(arraynames);

//some function
let numbers = [ 1,2,3,4,5,6,7,8,9,10];

let ifodd = false; 

for(index=0; index<numbers.length; index++){
    if(numbers[index]%2==0){
        ifodd = true;
        break;

    }
}
console.log(ifodd)

//every function 

let numz = [11,22,33,44,55,66,77,88,99,1]

let lessthan10 = true;
for(let index=0; index<numz.length; index++){
    if(numz[index]<=10){
        lessthan10 = false;
        break;
    }
}
console.log(lessthan10)

//reduce function

let array3 = [1,2,3,4,5,6]
let sum =0;
for(let i=0; i<array3.length;i++){
    sum+=array3[i];

}
console.log(sum)

//includes function
const names = ["gabrielle", "austin", "catherine", "william", "bree", "anastasia"]
var key = false;
for (var i = 0; i < names.length && !key; i++) {
    if (names[i] === "gabrielle") {
      key = true;
      break;
    }
  }
console.log(key)

//index of function
let array4 = [1,2,3,4,5,6,7,8,9,10]
var target = 10;
function myIndexof(list,target){
    for(var i=0; i<list.length; i++){
        if(list[i]===target){
            return i;
        }
    }
    return -1;


}
console.log(array4)

//push function



