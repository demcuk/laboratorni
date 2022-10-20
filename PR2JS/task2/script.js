function time() {
    let time = new Date();
    setTimeout(function () {
        alert("Час оновився")
    }, 30000);
    chas.value = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    setTimeout('time()', 30000);
}
time()