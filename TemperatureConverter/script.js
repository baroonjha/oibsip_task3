
function tempCal() {
const input = document.getElementById('input').value
console.log(input)
const typeSelected = document.getElementById('type')
const typeValue = typeSelected.options[typeSelected.selectedIndex].value 
  
  const cToF = (cel) =>{
        let fahrenhite = ((cel*9/5)+32)
        return fahrenhite
    }

    const fToC = (fah) =>{
        let celcius = ((fah-32)*5/9)
        return celcius
    }
    
    if(typeValue == 'cel'){
      document.getElementById("result").innerHTML = cToF(input) + " °Fahrenheit"
    } else {
      document.getElementById("result").innerHTML = fToC(input) + " °Celcius"
    }
}








