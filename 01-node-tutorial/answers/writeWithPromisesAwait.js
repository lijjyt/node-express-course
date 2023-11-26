const { writeFile, readFile } = require('fs').promises
const writer = async () => {
    try {
        await writeFile(
            './file.txt', `THIS IS HARD \nTHIS IS VERY HARD \nMAYBE TOO HARD`
        )

    } catch(err) {
        console.log("an error has occured:", err)
    }
}

const reader = async () => {
    try {
        result = await readFile('./file.txt', 'utf8')
        console.log(result)
    } catch(err) {
        console.log("an error has occured:", err)
    }
}

const readWrite = async () => {
    await writer()
    await reader()
}

readWrite()