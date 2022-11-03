let imagesList = [
    {
        url: "https://quto.ru/service-imgs/5c/52/d0/46/5c52d0464dcf0.jpeg",
        title: "Lamborgini Hurakan",
        description: "Supercar",
    },
    {
        url: "data:image/jpeg;base64,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",
        title: "Mercedes GLE",
        description: "Jeep",
    },
    {
        url: "https://resizer.mail.ru/p/a6d121b0-7117-5eb6-af13-63db4f0e8de3/AQABDZy5j-4k0pNRJ0jCNxpHdRuqse4kc-HN9--PrluJWqcly37GL-egMGo2eeffQRmZOqDs8q7La6eKrp88VHE1jqk.jpg",
        title: "BMW",
        description: "passenger car",
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