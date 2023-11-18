# React Beginner Stripe Submenu UI
This project demonstrates the implementation of a submenu user interface using React, focusing on global context usage.
<a href="https://react-submenu-ui.netlify.app/">Preview</a>

## Description
The application simulates a navigation system similar to the Stripe website. It displays a responsive navigation bar, sidebar, submenu, and a hero section. The key feature is the usage of React's global context to manage the state and functionalities across various components.

## Components

#### AppProvider (context.js)
- Manages the application's global state using React context.
- Provides context values and functions to child components.

#### Navbar (Navbar.jsx)
- Displays the navigation bar containing links to different sections.
- Utilizes the global context to handle submenu functionality.

#### Sidebar (Sidebar.jsx)
- Renders a sidebar with sublinks corresponding to different sections.
- Utilizes the global context to control the sidebar's display.

#### Submenu (Submenu.jsx)
- Shows a submenu when hovering over specific navigation items.
- Adjusts the layout dynamically based on the number of submenu items.
- Uses global context for managing submenu display and position.

#### Hero (Hero.jsx)
- Features a hero section with brief information and an image.
- Utilizes the global context to close the submenu when hovering over the hero section.

## Installation
To run the project locally, follow these steps:

- Clone the repository.
- Navigate to the project directory.
- Run npm install to install dependencies.
- Start the application using npm start.

## Usage
- Upon starting the application, the main UI components will be visible.
- Interact with the navigation bar links to trigger the display of submenus.
- Sidebar and hero sections provide additional content and interactions.

## Dependencies
- React
- PropTypes (for type checking)
- react-icons (for icon usage)