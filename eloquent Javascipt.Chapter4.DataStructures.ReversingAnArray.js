//Eloquent Javascipt
//Data Structures: Objects and Arrays
//Reversing an array
function reverseArray(arr){
	var len = arr.length;
	var newArr = [];
	for(var i=arr.length-1;i>=0;i--){
       newArr.push(arr[i]);
	}
	return newArr;
}

function reverseArrayInPlace(arr){
	var len = arr.length;
	for(var i=0;i<len/2;i++){
		var firstVal = arr[i];
		var lastVal = arr[arr.length-1 - i];
		arr[i] = lastVal;
		arr[arr.length-1-i] = firstVal;
	}
	return arr;
}