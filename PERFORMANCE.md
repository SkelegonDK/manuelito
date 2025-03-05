# Performance Optimization Guide

This guide explains how to use the performance optimization tools that have been added to your Astro site.

## Quick Start

To optimize all assets (images and videos) at once, run:

```bash
npm run optimize
```

This will:
1. Optimize all images in the `src/assets` directory
2. Optimize the background video
3. Generate a poster image for the video

To check the status of optimization and see how much file size was reduced, run:

```bash
npm run check-optimization
```

This will show you:
- Which assets have been optimized
- How much file size was reduced for each asset
- A summary of the total optimization

## Components for Optimized Assets

### OptimizedImage Component

Use the `OptimizedImage` component for simple image optimization:

```astro
---
import OptimizedImage from "@/components/OptimizedImage.astro";
---

<OptimizedImage
  src={yourImageSource}
  alt="Image description"
  width={320}
  height={400}
  format="webp"
  quality={85}
  loading="lazy"
/>
```

### Picture Component

For more advanced responsive images with multiple formats and sizes, use the `Picture` component:

```astro
---
import Picture from "@/components/Picture.astro";
---

<Picture
  src="/src/assets/your-image.jpg"
  alt="Image description"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  widths={[320, 640, 1024]}
  loading="lazy"
/>
```

## Optimization Scripts

The following scripts are available in the `scripts` directory:

### optimize-images.js

Optimizes all images in the `src/assets` directory:
- Creates WebP versions in multiple sizes
- Creates AVIF versions for browsers that support it
- Maintains original aspect ratio
- Significantly reduces file size

### optimize-video.js

Optimizes the background video:
- Reduces resolution to 1280p max width
- Creates an optimized MP4 version
- Creates a WebM version for better compression
- Maintains quality while reducing file size

### generate-video-poster.js

Generates a poster image from the first frame of the video:
- Creates a JPEG poster image
- Used for the initial display before the video loads

## Manual Optimization

If you need to run the optimization scripts individually:

```bash
# Optimize images
node scripts/optimize-images.js

# Optimize video
node scripts/optimize-video.js

# Generate video poster
node scripts/generate-video-poster.js
```

## Requirements

These optimization scripts require:
- Node.js
- Sharp (for image optimization)
- ffmpeg (for video optimization)

The scripts are written using ES module syntax, which is compatible with the project's configuration (`"type": "module"` in package.json).

If ffmpeg is not installed, you can install it with:

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows (with Chocolatey)
choco install ffmpeg
```

## Performance Benefits

Using these optimization techniques provides several benefits:
- Faster page load times
- Reduced bandwidth usage
- Better user experience, especially on mobile devices
- Improved Core Web Vitals scores
- Better SEO ranking potential

## Next Steps for Further Optimization

Consider these additional optimizations:
1. Implement font subsetting for custom fonts
2. Add a service worker for caching
3. Implement lazy loading for below-the-fold content
4. Configure a CDN for asset delivery
5. Enable HTTP/2 or HTTP/3 on your server 