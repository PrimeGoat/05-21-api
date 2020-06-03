const fetch = require('node-fetch');

let apiUrl = 'https://api.publicapis.org/entries';
let optionCount = 3;

fetch(apiUrl)
.then(response => response.json())
.then(data => parseData(data));

const parseData = function(data) {
    console.log("SUMMARY:\nAPI Data from " + apiUrl + '\n' + optionCount + " Options listed per Category.\n\n");

    let currentCategory = data.entries[0].Category;
    let count = 0;

    console.log(currentCategory.toUpperCase() + "\n------------------");

    for(entry of data.entries) {
        let {
            API, Description, Link, Category
        } = entry;
        if(++count >= optionCount) {
            if(Category == currentCategory) continue
            else {
                currentCategory = Category;
                count = 0;
                console.log("\n\n" + currentCategory.toUpperCase() + "\n------------------");
            }
        }

        console.log("Api: " + API + "\nDescription: " + Description + "\nLink: " + Link + "\nCategory: " + Category + '\n');
    }
}
