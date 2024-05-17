function sendContactMail(){
    let information = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        company_name: document.getElementById("company_name").value,
        phone_number: document.getElementById("phone_number").value,
        email_address: document.getElementById("email_address").value,
        qci: document.getElementById("qci").value
    };

    const serviceID = "service_dmkbjwf";
    const templateID = "template_rvm7wrh";

        emailjs.send(serviceID, templateID, information)
    .then(
        res => {
            document.getElementById("first_name").value = "";
            document.getElementById("last_name").value = "";
            document.getElementById("company_name").value = "";
            document.getElementById("phone_number").value = "";
            document.getElementById("email_address").value = "";
            document.getElementById("qci").value = "";
            console.log(res);
            alert("Information sent successfully!")
        }
    )
    .catch((err) => console.log(err));
}