function calculate(exp){
    const expenses = document.getElementById(exp + '-cost');
    const expensesAmount = expenses.value;
    expenses.value = '';
    return expensesAmount;
}
document.getElementById('calculate-button').addEventListener('click', function(){
    const calculateFoodAmount = calculate('food');
    const calculateRentAmount = calculate('rent');
    const calculateClothAmount = calculate('cloth');

    const incomeInput = document.getElementById('income');
    const incomeAmount = incomeInput.value;

    if(incomeAmount == '' && calculateFoodAmount == '' && calculateRentAmount == '' && calculateClothAmount == ''){
        document.getElementById('requires-sms').style.display = 'block';
        document.getElementById('requires-sms1').style.display = 'block';
        document.getElementById('requires-sms2').style.display = 'block';
        document.getElementById('requires-sms3').style.display = 'block';
    }
    if(incomeAmount != '' && calculateFoodAmount == '' && calculateRentAmount == '' && calculateClothAmount == ''){
        document.getElementById('requires-sms').style.display = 'none';
        document.getElementById('requires-sms1').style.display = 'block';
        document.getElementById('requires-sms2').style.display = 'block';
        document.getElementById('requires-sms3').style.display = 'block';
    }
    else if(incomeAmount == '' && calculateFoodAmount != '' && calculateRentAmount == '' && calculateClothAmount == ''){
        document.getElementById('requires-sms').style.display = 'block';
        document.getElementById('requires-sms1').style.display = 'none';
        document.getElementById('requires-sms2').style.display = 'block';
        document.getElementById('requires-sms3').style.display = 'block';
    }
    
    else if(incomeAmount == '' && calculateFoodAmount == '' && calculateRentAmount == '' && calculateClothAmount != ''){
        document.getElementById('requires-sms').style.display = 'block';
        document.getElementById('requires-sms1').style.display = 'block';
        document.getElementById('requires-sms2').style.display = 'block';
        document.getElementById('requires-sms3').style.display = 'none';
    }
    else{
        // calculate total expenses
        const totalExpenses = document.getElementById('total-expenses');
        const calculateExpenses = parseFloat(calculateFoodAmount) + parseFloat(calculateRentAmount) + parseFloat(calculateClothAmount);
        totalExpenses.innerText = calculateExpenses;
        
        
        if(incomeAmount == ''){
            document.getElementById('requires-sms').style.display = 'block';
        } 
        else{
            // calculate balance
            const balance = document.getElementById('balance');
            const balanceAmount = parseFloat(incomeAmount) - calculateExpenses;
            if(incomeAmount < calculateExpenses){
                alert('Income in not enough');
            }
            else{
                balance.innerText = balanceAmount;
            }
            
        }

    }

})

document.getElementById('savings-button').addEventListener('click', function(){
    const balance = document.getElementById('balance');
    const incomeBalanceValue = document.getElementById('income');
    const incomeValue = incomeBalanceValue.value;
    const savingsInput = document.getElementById('savings');
    const savingsAmount = savingsInput.value;
    if(savingsAmount == ''){
        document.getElementById('requires-sms4').style.display = 'block';
    }
    else if(incomeValue == ''){
        alert('Please fillup the all previous required field')
    }
    else{
        const savingsBalance = document.getElementById('savings-amount');
        const savingsBalanceCalculate = parseFloat(incomeValue) * (parseFloat(savingsAmount)/100);
        if(savingsBalanceCalculate > balance.innerText){
            alert('Low Balance');
        }
        else{
            savingsBalance.innerText = savingsBalanceCalculate;
            incomeBalanceValue.value = '';
            savingsInput.value = '';
            const balanceValue = document.getElementById('balance').innerText;
            const remainingSavings = document.getElementById('remaining-savings-amount');
            const remainingValue = remainingSavings.innerText;
            const remainingSavingsValue = parseFloat(balanceValue) - parseFloat(savingsBalance.innerText);
            remainingSavings.innerText = remainingSavingsValue; 
        }
    }
})