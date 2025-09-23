let user = 0;
let computerPoints2 = 0;
function game(move){
    const options = ["rock","paper","scissors"];
    const computer = Math.floor(Math.random() * options.length);
    const computerValue = options[computer];
    const computerImage = document.getElementById("computerImage");
    computerImage.innerHTML = "";
    const userPoints = document.getElementById("userPoints");
    const computerPoints = document.getElementById("computerPoints");    
    if(computerValue === "rock"){
        const img = document.createElement("img");
        img.src = "images/rock.PNG";
        computerImage.appendChild(img);
    }
    if(computerValue === "paper"){
        const img = document.createElement("img");
        img.src = "images/paper.PNG";
        computerImage.appendChild(img);
    }
    if(computerValue === "scissors"){
        const img = document.createElement("img");
        img.src = "images/scissors.PNG";
        computerImage.appendChild(img);
    }
    if(computerValue === "rock" && move === "paper"){
        user = user + 1;
        userPoints.innerHTML = user;
    }
    if(computerValue === "scissors" && move === "paper"){
        computerPoints2 = computerPoints2 + 1;
        computerPoints.innerHTML = computerPoints2;
    }   
    if(computerValue === "scissors" && move === "rock"){
        user = user + 1;
        userPoints.innerHTML = user;
    }
    if(computerValue === "paper" && move === "scissors"){
        user = user + 1;
        userPoints.innerHTML = user;
    }    
    if(computerValue === "paper" && move === "rock"){
        computerPoints2 = computerPoints2 + 1;
        computerPoints.innerHTML = computerPoints2;
    }
    if(computerValue === "rock" && move === "scissors"){
        computerPoints2 = computerPoints2 + 1;
        computerPoints.innerHTML = computerPoints2;
    }
}