// step-1 : add click event handles with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get the text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // verify email and password
    if(email === 'nazim@h.com' && password === 'nazim'){
        window.location.href = 'bank.html'
    }
    else{
        alert('you are mis')
    }
        
})