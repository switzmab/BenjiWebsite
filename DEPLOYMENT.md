# Deployment Instructions for Vercel

## Automatic Deployment

This project is configured for automatic deployment on Vercel. Here's how to set it up:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your `BenjiWebsite` repository

2. **Configuration:**
   - Vercel will automatically detect this as a Next.js project
   - No additional configuration is needed - the `vercel.json` file handles everything
   - The build command is already set to `npm run build`
   - Output directory is set to `out` for static export

3. **Deployment:**
   - Every push to the main branch will automatically trigger a new deployment
   - You'll get a unique URL for each deployment
   - Production deployments will be available at your custom domain (if configured)

## Manual Deployment

If you prefer to deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Environment Variables

No environment variables are required for this static site.

## Custom Domain

To use a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure your DNS

## Build Output

The site generates static files in the `out/` directory:
- All pages are pre-rendered as static HTML
- Images are optimized and served from the public directory
- CSS is optimized and bundled
- JavaScript is minimized and chunked for optimal loading

## Performance Features

- ✅ Static Site Generation (SSG)
- ✅ Image Optimization
- ✅ CSS Code Splitting
- ✅ JavaScript Minification
- ✅ Automatic Font Optimization
- ✅ SEO-friendly URLs