var arrays = [[1, 2, 3], [4, 5], [6]];
function reduce(arra){
    var arr = [];
  for(var i=0;i<arra.length;i++){
  arr = arr.concat(arra[i]);    
  }
    return arr;
}
console.log(reduce(arrays));