function convertUnit(){
    let answer = document.getElementById('output');

    let tempInput = document.getElementById('input').value;

    
    let kelvin1 = document.getElementById('kelvin1');
    let fahrenheit1 = document.getElementById('fahrenheit1');
    let celcius1 = document.getElementById('celcius1');

    let kelvin2 = document.getElementById('kelvin2');
    let fahrenheit2 = document.getElementById('fahrenheit2');
    let celcius2 = document.getElementById('celcius2');

    if(kelvin1.checked && fahrenheit2.checked){
        answer.value = ( tempInput - 273 )*(9/5) + 32;
    }
    else if(kelvin1.checked && celcius2.checked){
        answer.value = tempInput - 273;
    }
    else if(fahrenheit1.checked && celcius2.checked){
        answer.value = (tempInput - 32)*(5/9);
    }
    else if(fahrenheit1.checked && kelvin2.checked){
        answer.value = (tempInput - 32)*(5/9) + 273;
    }
    else if(celcius1.checked && fahrenheit2.checked){
        answer.value = (tempInput)*(9/5) + 32;
    }
    else if(celcius1.checked && kelvin2.checked){
        answer.value = tempInput + 273;
    }
}