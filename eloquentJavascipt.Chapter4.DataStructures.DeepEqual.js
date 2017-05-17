//Eloquent Javascipt
//Data Structures: Objects and Arrays
//Deep Equal
function deepEqual(obj1,obj2){
  
  if (obj1 === obj2) {
    return true; 
  }
  
  if ( Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  
  
  for(var i in obj1){
  if((obj1[i] !== null && typeof obj1[i] === 'object') && 
      (obj2[i] !== null && typeof obj2[i] === 'object')){
       return deepEqual(obj1[i],obj2[i]);
  }
  else if(((typeof obj1[i]) != 'object') && ((typeof obj1[i]) != 'object')){
      if(obj1[i]===obj2[i]){
      return true;}
  }
  else if(obj1[i]==null && obj2[i]==null)
    return true;
    
  else return false;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

