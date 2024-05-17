function sendQuoteMail(){
    let info = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        companyname: document.getElementById("companyname").value,
        phonenumber: document.getElementById("phonenumber").value,
        email: document.getElementById("email").value,
        pickuplocation: document.getElementById("pickuplocation").value,
        pickuptime: document.getElementById("pickuptime").value,
        deliverylocation: document.getElementById("deliverylocation").value,
        deliverytime: document.getElementById("deliverytime").value,
        numpieces: document.getElementById("numpieces").value,
        packingtype: document.getElementById("packingtype").value,
        totalweight: document.getElementById("totalweight").value,
        dimensions: document.getElementById("dimensions").value,
        commodity: document.getElementById("commodity").value
    };

    const serviceID = "service_dmkbjwf";
    const templateID = "template_2062dc8";

        emailjs.send(serviceID, templateID, info)
    .then(
        res => {
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("companyname").value = "";
            document.getElementById("phonenumber").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pickuplocation").value = "";
            document.getElementById("pickuptime").value = "";
            document.getElementById("deliverylocation").value = "";
            document.getElementById("deliverytime").value = "";
            document.getElementById("numpieces").value = "";
            document.getElementById("packingtype").value = "";
            document.getElementById("totalweight").value = "";
            document.getElementById("dimensions").value = "";
            document.getElementById("commodity").value = "";
            console.log(res);
            alert("Information sent successfully!")
        }
    )
    .catch((err) => console.log(err));
}