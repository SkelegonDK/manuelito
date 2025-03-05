// This script runs all optimization tasks
// Run with: node scripts/optimize-all.js

import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting optimization process...\n');

// Run the image optimization script
console.log('Step 1: Optimizing images...');
exec('node ' + path.join(__dirname, 'optimize-images.js'), (error, stdout, stderr) => {
  if (error) {
    console.error(`Error optimizing images: ${error.message}`);
    return;
  }
  
  console.log(stdout);
  
  // Run the video optimization script
  console.log('\nStep 2: Optimizing video...');
  exec('node ' + path.join(__dirname, 'optimize-video.js'), (error, stdout, stderr) => {
    if (error) {
      console.error(`Error optimizing video: ${error.message}`);
      return;
    }
    
    console.log(stdout);
    
    // Generate the video poster
    console.log('\nStep 3: Generating video poster...');
    exec('node ' + path.join(__dirname, 'generate-video-poster.js'), (error, stdout, stderr) => {
      if (error) {
        console.error(`Error generating video poster: ${error.message}`);
        return;
      }
      
      console.log(stdout);
      console.log('\nAll optimization tasks completed successfully!');
    });
  });
}); 