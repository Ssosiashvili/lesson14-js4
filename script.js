// 1. 

function createCell (width, height) {
    let div = document.createElement ('div'); //შეიქმნა დივ ელემენტი.
    div.classList.add('cell'); // დაემატა კლასიი cell.
    div.style.width = width + 'px'; // მიენიჭა სიგანე.
    div.style.height = height + 'px';//მიენიჭა სიგრძე.
    div.innerText ='0'; // ჩაიწერა რიცხვი 0.
}

// 2.

function addCells (w, h) {
    let board = document.querySelector('#board');
    board.style.width = w + 'px';
    board.style.height = h + 'px';

    let calculate = w * h / width * height;

}