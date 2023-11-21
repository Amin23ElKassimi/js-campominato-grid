
// Funzione 01       funzione che genera un nuovo elemento quadrato
function generateSquare() {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        return squareElement;
}

// recupero il parent all'interno del quale voglio inserire i miei elementi
const mainContentEl = document.getElementById('play');

// Play button
const play = document.querySelector('button');

play.addEventListener('click', function(){
// # per 100 iterazioni...
for (let i = 1 ; i <= 100 ; i++){

    // # creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
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
});

