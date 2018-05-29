function reverseCase(string){
    var newStr = "";
    for(i=0;i<string.length;i++){
        if(string[i] === string[i].toUpperCase()){
            newStr += string[i].toLowerCase();
        }
        if(string[i] === string[i].toLowerCase()){
            newStr += string[i].toUpperCase();
        }
    }
    return newStr;
}

console.log(reverseCase("aaBBccDD"));
