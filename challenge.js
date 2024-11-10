// Good Luck! You got this 💪🏾
// Write your code here.


function BMICalculator(weight,height){

    return  (weight / ((height / 100) ** 2));
    }
    
    
    let aliBMI= BMICalculator(70,180);
    console.log(aliBMI);
    
    let mohamedBMI =BMICalculator(90,174);
    console.log(mohamedBMI);
    
    
    console.log("mohamed's BMI is " + mohamedBMI.toFixed(0) + " which is greater than ali "+aliBMI.toFixed(0));
    
      