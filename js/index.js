// step 1 
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step 2
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step 3
    const deposittotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = deposittotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // step 5
    deposittotalElement.innerText = currentDepositTotal;

    // step 6
    const balancetotalElement = document.getElementById('dalance-total');
    const previousbalanceTotalString = balancetotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);


    const currentBalanceTotal = previousbalanceTotal + newDepositAmount;
    balancetotalElement.innerText = currentBalanceTotal;
    // step 7
    depositField.value = '';
})