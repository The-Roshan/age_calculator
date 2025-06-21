# 🧮 Age Calculator

## Overview
The Age Calculator is a user-friendly, web-based application created by Roshan Kumar Prajapati. Built with HTML, CSS, and JavaScript, it allows users to calculate their age by entering their birth date (day, month, year). The calculator features a clean interface, input validation, a dynamic animated background rendered on a canvas, and buttons for calculating and resetting inputs. It is optimized for both desktop and mobile devices, providing an engaging and practical experience.

## Features
- **Input Fields** 📅:
  - Three input fields for Day (1–31), Month (1–12), and Year (1900–present) with placeholders and validation.
  - HTML5 attributes (`min`, `max`, `required`) ensure valid inputs.
- **Action Buttons** 🖱️:
  - **Calculate Age**: Triggers age calculation based on the entered birth date.
  - **Reset**: Clears input fields and result for a new calculation.
- **Result Display** 📜:
  - Shows the calculated age (e.g., years, months, days) in a dedicated result area.
- **Animated Background** ✨:
  - Canvas-based animation (`background`) for a dynamic visual effect (e.g., particles, gradients).
- **Responsive Design** 📱:
  - Optimized for various screen sizes using CSS media queries.
- **Minimalist Interface**:
  - Clean and intuitive layout with styled inputs, buttons, and result display.

## Tech Stack
- **HTML5**: Structure of the calculator, including input fields, buttons, and canvas.
- **CSS3**: Styling for layout, inputs, buttons, and responsiveness (`styles.css`).
- **JavaScript**: Logic for age calculation, input validation, and canvas animations (`script.js`, `hide.js`).
- **Canvas API**: Used for rendering the animated background.

## Project Structure
```
age-calculator/
├── index.html         # Main HTML file
├── styles.css        # CSS styles for layout and visuals
├── script.js         # JavaScript for age calculation and logic
├── hide.js           # JavaScript for canvas animation or additional functionality
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge) with Canvas and JavaScript support.
- A code editor (e.g., VS Code) for customization.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/age-calculator.git
cd age-calculator
```

### 2. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 3. Customize (Optional)
- Edit `styles.css` to modify colors, input styles, or button designs.
- Update `script.js` to enhance age calculation (e.g., add detailed output like months/days) or improve validation.
- Modify `hide.js` to adjust the canvas animation (e.g., change particle effects) or clarify its role.
- Update `index.html` to add new features like a date picker or additional outputs.

## Usage
1. **Enter Birth Date** 📅: Input your day (1–31), month (1–12), and year (1900–present) in the respective fields.
2. **Calculate Age** 🖱️: Click the "Calculate Age" button to display your age in the result area.
3. **Reset** 🔄: Click the "Reset" button to clear inputs and start over.
4. **Animated Background** ✨: Enjoy the dynamic canvas animation in the background.
5. **Responsive** 📱: Access the calculator on mobile or desktop for a consistent experience.

## Deployment
- **Static Hosting**:
  1. Upload `index.html`, `styles.css`, `script.js`, and `hide.js` to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/age-calculator`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **JavaScript Logic**:
  - `script.js` must implement age calculation (e.g., comparing birth date to current date) and input validation.
  - `hide.js` likely handles the canvas animation (e.g., particles, gradients); its exact purpose should be verified.
- **Styling**: The `styles.css` file should define styles for the container, inputs, buttons, result, and responsive layout.
- **Enhancements**: Consider adding detailed age output (e.g., years, months, days), error messages for invalid dates, or a date picker for easier input.
- **SEO**: Add meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility, e.g., "Age calculator by Roshan Kumar Prajapati".
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, and JavaScript for a practical and engaging tool.
- Inspired by user-friendly calculator designs with modern web animations.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- 📧 Email: roshanjsr5555@gmail.com
- 📞 Phone: +91 7061126213
- 🌐 GitHub: [The-Roshan](https://github.com/The-Roshan)
