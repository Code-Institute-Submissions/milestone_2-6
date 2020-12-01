function sendMail(contactForm) {
    //submit contact form and send through emailjs using contact service (gmail) and template id name
    emailjs.send("service_l6fpzjm", "kliliansmith", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.informationsummary.value
    })
    //used to provide confirmation of a sent email and ultimately stop more than 1 email being sent at a time
    .then(
        function(response){
            //alerts the user that their email has successfully sent
            alert("Great! We'll get in touch shortly!");
            window.location.replace("/");
        },
        function(error) {
            //alerts the user that their email hasnt sent and to try again later
            alert("Whoops! Something went wrong, please try again later.");
        }
    )
    return false;
}