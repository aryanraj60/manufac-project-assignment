# Agro Data Analysis with React, Mantine, and Tailwind CSS

This project visualizes agricultural data of India using React, Mantine, and Tailwind CSS. The application features two tables:

1. "Crop with Maximum Production in that Year" and "Crop with Minimum Production in that Year" by year.
2. "Average Yield of the Crop between 1950-2020" and "Average Cultivation Area of the Crop between 1950-2020" by crop name.

## Screenshots

### Table 1: Crop Production by Year

![Screenshot 2024-06-24 at 11 13 10 AM](https://github.com/aryanraj60/manufac-project-assignment/assets/72094124/bfbcb333-b23c-40fd-9a59-7adc2d2a08c2)


### Table 2: Average Yield and Cultivation Area by Crop

![Screenshot 2024-06-24 at 11 13 17 AM](https://github.com/aryanraj60/manufac-project-assignment/assets/72094124/3db7ee48-18e8-4c49-85e4-e03d74e5cff6)


## Setup

### Prerequisites

- Node.js
- yarn (Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aryanraj60/manufac-project-assignment.git
   
   cd manufac-project-assignment
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Install and configure Tailwind CSS:

   ```bash
   yarn add -D tailwindcss postcss autoprefixer
   yarn tailwindcss init -p
   ```

4. Configure `tailwind.config.js`:

   ```js
   // tailwind.config.js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. Add Tailwind directives to your CSS file (`src/index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Import the CSS file in your main JavaScript file (`src/index.js`):

   ```js
   import "./index.css";
   ```

7. Start the development server:
   ```bash
   yarn start
   ```

## Usage

- The first table displays the crop with maximum and minimum production for each year.
- The second table displays the average yield and average cultivation area for each crop between 1950 and 2020.
- Use the "Previous" and "Next" buttons to navigate through the data pages.

## Project Structure

- `src/App.js`: Contains the main logic for data processing and rendering the tables.
- `src/index.js`: Entry point of the application.
- `src/index.css`: Tailwind CSS configuration.

## Dependencies

- [React](https://reactjs.org/)
- [Mantine](https://mantine.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
