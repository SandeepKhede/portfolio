const fs = require('fs');
const path = require('path');

const sequenceDir = path.join(__dirname, 'public', 'sequence1');
const output = path.join(__dirname, 'public', 'manifest.json');

try {
    const files = fs.readdirSync(sequenceDir)
        .filter(file => file.endsWith('.png'))
        .sort(); // Default string sort works for frame_000, frame_001 etc.

    fs.writeFileSync(output, JSON.stringify(files, null, 2));
    console.log(`Manifest generated with ${files.length} frames.`);
} catch (error) {
    console.error('Error generating manifest:', error);
}
