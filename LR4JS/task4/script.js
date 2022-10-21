function DeleteComments(comments) {
    let reg = new RegExp("<!--(.*?)-->", "g");
    console.log("Перед " + comments);
    if (reg.test(comments)) {
        comments = comments.replace(reg, "");
    }

    console.log("Після " + comments);
}

let comments = '<!-- основна частина сторінки --> <div class="coment">...</div><!-- основна частина сторінки --> <div class="comentar">...</div>"';
DeleteComments(comments);