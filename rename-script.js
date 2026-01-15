const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'public', 'sequence1');

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        if (file.endsWith('.png.png')) {
            const newName = file.replace('.png.png', '.png');
            fs.rename(
                path.join(directory, file),
                path.join(directory, newName),
                (err) => {
                    if (err) console.error(`Error renaming ${file}:`, err);
                }
            );
        }
    });

    console.log("Renaming complete.");
});
