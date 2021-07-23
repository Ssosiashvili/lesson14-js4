// 2.

function createCell (width, height) {
    let board = document.querySelector('#board');
    let div = document.createElement ('div'); //შეიქმნა დივ ელემენტი.
    div.classList.add('cell'); // დაემატა კლასიი cell.
    div.style.width = width + 'px'; // მიენიჭა სიგანე.
    div.style.height = height + 'px';//მიენიჭა სიგრძე.
    div.innerHTML ='0'; // ჩაიწერა რიცხვი 0.

    board.appendChild(div);
}

// 3.

function addCells (w, h) {
    board.style.width = w + 'px';
    board.style.height = h + 'px';

    let cellQuantity = (w / 100) * (h / 100);
    
    for (let i = 0; i < cellQuantity; i++) {
        createCell (100, 100);
    }
    addCounter ();
}

// 4. 

let startButton = document.querySelector('#start');

startButton.addEventListener('click', function() {
    addCells (600, 600);
});

// 5.

function addCounter () {
    let cells = document.querySelectorAll('.cell')
    for (let i = 0; i < cells.length; i ++) {
        cells[i].addEventListener ('click', function() {
        this.innerHTML = (this.innerHTML * 1) + 1;
        });
    }    
}