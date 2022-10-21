let variable = prompt("Введіть рік від 1900 до 2099")

function Yer(variable) {

    if (!variable.length)
        var phoneTemplate = new RegExp("(([1]{1}[9]{1}[0-9]{2})){1}|(([2]{1}[0]{1}[0-9]{2})){1}$");
    variable = variable.replace(phoneTemplate, "");
    if (variable != "")
        alert("Рік не попав до діапазону");
}

Yer(variable)
alert("Рік який був введений: " + variable);