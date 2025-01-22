document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseInt(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const resultElement = document.getElementById("result");

    resultElement.innerHTML = "";

    if (!gender || !age || !heightFeet || !heightInches || !weight) {
        resultElement.innerHTML = "<p style='color: red;'>Please fill out all fields correctly!</p>";
        return;
    }

    const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254; // Convert to meters
    const bmi = weight / (heightInMeters * heightInMeters); // BMI calculation

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultElement.innerHTML = `
        <p><strong>Your BMI:</strong> ${bmi.toFixed(2)}</p>
        <p><strong>Category:</strong> ${category}</p>
    `;

    resultElement.style.transition = "opacity 0.5s ease-in-out";
    resultElement.style.opacity = 1;
});
