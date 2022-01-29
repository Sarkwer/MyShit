// Current Day Word

const Sg = getArrayForWord();

var getTodayWord = function () {
    
    return getWordbyDate();
}

var getWordbyDate = function (year, month, day) {
    var d
    if (!year || !month || !day) {
        d = (new Date).setHours(0, 0, 0, 0);
    } else {
        d = new Date(year, month - 1, day, 0, 0, 0, 0)
    }
    var i = Pg(d)
    return Sg[i];
}

function Pg(d) {
    return Math.floor((d - new Date(2022, 0, 2, 0, 0, 0, 0)) / 864e5)
}

//main//

var x = getTodayWord();
console.log(x);