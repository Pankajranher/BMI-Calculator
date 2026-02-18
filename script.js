function calculateBMI(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("bmi-result");
    const result1 = document.getElementById("bmi-result1");
    
    if (height === "" || height <= 0){
        result.innerText = "Please enter valid height ";
        result.style.color="red";
    }
    else if (weight === "" || weight <= 0) {
        result.innerText = "Please enter valid weight";
        result.style.color="red";
    }
    else{

        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        result1.innerText = "Your body mass index is " +bmi;
            
        result.style.color="green";
        if (bmi < 18.5) { 
            result.innerText = "Underweight";
        }
        else if (bmi < 25) {
            result.innerText = "Normal";
        } 
        else if (bmi < 30) {
            result.innerText = "Overweight";
        } 
        else {
            result.innerText = "Obese";
        }


        }
    } 