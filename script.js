function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// p = player; c = computer
function playRound(pSelection){
    cSelection = getComputerChoice();
    var result = "";

    if(pSelection.toUpperCase() === 'ROCK'){
        if(cSelection === 'Rock'){
            result = "Draw! Rock ties rock";
        } else if (cSelection === 'Paper'){
            result = "You Lose! Rock loses to paper"
            cScore++;
        } else if(cSelection === 'Scissors'){
            result = "You Win! Rock beats scissors"
            pScore++;
        }
    }

    if(pSelection.toUpperCase() === 'PAPER'){
        if(cSelection === 'Rock'){
            result = "You Win! Paper beats rock";
            pScore++;
        } else if (cSelection === 'Paper'){
            result = "Draw! Paper ties rock"
        } else if(cSelection === 'Scissors'){
            result = "You Lose! Paper loses to scissors"
            cScore++;
        }
    }

    if(pSelection.toUpperCase() === 'SCISSORS'){
        if(cSelection === 'Rock'){
            result = "You Lose! Scissors loses to rock";
            cScore++;
        } else if (cSelection === 'Paper'){
            result = "You Win! Scissors beats paper"
            pScore++;
        } else if(cSelection === 'Scissors'){
            result = "Draw! Scissors tie scissors"
        }
    }

        return result + ` || Current Score: Player = ${pScore} points - Computer = ${cScore}.`;
}

function add(event){
        const clickedButton = event.target.textContent;
        printResults(clickedButton);
}

function printResults(clickedButton){
    const resultsContainer = document.querySelector('.results');
    const para = document.createElement('p');
    play(para, clickedButton);
    resultsContainer.append(para);
}

function play(para, clickedButton){
    if(cScore < 5 && pScore < 5){
        para.textContent = playRound(clickedButton);
    }
    if(cScore === 5) {
        para.textContent = "You Lost :( Reload the site to play another round.";
    } else if (pScore === 5){
        para.textContent = "You Won! <3"
    }
}

const buttons = document.querySelectorAll('.select');
buttons.forEach(button => button.addEventListener('click', add));

var cScore = 0;
var pScore = 0;