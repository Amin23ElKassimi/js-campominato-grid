
// Funzione 01       funzione che genera un nuovo elemento quadrato
function generateSquare() {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        return squareElement;
}
// Funzione 03       funzione che genera un nuovo elemento quadrato
function generateSquare2() {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square2');
    return squareElement;
}
// Funzione 03       funzione che genera un nuovo elemento quadrato
function generateSquare3() {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square3');
    return squareElement;
}

// recupero il parent all'interno del quale voglio inserire i miei elementi
const mainContentEl = document.querySelector('main .main-content');

// Play button
const play = document.getElementById('play');


play.addEventListener('click', function(){
    // Difficolta
    const difficulty = parseInt(document.getElementById('inDiffic').value);

    if (difficulty === 1) {
        // # per 100 iterazioni...
        for (let i = 1 ; i <= 100 ; i++){
            const currentSquare = generateSquare();

            // # inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
            const squareContent = i;
        
            // # aggiungo il contenuto all'elemento che voglio popolare
            currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        
            // % quando clicco su una di queste celle
            currentSquare.addEventListener('click', function(){
                // % metto o tolgo la classe css clicked allo stesso elemento
                currentSquare.classList.toggle('clicked');
                // Allert del numero selezionato
                alert(squareContent);
            });
        
            // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
            mainContentEl.appendChild(currentSquare);
        }
    }
    if (difficulty === 2) {
        // # per 100 iterazioni...
        for (let i = 1 ; i <= 81 ; i++){
        // # creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
            const currentSquare = generateSquare2();

            // # inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
            const squareContent = i;
        
            // # aggiungo il contenuto all'elemento che voglio popolare
            currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        
            // % quando clicco su una di queste celle
            currentSquare.addEventListener('click', function(){
                // % metto o tolgo la classe css clicked allo stesso elemento
                currentSquare.classList.toggle('clicked');
                // Allert del numero selezionato
                alert(squareContent);
            });
        
            // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
            mainContentEl.appendChild(currentSquare);
        }
    }
    if (difficulty === 3) {
        // # per 100 iterazioni...
        for (let i = 1 ; i <= 49 ; i++){
        // # creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
            const currentSquare = generateSquare3();

            // # inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
            const squareContent = i;
        
            // # aggiungo il contenuto all'elemento che voglio popolare
            currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        
            // % quando clicco su una di queste celle
            currentSquare.addEventListener('click', function(){
                // % metto o tolgo la classe css clicked allo stesso elemento
                currentSquare.classList.toggle('clicked');
                // Allert del numero selezionato
                alert(squareContent);
            });
        
            // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
            mainContentEl.appendChild(currentSquare);
        }
    }
});