document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const neWithdrawAmountStriwng = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    
    // step-3: get the current Withdraw total amount
    // for non-input: element other than input, text area) use innerText to get the text
    const newWithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = newWithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    newWithdrawTotalElement.innerText = currentWithdrawTotal;


    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText=currentBalanceTotal

     if(newWithdrawAmount>currentBalanceTotal){
        alert('no Money')
    }



    // clear the Withdraw value
    withdrawField.value = '';
    
})