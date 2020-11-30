function sendMail(contactForm) {
    emailjs.send("service_l6fpzjm", "kliliansmith", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.informationsummary.value
    })
    .then(
        function(response){
            alert("Great! We'll get in touch shortly!");
            window.location.replace("/");
        },
        function(error) {
            alert("Whoops! Something went wrong, please try again later.");
        }
    )
    return false;
}