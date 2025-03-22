# myScheme UI

myScheme UI is a React.js application designed to provide users with an intuitive interface for searching and filtering various schemes. The application features a sidebar for filter options, a search bar for quick access to schemes, and individual scheme cards that display detailed information.

## Project Structure

```
myscheme-ui
├── public
│   ├── index.html        # Main HTML file for the React application
│   └── styles.css       # CSS styles for the application
├── src
│   ├── components
│   │   ├── FilterSidebar.js  # Sidebar component for filters
│   │   ├── SchemeCard.js     # Component to display individual scheme information
│   │   └── SearchBar.js      # Component for the search input and buttons
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point of the React application
│   └── script.js            # JavaScript functions for handling sidebar and filter toggling
├── package.json             # Configuration file for npm
└── README.md                # Documentation for the project
```

## Getting Started

To get started with the myScheme UI application, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd myscheme-ui
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the **search bar** to quickly find schemes by entering keywords.
- Click on the **Filters** button in the sidebar to expand or collapse filter options.
- Select various filters to narrow down the list of schemes displayed.
- Each scheme card provides detailed information, including the title, ministry, description, and relevant tags.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.