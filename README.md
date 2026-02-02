# 🚐 Travel Trucks App

A web application for searching and booking campers in Ukraine. Users can browse a catalog of vehicles, filter by technical characteristics, save favorite models, and make bookings.

> Веб-додаток для пошуку та бронювання кемперів в Україні. Дозволяє користувачам переглядати каталог авто, фільтрувати їх за технічними характеристиками та зберігати улюблені моделі.

## ✨ [Live Demo](https://travel-trucks-app-tau.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Redux Store](#redux-store)
- [Author](#author)

## ✨ Features

- 🔍 **Camper Catalog** - Browse all available campers
- 🎯 **Advanced Filtering** - Filter by vehicle type, features, and specifications
- ❤️ **Favorites System** - Save and manage favorite campers with persistent storage
- 📅 **Booking System** - Reserve campers with date selection
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Vite for optimized development and production
- 🎨 **Modern UI** - Clean, intuitive interface with modal dialogs

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - Latest UI library
- **React Router 7** - Client-side routing
- **Vite 7** - Next-generation build tool
- **React DOM** - DOM manipulation

### State Management

- **Redux Toolkit** - Predictable state management
- **React Redux** - React bindings for Redux
- **Redux Persist** - Persistent Redux state

### Forms & Validation

- **Formik** - Form state management
- **Yup** - Schema validation library
- **React DatePicker** - Date selection component

### HTTP & UI

- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **React Spinners** - Loading spinners
- **clsx** - Utility for conditional classnames
- **Modern Normalize** - CSS reset

### Development Tools

- **ESLint** - Code linting
- **React SWC** - Fast JSX transformation

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Steps

```sh
# Clone the repository
git clone <repository-url>
cd travel-trucks-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

🚀 Available Scripts
In the project directory, you can run:

npm run dev
Runs the app in development mode with Vite. Open http://localhost:5173 to view it in your browser.

npm run build
Builds the app for production to the dist folder using Vite's optimized bundling.

npm run lint
Runs ESLint to check code quality and style issues.

npm run preview
Serves the production build locally for testing.

📁 Project Structure
src/
├── components/ # Reusable React components
│ ├── [App.jsx](http://_vscodecontentref_/0) # Main app component with routing
│ ├── AppBar/ # Navigation bar
│ ├── BookCamper/ # Booking modal component
│ ├── CamperCard/ # Individual camper card
│ ├── CamperList/ # List of campers
│ ├── DetailsCamper/ # Camper details view
│ ├── Features/ # Features display
│ ├── FeaturesList/ # Feature list component
│ ├── Reviews/ # Reviews section
│ ├── VehicleFilters/ # Filter controls
│ └── ...other components
├── pages/ # Page components
│ ├── HomePage/ # Landing page
│ ├── CampersPage/ # Catalog page
│ ├── CamperDetailsPage/ # Detailed view
│ └── FavoriteCampersPage/ # Saved favorites
├── redux/ # Redux state management
│ ├── store.js # Redux store configuration
│ ├── campers/ # Camper data slice & operations
│ ├── favorite/ # Favorite campers slice
│ └── filters/ # Filter state slice
├── helpers/ # Utility functions
│ ├── featuresConfig.js # Feature icons & config
│ ├── formatPrice.js # Price formatting
│ └── transformFiltersToParams.js # Filter transformation
├── styles/ # Global styles
│ └── variables.css # CSS custom properties
├── main.jsx # Application entry point
└── index.css # Global styles
🧩 Key Components
AppBar
Navigation component with links to Home, Catalog, and Favorites pages.

CamperCard
Displays individual camper with image, price, location, and rating.

CamperList
Grid layout of camper cards with pagination/load more functionality.

VehicleFilters
Filter panel for location, vehicle type, and features.

BookCamper
Modal form for booking a camper with date picker and validation.

DetailsCamper
Full camper details with features and reviews tabs.

📊 Redux Store
Campers Slice (redux/campers/)
State: List of campers from API
Operations: Fetch all campers, fetch single camper details
Reducers: Handle loading states and data storage
Favorite Slice (redux/favorite/)
State: List of favorited camper IDs
Operations: Add/remove favorites
Persistence: Auto-saved to localStorage via redux-persist
Filters Slice (redux/filters/)
State: Current filter selections (location, type, features)
Reducers: Update filter values
Usage: Applied to camper list display
📝 Helper Functions
formatPrice() - Formats prices with currency symbols
featuresConfig - Maps features to icons and labels
transformFiltersToParams() - Converts filter state to API query parameters
🎨 Styling
Uses CSS Modules for component-scoped styling with:

Custom CSS variables in styles/variables.css
Modern Normalize for consistent cross-browser styles
Responsive design patterns

👤 Author Viktor
