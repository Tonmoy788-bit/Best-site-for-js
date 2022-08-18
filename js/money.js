// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step 7
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a valid number');
        return;
    }

    // step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

    // step 5
    const balancetotalElement = document.getElementById('dalance-total');
    const previousbalanceTotalString = balancetotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);
    if (newWithdrawAmount > previousbalanceTotal) {
        alert('YOU DO NOT HAVE MUCH MONEY');
        return;
    }
    //ste4
    const currentwithdrawTotal = previouswithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentwithdrawTotal;

    //step 6
    const currentBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    balancetotalElement.innerText = currentBalanceTotal;

})