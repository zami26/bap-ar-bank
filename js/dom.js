function getInputFildValu(inputId) {
    const getInputValu = document.getElementById(inputId);
    const inputValuStrig = getInputValu.value;
    const inputValu = parseFloat(inputValuStrig);
    getInputValu.value = '';
    return inputValu;
}

function getOutputFild(outputId) {
    const getOutputValu = document.getElementById(outputId);
    const outputValuString = getOutputValu.innerText;
    const outputValu = parseFloat(outputValuString);
    return outputValu;
}

function setElement(inputId, element) {
    const setElement = document.getElementById(inputId);
    setElement.innerText = element;
}

document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = getInputFildValu('deposite-fild');
    const deposite = getOutputFild('deposite-total');
    const depositeTotal = deposite + depositeField;
    setElement('deposite-total', depositeTotal);

    const getBalanceTotal = getOutputFild('total');
    const totalBalance = getBalanceTotal + depositeField;
    setElement('total', totalBalance);
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = getInputFildValu('withdraw-fild');
    const withdraw = getOutputFild('withdraw-total');
    const withdrawTotal = withdraw + withdrawField;
    setElement('withdraw-total', withdrawTotal);

    const getBalanceTotal = getOutputFild('total');
    const totalBalance = getBalanceTotal - withdrawField;
    setElement('total', totalBalance);
})