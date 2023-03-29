
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

btn.addEventListener("click",BMICalculator)

function BMICalculator(e){
    e.preventDefault();

    let height = document.querySelector(".height").value
    let weight = document.querySelector(".weight").value

    if(height === "" || isNaN(height)){
        return(result.innerHTML = "Please enter your valid height");
    }else if(weight === "" || isNaN(weight)){
        return(result.innerHTML = "Please enter your valid weight");
    }else{
        height = height / 100;
        let bmi = (weight / Math.pow(height,2)).toFixed(2)
        if(bmi < 18.5){
            result.innerHTML = `Underweight: <span>${bmi}</span>`
        }else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = `Normal: <span>${bmi}</span>`
        }else if(bmi >= 25.0 && bmi < 29.9){
            result.innerHTML = `Overweight: <span>${bmi}</span>`
        }else{
            result.innerHTML = `Obese: <span>${bmi}</span>`
        }
    }
    reset.style.display = "block"
}
function resetting(e){
    document.querySelector("form").reset();
    reset.style.display = "none"
    result.style.display = "none"
}
reset.addEventListener("click",resetting)