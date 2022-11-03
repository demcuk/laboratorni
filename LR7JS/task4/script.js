let imagesList = [
    {
        url: "https://www.harbuz.info/wp-content/uploads/2018/04/ogirky.jpeg",
        title: "Огірок",
        description: "Без ГМО",
    },
    {
        url: "https://agrarii-razom.com.ua/sites/default/files/byr/morkva_zvichayna.jpg",
        title: "Морква",
        description: "З ГМО",
    },
    {
        url: "data:image/jpeg;base64,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",
        title: "Перець",
        description: "Домашній",
    },
];

function initPhotoRotator(identificator, list) {
    let i = 0;

    const rotator = document.getElementById(identificator);

    const headerRotator = document.createElement("div");
    const numberPhotoFromList = document.createElement("p");
    const image = document.createElement("img");

    const leftSide = document.createElement("div");
    const rightSide = document.createElement("div");

    const btnPrev = document.createElement("button");
    const btnNext = document.createElement("button");
    const titleParagraph = document.createElement("p");
    const descriptionParagraph = document.createElement("p");

    headerRotator.classList.add("container_picture");
    leftSide.classList.add("algin_items_center");
    rightSide.classList.add("algin_items_center");
    titleParagraph.classList.add("title");
    descriptionParagraph.classList.add("description");

    numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
    titleParagraph.textContent = list[0].title;
    descriptionParagraph.textContent = list[0].description;
    btnPrev.textContent = "Назад";
    btnNext.textContent = "Вперед";
    image.src = list[0].url;

    btnPrev.disabled = true;

    if (imagesList.length == 1 || imagesList.length == 0) btnNext.disabled = true;


    btnPrev.addEventListener("click", () => {
        btnNext.disabled = false;
        i--;

        if (i == 0) btnPrev.disabled = true;
        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    btnNext.addEventListener("click", () => {
        btnPrev.disabled = false;
        i++;
        if (i == list.length - 1) btnNext.disabled = true;

        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;

        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    leftSide.appendChild(btnPrev);
    rightSide.appendChild(btnNext);

    headerRotator.appendChild(numberPhotoFromList);
    headerRotator.appendChild(image);
    headerRotator.appendChild(titleParagraph);
    headerRotator.appendChild(descriptionParagraph);

    rotator.appendChild(leftSide);
    rotator.appendChild(headerRotator);
    rotator.appendChild(rightSide);
}

initPhotoRotator("rotator", imagesList);
