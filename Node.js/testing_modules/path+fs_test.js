const path = require('path');
const fs = require('fs')

// Testing path module
console.log(`Running ${path.basename(__filename)} from ${__dirname}`)

// Testing fs module
let folderName = "test"
let fileName = "test"

// Creating a folder
fs.mkdir(path.join(__dirname, `/${folderName}`), {}, err => {
    if (err) throw err;
    console.log('New folder created');
});

// Creating and writing into a file
fs.writeFile(path.join(__dirname, `/${folderName}`, `${fileName}.txt`),
    `This is some text in a file called ${fileName} in a folder called ${folderName}`,
    err => {
        if (err) throw err;
        console.log('New file created...');
    }
);

// Reading the file contents
fs.readFile(path.join(__dirname, `/${folderName}`, `${fileName}.txt`), 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`The file reads "${data}"`);
    }
);