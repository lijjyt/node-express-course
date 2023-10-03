const { readFileSync, writeFileSync }  = require("fs")

writeFileSync(
    './temporary/fileA.txt', `This is the first line\n`
)
writeFileSync(
    './temporary/fileA.txt', `This is the second line\n`,
    {flag: 'a'}
)
writeFileSync(
    './temporary/fileA.txt', `This is the third line`,
    {flag: 'a'}
)

console.log(readFileSync('./temporary/fileA.txt', 'utf8'))

