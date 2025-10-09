# EcoAware - Sustainability & Waste Management Blog

An awareness blog platform built with React.js that provides educational content about waste management, circular economy, and sustainable living practices.

## Features

- ♻️ Beautiful hero section with sustainability-themed imagery
- 📰 Article cards displaying essential sustainability topics
- 🔍 Interactive article modals with full content
- 📱 Fully responsive design
- 🎨 No external CSS frameworks - custom CSS only
- 💚 Clean, modern UI with smooth animations

## Project Structure

```
awareness-blog/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── components/
│       ├── HeroSection.jsx
│       ├── HeroSection.css
│       ├── ArticleCard.jsx
│       ├── ArticleCard.css
│       ├── ArticleModal.jsx
│       ├── ArticleModal.css
│       └── articlesData.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```
   cd awareness-blog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Components

### HeroSection
Displays the main banner with background image and search functionality.

### ArticleCard
Reusable component for displaying article previews with image, title, excerpt, and date.

### ArticleModal
Full-screen modal that shows complete article content when a card is clicked.

### articlesData.js
Contains all article content including titles, dates, images, excerpts, and full content.

## Technologies Used

- React.js 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1
- Custom CSS (no frameworks)

## Customization

To add new articles, edit the `src/components/articlesData.js` file and add new article objects following the existing format.

## License

This project is open source and available for educational purposes.
