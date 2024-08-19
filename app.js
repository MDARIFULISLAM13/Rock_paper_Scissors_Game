let userscore = 0;
let compscore = 0;

const choises = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

choises.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       
        play(userchoice);
    })
});
const play = (userchoice) => {
    const compchoice = gencompchoice();
   
    finalresulr(compchoice, userchoice);
}
const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return option[index];

}

const finalresulr = (compchoice, userchoice) => {
    console.log(userchoice, "  ", compchoice);
    if (userchoice === compchoice) {
        msg.innerText = "Game Draw.Play Again";
      
    }
    else {
        let win = true;
        if (userchoice === "rock") {
            if (compchoice === "paper") {
                win = false;
            }
        }
        if (userchoice === "paper") {
            if (compchoice === "scissors") {
                win = false;
            }
        }
        if (userchoice === "scissors") {
            if (compchoice === "rock") {
                win = false;
            }
        }
         if (win) {
          
             userscore++;
               msg.innerText = "You Win This Round!";
        }
        else {

             compscore++;
               msg.innerText = "You lose This Round!";
        }
       
    }
    updatescore(userscore,compscore);
}
updatescore = (userscore,compscore) => {
    
    let preuser = document.querySelector("#user");
    let precomp = document.querySelector("#Computer");
    
    preuser.innerText = userscore;
    precomp.innerText = compscore;



}