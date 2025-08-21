document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary HTML elements
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const getStartedBtn = document.querySelector('.get-started-btn');
    const loginPopup = document.getElementById('login-popup');
    const registerPopup = document.getElementById('register-popup');
    const closeBtns = document.querySelectorAll('.close-btn');
    const newUserLink = document.getElementById('new-user-link');
    const isLoggedIn = false; // This is a placeholder. In a real app, you'd check a session or token.

    // Function to show a pop-up
    const showPopup = (popup) => {
        popup.style.display = 'flex';
    };

    // Function to hide all pop-ups
    const hidePopups = () => {
        loginPopup.style.display = 'none';
        registerPopup.style.display = 'none';
    };

    // Event listener for the "Login" button
    loginBtn.addEventListener('click', () => {
        showPopup(loginPopup);
    });

    // Event listener for the "Sign up" button
    signupBtn.addEventListener('click', () => {
        showPopup(registerPopup);
    });

    // Event listener for "Get Started" button
    getStartedBtn.addEventListener('click', () => {
        // Check if the user is logged in
        if (isLoggedIn) {
            // Redirect to the Experiences page if logged in
            window.location.href = '#Experiences'; // Change '#' to the actual URL
        } else {
            // Show the login pop-up if not logged in
            showPopup(loginPopup);
        }
    });

    // Event listeners to close the pop-ups
    closeBtns.forEach(btn => {
        btn.addEventListener('click', hidePopups);
    });

    // Event listener to switch from Login to Register
    newUserLink.addEventListener('click', (e) => {
        e.preventDefault();
        hidePopups();
        showPopup(registerPopup);
    });

    // Close pop-up when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === loginPopup || e.target === registerPopup) {
            hidePopups();
        }
    });
});