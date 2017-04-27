var isEven = function(number){
 if(number>0){
    if(number==0){
        console.log("Even Number");
    }
    else if(number==1){
        console.log("Odd Number");
    }
    else {
        isEven(number-2);
    }
     }    
else{
    console.log("Please input a non negative number !!")
}
}