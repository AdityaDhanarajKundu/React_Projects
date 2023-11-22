# Cocktail DB using React-Router-DOM

This project is a beginner-level application built using React, React Router, and the Context API. It allows users to search for their favorite cocktails, view details of individual cocktails, and explore a collection of cocktails available in the database.

<a href="https://react-router-cocktail.netlify.app/">Preview</a>

## Features

- #### Search Cocktails : 
Search for cocktails using keywords.
- #### View Cocktail Details : 
Explore details of individual cocktails, including their name, category, ingredients, and instructions on how to prepare them.
- #### Error Handling :
Handles routes that don't exist or cocktails that aren't found.

## Usage

- Home : Lists cocktails available in the database
- Search : Allows users to search for cocktails by name.
- About : Provides information about the project.
- Cocktail Details : Displays detailed information about a specific cocktail

## Folder Structure

|-- public
|-- src
    |-- components
        |-- Cocktail.jsx
        |-- Loading.jsx
        |-- Navbar.jsx
        |-- ...
    |-- context
        |-- AppContext.js
        |-- AppProvider.js
        |-- ...
    |-- pages
        |-- About.jsx
        |-- Error.jsx
        |-- Home.jsx
        |-- SingleCocktail.jsx
        |-- ...
    |-- App.js
    |-- index.js
|-- package.json
|-- README.md

## Dependencies 

- React: JavaScript library for building user interfaces, providing a component-based architecture.

- React Router DOM: Provides routing capabilities in React applications, enabling navigation between different components/pages.

- Context API: Part of React for managing global state in applications, facilitating data sharing between components without prop drilling.

- TheCocktailDB API: An external API used to fetch and display cocktail data, providing information about various cocktails and their details. 

## Contributing

Contributions are welcome! Feel free to fork the repository and create pull requests for new features, bug fixes, or enhancements.