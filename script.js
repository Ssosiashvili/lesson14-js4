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
        checkSum();
        });
    }    
}

//6*. შექმენით ფუნქცია checkSum, რომელიც ყოველი .cell ღილაკზე დაჭერის შემდეგ შეამოწმებს არის თუ არა ყველა 
//უჯრაში ჩაწერილ ციფრთა ჯამი 25 ის ტოლი და თუ 25 ის ტოლია წაშლის ყველა .cell ელემენტს და გამოიძახებს  
//addCells ფუნქციას ახლიდან რათა ახლიდან დაგენერირდეს უჯრები.

function checkSum () {
    let sum = 0;
    let cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++ ) {
        sum += cells[i].innerHTML * 1
    }
    if (sum == 25) {
        document.querySelector('#board').innerHTML = '';
        addCells(600, 600);
    }
    
}
