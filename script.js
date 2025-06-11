// Input from user
    const weight = prompt("Enter your weight in KG");
    const height = prompt("Enter your height in CM");
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    const output = document.getElementById("output");

    // Heading
    const heading = document.createElement("h1");
    heading.textContent = "BODY MASS INDEX";
    output.appendChild(heading);

    // BMI result
    const result = document.createElement("p");
    result.textContent = `Your BMI value is ${bmi}`;
    output.appendChild(result);

    // BMI category
    const category = document.createElement("p");

    if (bmi < 18.5) {
      category.textContent = "You are Underweight.";
      category.classList.add("underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category.textContent = "You are Normal weight.";
      category.classList.add("normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
      category.textContent = "You are Overweight.";
      category.classList.add("overweight");
    } else {
      category.textContent = "You are Obese.";
      category.classList.add("obese");
    }

    output.appendChild(category);