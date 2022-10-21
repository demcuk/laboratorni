function checkLvivsNumber(Number) {

    let reg = new RegExp(/^(\(032\))?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/);
    document.write(Number);
    if (reg.test(Number)) {
        document.write(" Коректне введення");
    }
    else {
        document.write(" Не коректне")
    }
}
checkLvivsNumber("977-77-33");