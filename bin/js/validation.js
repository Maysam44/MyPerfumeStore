document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', event => {
        event.preventDefault(); // Prevent default form submission
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            alert('All fields are required!');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes
        alert('Thank you for contacting us!');
        form.reset(); // Clear the form
    });
});
