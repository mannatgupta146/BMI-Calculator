# BMI Calculator

A simple and responsive BMI (Body Mass Index) Calculator web application built using HTML, CSS, and JavaScript. It allows users to input their gender, age, height (in feet and inches), and weight (in kg), and calculates their BMI along with the corresponding BMI category (Underweight, Normal Weight, Overweight, or Obese).

## Screenshot
![BMI Calculator Interface](screenshot.png)  
*The basic interface of the BMI Calculator*

## How it works
1. **User Input**: The user enters their gender, age, height (in feet and inches), and weight (in kilograms) through the form provided.
2. **BMI Calculation**: The application calculates BMI using the formula:  
   \[
   BMI = \frac{{\text{{weight}}}}{{(\text{{height}} \times \text{{height}})}}
   \]
3. **BMI Category**: Based on the calculated BMI, the app categorizes the result as:
   - **Underweight**: BMI < 18.5
   - **Normal Weight**: 18.5 ≤ BMI < 24.9
   - **Overweight**: 25 ≤ BMI < 29.9
   - **Obese**: BMI ≥ 30
4. **Result Display**: The BMI value and corresponding category are displayed on the screen for the user to view.

## Features
- **User-friendly Interface**: Simple and intuitive design for ease of use.
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes (desktop, tablet, and mobile).
- **BMI Calculation**: Accurate BMI computation based on user inputs (height and weight).
- **BMI Categories**: Results classified into Underweight, Normal, Overweight, and Obese.
- **Mobile-optimized**: Fully optimized for small screen devices, offering an exceptional experience across all devices.
- **Interactive Animations**: Smooth animations that enhance user interaction.

## Technologies Used
- **HTML5**: Used for structuring the web page.
- **CSS3**: For styling, including animations and responsiveness.
- **JavaScript**: For DOM manipulation and BMI calculation.
- **Responsive Design**: Ensured that the app looks good on all screen sizes, from mobile to desktop.

## Future Enhancements
- **Save BMI History**: Enable users to save and track their BMI over time.
- **Additional Metrics**: Add other health-related calculations like BMR (Basal Metabolic Rate) or body fat percentage.
- **User Authentication**: Implement user login so individuals can store personal data securely.
- **Improved UI/UX**: Continue enhancing the design with more advanced UI elements and animations.
- **Unit Converter**: Include an option to convert weight and height units (e.g., pounds to kilograms, inches to centimeters).

## Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request with your improvements or bug fixes.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes.
4. Commit your changes: `git commit -m 'Add new feature'`.
5. Push to the branch: `git push origin feature-branch`.
6. Create a pull request.
---
Be fit, be safe!