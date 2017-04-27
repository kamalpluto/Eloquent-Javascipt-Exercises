var countChar = function(str, character){
    var count = 0;
    for(var i=0;i<str.length;i++){
        var char = str.charAt(i);
        if(char==character){
            count++
        }
    }
    
    return count;
}
countChar("kamalkannan","a");