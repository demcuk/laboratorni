let biography = document.querySelectorAll('.biography');

for (let biogr of biography) {
    biogr.insertAdjacentHTML("afterbegin", '<button class="red_button">[x]</button>');
    biogr.firstChild.onclick = () => biogr.remove();
}