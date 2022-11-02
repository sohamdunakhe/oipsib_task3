const calculateTemp =()=>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp =temp_diff.options[temSelected.selectedindex].value;
    const celToFal =(cel) =>{
        let fahrenheit =Math.round((cel*9/5)+32);
        return fahrenheit;

    }
    const fahToCel =(fahr)=>{
        let celcius=Math.round((fahr -32)*5/9);
        return celsius;
    }
    let results;
    if(valueTemp=='cel'){
        result =celTOFah(numberTemp);
        document.getElementById('resultcontainer').innerHTML=result+"F";

    }
    else{
        result = fahToCel(numerTemp);
        document.getElementById('resultcontainer').innerHTML=result+"C";
    }
}