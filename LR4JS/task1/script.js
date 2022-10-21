let nomber = prompt("Введіть номер телефону")

function testPhoneNumber(nomber) {

    if (!nomber.length)
        var phoneTemplate = new RegExp("/(\+38)?\(?0(39|67|68|96|50|66|95|99|63|93|91|92|94)\)?\-?(\d{3})\-?(\d{2})\-?(\d{2})/g");
    nomber = nomber.replace(phoneTemplate, "");
    if (nomber != "")
        alert("Номер телефону задано неправильно");
}

testPhoneNumber(nomber)



