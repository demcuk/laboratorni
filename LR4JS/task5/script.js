function DeleteTegs(variable) {
    console.log("Запис");
    console.log(variable + " Кількість символів:" + variable.length);
    let gap = new RegExp("<p>|<br>|<font>|<hr>", "g");
    if (gap.test(variable)) {
        variable = variable.replace(gap, "");
    }
    console.log("Зміни");
    console.log(variable + " Кількість символів:" + variable.length);
}

let variable = "<p>Lorem ipsum dolor sit amet.<hr> <p>Lorem</p> ipsum dolor sit<br> amet consectetur adipisicing elit. Explicabo, beatae?</p>";

DeleteTegs(variable);