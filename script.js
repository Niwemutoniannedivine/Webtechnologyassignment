function validateForm(event) {
    event.preventDefault();
    
    var form = event.target;
    var inputs = form.getElementsByTagName('input');
    
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      
      if (input.hasAttribute('required') && input.value === '') {
        alert('Please fill in all the required fields.');
        return;
      }
    }
    
    form.submit();
  }