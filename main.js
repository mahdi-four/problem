function Sumwithouthighestandlowestnumber(array) {
  if (array == null) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, carent) => acc + carent, 0);
}

console.log(Sumwithouthighestandlowestnumber([1, 1, 11, 2, 3]));
console.log("----------------------------------------");
//6, "I"     -> "IIIIII"  5, "Hello" -> "HelloHelloHelloHelloHello"
function repeatStr(n, s) {
  let newstring = "";
  for (let i = 0; i < n; i++) {
    newstring += s;
  }
  return newstring;
}
console.log(repeatStr(9, "l"));
console.log("-------------------------------");
//35231 => [1,3,2,5,3]  0 => [0] and non array
function digitize(n) {
  return n.toString().split("").map((m)=>Number(m)).reverse()
}
console.log(digitize(3245));
console.log("-------------------------");
//[true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true ,true,  true,  true,  true , false, false, true,  true]
//The correct answer would be 17.
function countSheeps(sheep) {
  let container;
  sheep.map((m)=>{
    if (m===true) {
      container++
    }
  })
return container
}
console.log("------------------------------------------");

function makeNegative(num) {
if (num<0) {
  return num
} else {
  return -num
}
 }
 console.log("------------------------------------------");
 //Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.Can you help her?
 function greet(name){

  if(name === "Johnny"){
     return "Hello, my love!";    
}else{
     return "Hello, " + name + "!";
}
   }
   console.log("------------------------------------------");
   //["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
   function findNeedle(haystack) {
   for (let i = 0; i < haystack.length; i++) {
   if (haystack[i]==="needle") {
    return "found the needle at position "+i
   }
   
   } 
   
  }
//console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "random"]));
console.log("------------------------------------------");
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
  let newarray =[]
for (let i = 0; i < input.length; i++) {
  if (input[i]=-input) {
    newarray.push(...input);
  }
  
  } 


}
 
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

