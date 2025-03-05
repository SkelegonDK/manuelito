// This script uses ffmpeg to optimize the video file and generate a WebM version
// Run with: node scripts/optimize-video.js

import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const originalVideoPath = path.join(__dirname, '../src/assets/sky.mp4');
const optimizedMp4Path = path.join(__dirname, '../public/sky.mp4');
const webmPath = path.join(__dirname, '../public/sky.webm');

// Check if original video exists
if (!fs.existsSync(originalVideoPath)) {
  console.error(`Original video file not found: ${originalVideoPath}`);
  process.exit(1);
}

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Command to optimize MP4
const optimizeMp4Command = `ffmpeg -i "${originalVideoPath}" -vf "scale=1280:-1" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "${optimizedMp4Path}"`;

console.log(`Optimizing MP4 video...`);

// Execute the MP4 optimization command
exec(optimizeMp4Command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error optimizing MP4: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.log(`ffmpeg output (MP4): ${stderr}`);
  }
  
  console.log(`MP4 video optimized successfully: ${optimizedMp4Path}`);
  
  // Now create WebM version
  const createWebmCommand = `ffmpeg -i "${optimizedMp4Path}" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 128k "${webmPath}"`;
  
  console.log(`Creating WebM version...`);
  
  // Execute the WebM creation command
  exec(createWebmCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error creating WebM: ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.log(`ffmpeg output (WebM): ${stderr}`);
    }
    
    console.log(`WebM video created successfully: ${webmPath}`);
    
    // Compare file sizes
    const mp4Size = fs.statSync(optimizedMp4Path).size;
    const webmSize = fs.statSync(webmPath).size;
    
    console.log(`\nFile size comparison:`);
    console.log(`Original MP4: ${(fs.statSync(originalVideoPath).size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimized MP4: ${(mp4Size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`WebM: ${(webmSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Reduction: ${(100 - (mp4Size / fs.statSync(originalVideoPath).size * 100)).toFixed(2)}% (MP4), ${(100 - (webmSize / fs.statSync(originalVideoPath).size * 100)).toFixed(2)}% (WebM)`);
  });
}); 