document.addEventListener('DOMContentLoaded', function() {

    // Example of JavaScript that could validate the contact form
    var contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser
        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        // Simple validation example
        if(name && email && message) {
            console.log('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
            // Here you can add what to do with the form data, like sending an AJAX request
            alert('Thank you for your message!');
        } else {
            alert('Please fill out all fields.');
        }
    });

});
