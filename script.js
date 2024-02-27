
document.getElementById('emailForm').addEventListener('submit', function(event) {
    
    event.preventDefault();
  
    const emailInput = document.getElementById('emailInput').value;
  

    const errorMessage = document.getElementById('errorMessage');
  

    if (!emailInput.trim()) {
      
      errorMessage.textContent = 'Please enter an email address';
    } else {
      
      errorMessage.textContent = '';
  
      
      alert('Email address submitted: ' + emailInput);
      
  });
  