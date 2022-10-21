function SpaseDelete(variable) {
    console.log("Текст з пробілами");
    console.log(variable + " Кількість символів з пробілами:" + variable.length);
    let gap = new RegExp("^ +| +$", "g");
    if (gap.test(variable)) {
        variable = variable.replace(gap, "");
    }
    console.log(" Текст без пробілів");
    console.log(variable + " Кількість символів без пробілів:" + variable.length);

}
let variable = "    `Lorem, ipsum dolor` ";
SpaseDelete(variable);