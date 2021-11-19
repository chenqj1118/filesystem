const fs = require('fs');
const fileSystem = require('../src/main');

console.log(999, fileSystem);
console.log(888, JSON.parse(fs.readFileSync(fileSystem.getHistoryLogFilePath())));
console.log(111, JSON.parse(fs.readFileSync(fileSystem.getWinCacheBokeStsPath())));