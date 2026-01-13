const fs = require('fs');

const fileName = 'README.md';

try {
  // Check if file exists and get its stats
  if (fs.existsSync(fileName)) {
    const stats = fs.statSync(fileName);

    if (stats.size > 0) {
      console.log('File is present');
    } else {
      console.log('File is empty');
    }
  } else {
    console.log('File does not exist');
  }
} catch (error) {
  console.log('An error occurred:', error.message);
}