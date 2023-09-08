const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');


celsius.addEventListener('input', function(){
    fahrenheit.value = (((celsius.value * 9) / 5) + 32)
})

fahrenheit.addEventListener('input', function(){
    celsius.value = ((fahrenheit.value - 32) * 5) / 9;
})