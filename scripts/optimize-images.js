// This script uses Sharp to optimize all images in the assets directory
// Run with: node scripts/optimize-images.js

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const assetsDir = path.join(__dirname, '../src/assets');
const optimizedDir = path.join(__dirname, '../public/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(assetsDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
});

console.log(`Found ${imageFiles.length} images to optimize`);

// Sizes for responsive images
const sizes = [320, 640, 1024, 1280];

// Process each image
async function processImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(assetsDir, file);
    const fileBaseName = path.basename(file, path.extname(file));
    
    console.log(`Processing ${file}...`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Create WebP versions in different sizes
    for (const width of sizes) {
      // Skip sizes larger than the original
      if (width > metadata.width) continue;
      
      const outputPath = path.join(optimizedDir, `${fileBaseName}-${width}.webp`);
      
      await sharp(inputPath)
        .resize(width)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`  Created ${outputPath}`);
    }
    
    // Create a full-size AVIF version (best compression but less support)
    const avifPath = path.join(optimizedDir, `${fileBaseName}.avif`);
    await sharp(inputPath)
      .avif({ quality: 65 })
      .toFile(avifPath);
    
    console.log(`  Created ${avifPath}`);
    
    // Create a full-size WebP version
    const webpPath = path.join(optimizedDir, `${fileBaseName}.webp`);
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    
    console.log(`  Created ${webpPath}`);
  }
  
  console.log('\nImage optimization complete!');
  
  // Print file size comparison for the first image as an example
  if (imageFiles.length > 0) {
    const firstFile = imageFiles[0];
    const originalSize = fs.statSync(path.join(assetsDir, firstFile)).size;
    const webpSize = fs.statSync(path.join(optimizedDir, `${path.basename(firstFile, path.extname(firstFile))}.webp`)).size;
    const avifSize = fs.statSync(path.join(optimizedDir, `${path.basename(firstFile, path.extname(firstFile))}.avif`)).size;
    
    console.log(`\nExample file size comparison for ${firstFile}:`);
    console.log(`Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`WebP: ${(webpSize / 1024).toFixed(2)} KB (${(100 - (webpSize / originalSize * 100)).toFixed(2)}% reduction)`);
    console.log(`AVIF: ${(avifSize / 1024).toFixed(2)} KB (${(100 - (avifSize / originalSize * 100)).toFixed(2)}% reduction)`);
  }
}

processImages().catch(err => {
  console.error('Error processing images:', err);
}); 