let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Fonction qui vient générer un nombre aléatoire de 0 à 9
const generateTarget = () => Math.floor(Math.random() * 10);

//Fonction qui détermine le plus proche du numéro à deviner
const compareGuesses = (nbUser, nbComputer, nbSecret) => {
    let difUser = Math.abs(nbUser - nbSecret)
    let difComputer = Math.abs(nbComputer - nbSecret);
    if(difUser < difComputer){
        return true;
    }else{
        return false;
    };
};

//Fonction qui permet d'augmenter le score du gagnant
const updateScore = (gagnant) => {
    if(gagnant === true){
        humanScore++;
    }else{
        computerScore++;
    }
};


