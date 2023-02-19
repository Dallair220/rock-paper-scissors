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
        } else if(cSelection === 'Scissors'){
            result = "You Win! Rock beats scissors"
        }
    }

    if(pSelection.toUpperCase() === 'PAPER'){
        if(cSelection === 'Rock'){
            result = "You Win! Paper beats rock";
        } else if (cSelection === 'Paper'){
            result = "Draw! Paper ties rock"
        } else if(cSelection === 'Scissors'){
            result = "You Lose! Paper loses to scissors"
        }
    }

    if(pSelection.toUpperCase() === 'SCISSORS'){
        if(cSelection === 'Rock'){
            result = "You Lose! Scissors loses to rock";
        } else if (cSelection === 'Paper'){
            result = "You Win! Scissors beats paper"
        } else if(cSelection === 'Scissors'){
            result = "Draw! Scissors tie scissors"
        }
    }

        return result;
}

function add(event){
        const clickedButton = event.target.textContent;
        printResults(clickedButton);
}

function printResults(clickedButton){
    const resultsContainer = document.querySelector('.results');
    const para = document.createElement('p');
    
    if(round < 5){
        round++;
        para.textContent = playRound(clickedButton);
    } else {
        para.textContent = "Already finished! Reload the site to play another 5 rounds.";
    }

    resultsContainer.append(para);
}

const buttons = document.querySelectorAll('.select');
buttons.forEach(button => button.addEventListener('click', add));

var round = 0;