# Personal Engineering Portfolio

A modern, responsive portfolio website built with React.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

The page will reload automatically when you make changes to the code.

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/personal-portfolio"
```

2. Install gh-pages (already in devDependencies):
```bash
npm install
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Go to your GitHub repository settings → Pages, and ensure it's set to deploy from the `gh-pages` branch.

## Customization

- Update personal information in:
  - `src/components/About.js` - Your name, title, and bio
  - `src/components/Projects.js` - Your projects
  - `src/components/Skills.js` - Your skills
  - `src/components/Contact.js` - Your contact information
  - `public/index.html` - Page title and meta tags

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages
