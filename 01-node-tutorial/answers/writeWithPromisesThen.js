const { writeFile, readFile } = require('fs').promises

writeFile('./file.txt',`THIS ISNT AS HARD\n`) // write line 1
    .then(() => {
        return writeFile('./file.txt',`MAYBE IT IS NOT BAD\n`, {flag : 'a'}); // write line 2
    // Return the promise so you can chain the .then statements
    })
    .then(() => {
        return writeFile('./file.txt',`MAYBE BAD`, {flag : 'a'});
    })
    .then(() => {
        return readFile('./file.txt', 'utf8');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("An error has occured", err)
    })