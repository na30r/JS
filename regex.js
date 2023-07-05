
// Random data array
const dataArray = [
    "123",
    "HELLO",
    "test@example.com",
    "https://www.example.com",
    "abc123",
    "01-01-2022",
    "+1234567890",
    "\"Hello, World!\"",
    "apple",
    "#FFA500",
    "Letters and spaces",
    "This is a sentence?",
    "987-65-4321",
    "12:30 PM",
    "hello world",
    "I love bananas",
    "user123",
    "aeiou",
    "Hello, World.",
    "patternpatternpattern",
    "ali",
    "alireza",
    "reza",
    "abab",
    "aab",
    "aaab",
    "b"
];

// Regular expressions
const regex0 = /123/;

var current = regex0;

// Filtered data arrays
const filteredData = dataArray.filter(function (data) {
    return current.test(data)
})
console.log(filteredData)



















// const regex1 = /\d/;
// const regex2 = /^[A-Z]+$/;
// const regex3 = /^[\w.-]+@[\w.-]+\.[\w]+$/;
// const regex4 = /^(https?:\/\/)/;
// const regex5 = /\d+/;
// const regex6 = /^\d{2}-\d{2}-\d{4}$/;
// const regex7 = /^\+\d{10}$/;
// const regex8 = /^".*"$/;
// const regex9 = /^[aeiouAEIOU]\w+/;
// const regex10 = /^#[0-9a-fA-F]{6}$/;
// const regex11 = /^[A-Za-z\s]+$/;
// const regex12 = /^.*\?$/;
// const regex13 = /^\d{3}-\d{2}-\d{4}$/;
// const regex14 = /^(1[012]|0?[1-9]):[0-5][0-9](\s?[AP]M)$/;
// const regex15 = /^hello.*world$/;
// const regex16 = /^(?!.*apple).*$/;
// const regex17 = /^[a-z0-9]+$/;
// const regex18 = /[aeiou]{3}/i;
// const regex19 = /^[A-Z].*\.$/;
// const regex20 = /(pattern){3}/;


