document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // step-3: get the current deposit total amount
    // for non-input: element other than input, text area) use innerText to get the text
    const newDepositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = newDepositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    newDepositTotalElement.innerText = currentDepositTotal;



    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText=currentBalanceTotal

    // clear the deposit value
    depositField.value = '';
    
})