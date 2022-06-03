"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeOrMore = users.filter((user)=> user.languages.length >= 3);
console.log(threeOrMore);

let emails = users.map((user) => user.email);
console.log(emails);
// to get total number of years
let years = users.reduce((totalYears,yoe) => totalYears + yoe.yearsOfExperience,0)
console.log(years);
// to set an array of the users years of experience
let yearsArr = users.map((user)=> user.yearsOfExperience);
console.log(yearsArr);
// to get
let average = years / yearsArr.length;
console.log(average);

let longestEmail = emails.reduce((longest,user) => (longest.length > user.length) ? longest : user);
console.log(longestEmail);
console.log();

let allNames = users.reduce((instructors,user) => instructors += `${user.name},`,"");

let AllLanguages = users.reduce((language,user) => language += (user.languages + ","),"").split(",");
AllLanguages = AllLanguages.splice(0, AllLanguages.length-1);

let uniqueLang = AllLanguages.reduce((lang, user) => {
    if (typeof lang[user] === 'undefined') {
        // if the word is not yet present in our object, set it's value to 1
        lang[user] = 1;
    } else {
        // otherwise increment the existing count
       lang[user] = 1;
    }
    return lang;
}, {}); // start with an empty object
console.log(Object.getOwnPropertyNames(uniqueLang));

console.log(AllLanguages);



