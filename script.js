// Simple interactive handling for the appointment form submission
document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Retrieve input values if needed
            const fullName = appointmentForm.querySelector('input[type="text"]').value;
            
            // Trigger feedback alert
            alert(`Thank you, ${fullName}! Your appointment request has been successfully submitted. We will contact you shortly to confirm.`);
            
            // Reset the form fields
            appointmentForm.reset();
        });
    }
});