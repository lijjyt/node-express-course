const { createReadStream } = require('fs');

let counter = 0;
const stream = createReadStream('./content/big.txt', { encoding: 'utf8', highWaterMark: 200 });

stream.on('data', (chunk) => {
    counter++;
    console.log("Chunk:", counter);
});

stream.on('end', () => {
    console.log("Number of chunks received:", counter);
});

stream.on('error', (err) => {
    console.error("Error:", err);
});
