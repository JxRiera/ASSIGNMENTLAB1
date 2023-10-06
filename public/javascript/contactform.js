/* Part of the form code found on the YT video (name in the ejs file) */
function submitForm(event) {
    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    /* I have nowhere to send it yet? */

    window.location.href = "/";
    alert("Your information has been submitted, we will get back to you as soon as possible.");
}
