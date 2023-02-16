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
function playRound(pSelection, cSelection){
    if(pSelection.toUpperCase() === 'ROCK'){
        if(cSelection === 'Rock'){
            return "Draw! Rock ties rock";
        } else if (cSelection === 'Paper'){
            return "You Lose! Paper beats rock"
        } else if(cSelection === 'Scissors'){
            return "You Win! Rock beats scissors"
        }
    }

    if(pSelection.toUpperCase() === 'PAPER'){
        if(cSelection === 'Rock'){
            return "You Win! Paper beats rock";
        } else if (cSelection === 'Paper'){
            return "Draw! Paper ties rock"
        } else if(cSelection === 'Scissors'){
            return "You Lose! Scissors beats paper"
        }
    }

    if(pSelection.toUpperCase() === 'SCISSORS'){
        if(cSelection === 'Rock'){
            return "You Lose! Rock beats scissors";
        } else if (cSelection === 'Paper'){
            return "You Win! Scissors beats paper"
        } else if(cSelection === 'Scissors'){
            return "Draw! Scissors tie scissors"
        }
    }
}

console.log(playRound("Rock", getComputerChoice()));


