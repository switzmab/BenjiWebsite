# Benji Switzman's Personal Website

A modern, responsive personal website built with Next.js and TypeScript, showcasing projects and experience in software development and engineering.

## Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and CSS Modules
- **Responsive Design**: Optimized for all device sizes
- **Static Site Generation**: Optimized for performance and SEO
- **Project Showcase**: Highlighting software and engineering projects
- **Professional Presentation**: Clean, modern design with subtle project highlights

## Pages

- **Home**: Introduction and overview of projects and experience
- **Projects**: Detailed showcase of software and engineering projects including:
  - Java applications (Blackjack, Kinematics Grapher)
  - C/C++ projects (Snake Game)
  - Modern web applications (Personal Activity System)
  - Engineering projects (Skeeball, Reacher-Grabber Holder)
- **About**: Comprehensive background, skills, and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/switzmab/BenjiWebsite.git
   cd BenjiWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

This site is configured for deployment on Vercel with automatic static site generation.

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js configuration
3. The site will build and deploy automatically on each push

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── projects/       # Projects page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   └── Navigation.tsx  # Main navigation
└── styles/            # Global styles
    └── globals.css
```

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel
- **Images**: Next.js Image Optimization

## Contact

- **Email**: benjiswitzman@gmail.com
- **GitHub**: [switzmab](https://github.com/switzmab)
- **LinkedIn**: [benji-switzman](https://www.linkedin.com/in/benji-switzman/)

---

Built with ❤️ by Benji Switzman