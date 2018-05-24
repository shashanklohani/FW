function shuffle(array) {
    var cardOpened = [];

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function function1(num) {
    openCard(num);
    // cardOpened.push(num);

    // if(){
    //     var elem = document.getElementById.
    // }
}

function openCard(num){
    var id = "cardid" + num;
    var elem = document.getElementById(id).getElementsByClassName("material-icons");
    elem[0].style["font-size"] = "33px";
}