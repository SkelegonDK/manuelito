// This script runs all optimization tasks
// Run with: node scripts/optimize-all.js
// Options:
//   --webm: Also create WebM version of videos (optional)

import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check for command line arguments
const createWebM = process.argv.includes('--webm');

console.log('Starting optimization process...\n');
console.log(`WebM generation: ${createWebM ? 'Enabled' : 'Disabled'}`);

// Run the image optimization script
console.log('\nStep 1: Optimizing images...');
exec('node ' + path.join(__dirname, 'optimize-images.js'), (error, stdout, stderr) => {
  if (error) {
    console.error(`Error optimizing images: ${error.message}`);
    return;
  }
  
  console.log(stdout);
  
  // Run the video optimization script
  console.log('\nStep 2: Optimizing video...');
  const videoCmd = 'node ' + path.join(__dirname, 'optimize-video.js') + (createWebM ? ' --webm' : '');
  exec(videoCmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error optimizing video: ${error.message}`);
      return;
    }
    
    console.log(stdout);
    
    console.log('\nAll optimization tasks completed successfully!');
  });
}); 