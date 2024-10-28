let theDisplay = document.getElementsByClassName("inputNumbers")[0];

function appendToDisplay(inputValue) {
    theDisplay.value += inputValue;
}

function clearAll() {
    theDisplay.value = '';
}

function deleteOne() {
    theDisplay.value = theDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        theDisplay.value = eval(theDisplay.value);
    }
    catch (error) {
        theDisplay.value = "ERROR";
    }
}

document.addEventListener('keydown', (event) => {
    let theKey = event.key;

    if (/[0-9]/.test(theKey) || ['+', '-', '*', '/'].includes(theKey)) {
        appendToDisplay(theKey);
    }
    else if (theKey === 'Enter') {
        calculate();
    }
    else if (theKey === 'Backspace') {
        deleteOne();
    }
    else if (theKey === 'Delete') {
        clearAll();
    }
})