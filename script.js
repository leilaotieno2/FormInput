document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const age = parseInt(document.getElementById('age').value);
    const responseDiv = document.getElementById('response');
    
    let responseMessage;
    let encouragementMessage;
    
    if (age < 13) {
        responseMessage = `Hello ${username}, you are a child.`;
        encouragementMessage = `Keep dreaming big, ${username}! The world is full of possibilities.`;
    } else if (age >= 13 && age < 20) {
        responseMessage = `Hello ${username}, you are a teenager.`;
        encouragementMessage = `Stay curious and keep learning, ${username}! Great things are ahead.`;
    } else if (age >= 20 && age < 60) {
        responseMessage = `Hello ${username}, you are an adult.`;
        encouragementMessage = `Keep pushing forward, ${username}! Your hard work will pay off.`;
    } else {
        responseMessage = `Hello ${username}, you are a senior.`;
        encouragementMessage = `Your wisdom is invaluable, ${username}. Keep inspiring those around you.`;
    }
    
    responseDiv.textContent = responseMessage;
    alert(encouragementMessage);
});
