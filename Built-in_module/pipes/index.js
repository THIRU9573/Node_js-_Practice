/*
const fs = require("node:fs");

const readableStream = fs.createReadStream("./file1.txt", {
    encoding:"utf-8"
});

const writableStream = fs.createWriteStream("./file2.txt")

readableStream.pipe(writableStream);
*/

const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./file1.txt", {
    encoding:"utf-8",
    highWaterMark: 2
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt"))

const writableStream = fs.createWriteStream("./file2.txt")

readableStream.pipe(writableStream);