const fs = require('fs');

const filename = 'README.md';

// Check if the file exists and is not empty
if (fs.existsSync(filename)) {
  const stats = fs.statSync(filename);
  
  if (stats.size > 0) {
    console.log('JavaScript is amazing');
  }
}