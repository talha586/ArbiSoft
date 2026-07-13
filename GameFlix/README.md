# GameFlix 🎮

A modern React-based web application for discovering, searching, and reviewing free-to-play games. GameFlix provides an intuitive interface to explore trending games, browse by genre, and share your gaming reviews with the community.

## Features

### 🎯 Home Page
- Welcome landing page with an attractive dark theme interface
- Quick navigation to three main sections:
  - **Trending**: Discover currently popular games
  - **Playlist**: Search and filter games by genre
  - **Review**: Submit your game reviews

### 📊 Trending Games
- Display a comprehensive list of trending games fetched from the FreeToGame API
- Show game details including:
  - Game thumbnail/cover image
  - Game title
  - Short description
- Responsive grid layout that adapts to different screen sizes
- Loading state management with user feedback
- Error handling for failed API requests

### 🎪 Playlist/Genre Filter
- Browse games across multiple genres
- Dynamic genre selection dropdown populated from API data
- Automatic filtering of games based on selected genre
- Display platform information alongside game details
- Shows genre classification for each game
- "No games found" message for genres with no available games
- Real-time filtering without page reloads

### ⭐ Review System
- Submit reviews for any game in the catalog
- Form includes:
  - **Game Selection**: Dropdown to select from available games
  - **Email Input**: User email validation for review submission
  - **Review Text**: Textarea for detailed review content
- Form validation and required field checks
- Loading state while fetching available games
- Error handling for API failures
- Form reset after successful submission
- Console logging for review tracking

### 🎨 UI/UX Features
- **Modern Dark Theme**: Professional dark gradient background
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: Smooth hover effects and transitions
- **Card-based Layout**: Clean, organized content presentation
- **Accessibility**: Semantic HTML structure with proper labels and ARIA attributes
- **Loading States**: Visual feedback during data fetching
- **Error Messages**: Clear communication of issues to users

## Tech Stack

### Frontend Framework
- **React 19.2.7**: Latest React version with modern hooks
- **React Router DOM 7.18.1**: Client-side routing for multi-page navigation

### Development Tools
- **Vite 8.1.1**: Fast build tool and development server
- **ESLint 10.7.0**: Code quality and linting
- **Prettier 3.9.5**: Code formatting and consistency
- **React Refresh**: Hot module replacement for development

### Testing
- **Vitest 4.1.10**: Unit testing framework
- **@testing-library/react 16.3.2**: React component testing utilities
- **@testing-library/jest-dom 6.9.1**: Enhanced DOM matchers
- **jsdom 29.1.1**: DOM simulation for testing

### Styling
- **CSS Grid**: Modern layout system
- **CSS Gradients**: Beautiful background effects
- **Flexbox**: Responsive component layouts
- **CSS Transitions**: Smooth animations and interactions

## Project Structure

```
GameFlix/
├── src/
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # Global styles and theme
│   ├── Home.jsx             # Landing page with navigation cards
│   ├── Trending.jsx         # Trending games display page
│   ├── Playlist.jsx         # Genre-based game filtering
│   ├── Review.jsx           # Game review submission form
│   ├── GamesDetails.jsx     # Reusable game card component
│   ├── GamesDetails.test.jsx # Unit tests for GamesDetails
│   └── main.jsx             # React app entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint rules and plugins
├── prettierrc               # Code formatting rules
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/talha586/ArbiSoft.git
cd GameFlix
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- **`npm run dev`**: Start the development server with hot reload
- **`npm run build`**: Build the project for production
- **`npm run preview`**: Preview the production build locally
- **`npm run lint`**: Run ESLint to check code quality

## Testing

Run the test suite with:
```bash
npm test
```

The project includes unit tests for the `GamesDetails` component that verify:
- Proper rendering of game cards
- Handling of empty/invalid data
- Correct display of game information (title, description, image)

## API Integration

This project uses the **FreeToGame API** (https://www.freetogame.com/api/games) to fetch game data. The API provides:
- List of free-to-play games
- Game metadata (title, description, genre, platform, thumbnail)
- Real-time game information

### API Features Used
- Fetch all available games
- Extract unique genres for filtering
- Support for multiple platforms

## Code Quality

The project follows best practices with:
- **ESLint Configuration**: Enforces React best practices and code standards
- **Prettier Integration**: Automatic code formatting consistency
- **React Hooks**: Modern state management with `useState` and `useEffect`
- **Component Reusability**: Modular components for maintainability
- **Error Handling**: Proper error management and user feedback

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Design Highlights

- **Color Scheme**: Dark background (#111111, #1f1f1f) with accent pink (#e04b6d)
- **Typography**: Roboto font family for modern, clean text
- **Spacing**: Consistent padding and gap sizing for visual harmony
- **Visual Effects**: Box shadows and transitions for depth and interactivity

## Future Enhancements

Potential features for future development:
- User authentication and profile management
- Review history and ratings
- Favorited games collection
- Advanced filtering options (platform, release date)
- Game detail page with in-depth information
- Social sharing features
- Dark/Light theme toggle
- Offline support with service workers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

**Talha** - [GitHub Profile](https://github.com/talha586)

## Acknowledgments

- API data provided by [FreeToGame](https://www.freetogame.com/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Styled with modern CSS3 features

---

**Version**: 0.0.0  
**Last Updated**: 2026  
**Status**: Active Development