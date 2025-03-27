

let score = document.querySelector('.score')
let scorePlayer = document.querySelector('.score-player')
let scoreMachine = document.querySelector('.score-machine')
let scorePlayerInicial = 0
let scoreMachineInicial = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playUser = (playerChoise) => {

    playTheGame(playerChoise, playMachine());

}

const playMachine = (machineChoise) => {

    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]


}

const playTheGame = (player, machine) => {
    if (player === machine) {
        score.innerHTML = 'Empatou'
    } else if (
        (player === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (player === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (player === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        scorePlayerInicial++
        scorePlayer.innerHTML = scorePlayerInicial
        score.innerHTML = 'Você Ganhou'
    } else {
        scoreMachineInicial++
        scoreMachine.innerHTML = scoreMachineInicial
        score.innerHTML = 'Maquina Ganhou'
    }
}