
function calculateBMI(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value)/100;

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height<= 0){
        alert("Please enter a valid number");
        return;
    }
    const bmi = weight/(height*height);

    let category = "";
    let imagePath = "";

    if (bmi < 18.5){
        category = "underweight";
    } else 
    if (bmi >= 18.5 && bmi <24.9){
        category = "Normal Weight";
    }else if(bmi >= 25 && bmi <29.9){
        category = "Overweight";
    } else {
        category = "Obese";
    }
    const result = document.getElementById('result');
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are in category <strong>${category}</strong>.`
};
