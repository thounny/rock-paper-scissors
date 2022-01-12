//jshint esversion: 6

//updates score
const game = ()=> { 
    let pScore = 0;
    let cScore = 0;

    //starts game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //computer options
        const computerOptions = [ 'rock', 'paper', 'scissors' ];
        //logs clicked option
        options.forEach(option=>{
            option.addEventListener('click', function(){
                //computer generates random number 0-2
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //timeout function
                setTimeout(() =>{
                //call compareHands
                compareHands(this.textContent, computerChoice);

                //update img
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    //winner check
    const compareHands  = (playerChoice, computerChoice) => {
        //update text
        const winner = document.querySelector('.winner');
        //check for draw match
        if(playerChoice === computerChoice) {
            winner.textContent = 'it is a tie';
            return;
        }
        //check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //calls all inner functions
    startGame();
    playMatch();
};

//start game function
game();