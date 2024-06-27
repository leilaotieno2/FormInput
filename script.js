document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const age = parseInt(document.getElementById('age').value);
    const responseDiv = document.getElementById('response');
    
    let responseMessage;
    
    if (age < 13) {
        responseMessage = `Hello ${username}, you are a child.`;
    } else if (age >= 13 && age < 20) {
        responseMessage = `Hello ${username}, you are a teenager.`;
    } else if (age >= 20 && age < 60) {
        responseMessage = `Hello ${username}, you are an adult.`;
    } else {
        responseMessage = `Hello ${username}, you are a senior.`;
    }
    
    responseDiv.textContent = responseMessage;
});
