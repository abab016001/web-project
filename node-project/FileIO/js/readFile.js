const fs = require('fs');
const targetFile = '../file/testFile.txt';
const UTF_8 = 'utf8';

// 讀取文件
fs.readFile(targetFile, UTF_8, (err, data) => {
    if (err) {
        console.log('讀取文件失敗: ', err);
        return;
    }
    console.log(data);
});