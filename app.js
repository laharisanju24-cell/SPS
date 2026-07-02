// let userScore = 0; 
// let compScore = 0; 

// const choices = document.querySelectorAll(".choice"); 
// const msg = document.querySelector("#msg"); 

// const genComputerChoice = () => { 
    
//     const options = ["stone", "paper", "scissors"]; 
//     const randIdx = Math.floor(Math.random() * 3); 
//     return options[randIdx]; 
// }; 

// const drawGame = () => { 
//     console.log("Game was draw."); 
//     msg.innerText = "Game was Draw. Play again.";
//     msg.style.backgroundColor = "coral";
//     msg.style.color = "white";
// }; 

// const showWinner = (userWin) => { 
//     if (userWin) { 
//         userScore++; 
//         msg.innerText = "You win.";
//         msg.style.backgroundColor = "green";
//         msg.style.color = "white";
//     } else { 
//         compScore++; 
//         msg.innerText = "You Lose.";
//         msg.style.backgroundColor = "red";
//         msg.style.color = "white";
//     } 
// }; 

// const playGame = (choiceId) => { 
    
//     const userChoice = choiceId.toLowerCase(); 
//     console.log("user choice =", userChoice); 
    
//     const compChoice = genComputerChoice(); 
//     console.log("comp choice =", compChoice); 
    
//     if (userChoice === compChoice) { 
//         drawGame(); 
//     } else { 
//         let userWin = true; 
        
//         if (userChoice === "stone") { 
//             userWin = compChoice === "paper" ? false : true; 
//         } else if (userChoice === "paper") { 
//             userWin = compChoice === "scissors" ? false : true; 
//         } else if (userChoice === "scissors") { 
//             userWin = compChoice === "stone" ? false : true; 
//         } 
//         showWinner(userWin); 
//     } 
// }; 

// choices.forEach((choice) => { 
//     choice.addEventListener("click", () => { 
//         const choiceId = choice.getAttribute("id"); 
//         console.log("choice was clicked", choiceId); 
//         playGame(choiceId); 
//     }); 
// });
let userScore = 0; 
let compScore = 0; 

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 

const genComputerChoice = () => { 
    const options = ["stone", "paper", "scissors"]; 
    const randIdx = Math.floor(Math.random() * 3); 
    return options[randIdx]; 
}; 

// Fixed: Added userChoice parameter so the function can read the value
const drawGame = (userChoice) => { 
    console.log("Game was draw."); 
    msg.innerText = `Game was a Draw! Both chose ${userChoice}.`;
    msg.style.backgroundColor = "coral";
    msg.style.color = "white";
}; 

const showWinner = (userWin) => { 
    if (userWin) { 
        userScore++; 
        userScorePara.innerText = userScore; 
        msg.innerText = "You win.";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else { 
        compScore++; 
        compScorePara.innerText = compScore; 
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    } 
}; 

const playGame = (choiceId) => { 
    const userChoice = choiceId.toLowerCase(); 
    console.log("user choice =", userChoice); 
    
    const compChoice = genComputerChoice(); 
    console.log("comp choice =", compChoice); 
    
    if (userChoice === compChoice) { 
        drawGame(userChoice); 
    } else { 
        let userWin = true; 
        
        if (userChoice === "stone") { 
            userWin = compChoice === "paper" ? false : true; 
        } else if (userChoice === "paper") { 
            userWin = compChoice === "scissors" ? false : true; 
        } else if (userChoice === "scissors") { 
            userWin = compChoice === "stone" ? false : true; 
        } 
        showWinner(userWin); 
    } 
}; 

choices.forEach((choice) => { 
    choice.addEventListener("click", () => { 
        const choiceId = choice.getAttribute("id"); 
        console.log("choice was clicked", choiceId); 
        playGame(choiceId); 
    }); 
});

// let userScore = 0; 
// let compScore = 0; 

// const choices = document.querySelectorAll(".choice"); 
// const msg = document.querySelector("#msg"); 
// const userScorePara = document.querySelector("#user-score"); 
// const compScorePara = document.querySelector("#comp-score"); 
// const themeToggleBtn = document.querySelector("#theme-toggle");

// const genComputerChoice = () => { 
//     const options = ["stone", "paper", "scissors"]; 
//     const randIdx = Math.floor(Math.random() * 3); 
//     return options[randIdx]; 
// }; 

// const drawGame = (userChoice) => { 
//     console.log("Game was draw."); 
//     msg.innerText = `It's a draw! Both chose ${userChoice}.`;
//     msg.style.backgroundColor = "peachpuff";
//     msg.style.color = "coral";
// }; 

// const showWinner = (userWin, userChoice, compChoice) => { 
//     if (userWin) { 
//         userScore++; 
//         userScorePara.innerText = userScore; 
//         msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
//         msg.style.backgroundColor = "green";
//         msg.style.color = "white";
//     } else { 
//         compScore++; 
//         compScorePara.innerText = compScore; 
//         msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
//         msg.style.backgroundColor = "red";
//         msg.style.color = "white";
//     } 
// }; 

// const playGame = (choiceId) => { 
//     const userChoice = choiceId.toLowerCase(); 
//     console.log("user choice =", userChoice); 
    
//     const compChoice = genComputerChoice(); 
//     console.log("comp choice =", compChoice); 
    
//     if (userChoice === compChoice) { 
//         drawGame(userChoice); 
//     } else { 
//         let userWin = true; 
        
//         if (userChoice === "stone") { 
//             userWin = compChoice === "paper" ? false : true; 
//         } else if (userChoice === "paper") { 
//             userWin = compChoice === "scissors" ? false : true; 
//         } else if (userChoice === "scissors") { 
//             userWin = compChoice === "stone" ? false : true; 
//         } 
//         showWinner(userWin, userChoice, compChoice); 
//     } 
// }; 

// choices.forEach((choice) => { 
//     choice.addEventListener("click", () => { 
//         const choiceId = choice.getAttribute("id"); 
//         console.log("choice was clicked", choiceId); 
//         playGame(choiceId); 
//     }); 
// });

// themeToggleBtn.addEventListener("click", () => {
//     const currentTheme = document.documentElement.getAttribute("data-theme");
//     let newTheme = "light";

//     if (currentTheme !== "dark") {
//         newTheme = "dark";
//         themeToggleBtn.innerText = "☀️ Light Mode";
//     } else {
//         themeToggleBtn.innerText = "🌙 Dark Mode";
//     }

//     document.documentElement.setAttribute("data-theme", newTheme);
// });

