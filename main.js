// массивы со словами
let randomBodyParts = ["голова", "глаз", "нос", "пупок"];
let randomAdjectives = ["вонючая", "дебильная", "вялая", "унылая"];
let randomWords = ["дубина", "мартышка", "козявка", "какашка", "пиявка"];

var random = function(words){
    return words[Math.floor(Math.random() * words.length)];
}

// генераторы рандома
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// склеиваем
let draznilka = "У тебя " + random(randomBodyParts) + " словно " + random(randomAdjectives) + " " + random(randomWords) + "!!!";

console.log(draznilka);