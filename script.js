var display = document.getElementsByName('display')[0];

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        var result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
