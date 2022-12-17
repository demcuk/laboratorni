

task();

function task() {

    let input = document.querySelector('#task input[name=anyText]');

    document.documentElement.addEventListener('mouseup', func);

    function func() {
        let content = window.getSelection().toString();
        input.value = content;
    }
}
