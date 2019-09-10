let computerResult = 0;
let playerResult = 0;

function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId) {
        if(argMoveId === 1) {
            return 'kamień';
        } else if (argMoveId === 2) {
            return 'papier';
        } else if (argMoveId === 3) {
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera to: ' + computerMove);

    let playerMove = getMoveName(playerInput);
    console.log('Gracz wpisał: ' + playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('Porównywane ruchy:', argComputerMove, argPlayerMove);
        if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
            printMessage('Ty wygrywasz!');
            playerResult += 1;
        } else if (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') {
            printMessage('Komputer wygrywa.');
            computerResult += 1;
        } else if (argComputerMove === 'kamień' && argPlayerMove === 'kamień') {
            printMessage('Remis.');
        
        } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
            printMessage('Ty wygrywasz!');
            playerResult += 1;
        } else if (argComputerMove === 'papier' && argPlayerMove === 'kamień') {
            printMessage('Komputer wygrywa.');
            computerResult += 1;
        } else if (argComputerMove === 'papier' && argPlayerMove === 'papier') {
            printMessage('Remis.');
        
        } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
            printMessage('Ty wygrywasz!');
            playerResult += 1;
        } else if (argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
            printMessage('Komputer wygrywa.');
            computerResult += 1;
        } else if (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce') {
            printMessage('Remis.');
        } 

        if (argPlayerMove === 'nieznany ruch') {
            printMessage('Odśwież stronę i wpisz albo: "1", albo: "2", albo: "3"');
        }
        printResult(computerResult, playerResult);        
    }
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});

// można tak
//document.getElementById('play-rock').addEventListener('click', playGame.bind(undefined, 1));
