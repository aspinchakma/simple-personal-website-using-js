
function getInputNumber(idName) {
    const inputField = document.getElementById(idName);
    const inputValue = inputField.value;
    const inputNumber = parseFloat(inputValue);
    inputField.value = '';
    return inputNumber;
}

function depoAndWith(inputNumber, idName) {
    const recentMoney = document.getElementById(idName);
    const recentText = recentMoney.innerText;
    const numberOfMoney = parseFloat(recentText);
    recentMoney.innerText = numberOfMoney + inputNumber;
}

function getBankBalance(inputNumber, isOk) {
    const bankBalance = document.getElementById('balance-amount');
    const bankText = bankBalance.innerText;
    const bankTk = parseFloat(bankText);
    if (isOk === true) {
        bankBalance.innerText = bankTk + inputNumber;
    } else {
        bankBalance.innerText = bankTk - inputNumber;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    const inputNumber = getInputNumber('deposite-money');


    if (inputNumber > 0) {
        depoAndWith(inputNumber, 'depost-amount');

        getBankBalance(inputNumber, true);
    }


})



document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputNumber = getInputNumber('withdraw-field');
    const bankBalance = document.getElementById('balance-amount');
    const bankText = bankBalance.innerText;
    const bankTk = parseFloat(bankText);
    if (inputNumber > 0 && bankTk > inputNumber) {

        depoAndWith(inputNumber, 'withdraw-amount')

        getBankBalance(inputNumber, false);
    }

})