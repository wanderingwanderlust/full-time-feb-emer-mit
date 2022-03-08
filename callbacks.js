function arrayCalc(arr, fn) {
    var arrResults = [];
    for (var i = 0; i < arr.length; i++) {
        arrResults.push(fn(arr[i]));
    }

    return arrResults;
}

function calculateAge(el) {
    console.log(el)
    return console.log(2022 - el);
}

function isVotingAge(el) {
    console.log(el)
    console.log('Can I vote?>')
    var age = this.calculateAge(el)
    console.log(age >= 18)
}

function isDrinkingAge(el) {
    console.log(el)
    console.log(el >= 21)
}

var years = [1990, 2020, 1998, 2015, 2018, 2010, 1988, ];
// var ages = arrayCalc(years, calculateAge);
var votingAge = arrayCalc(years, isVotingAge);
// var canIDrink = arrayCalc(years, isDrinkingAge);
