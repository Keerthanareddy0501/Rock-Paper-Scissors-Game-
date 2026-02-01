let usesrscore = 0;
let compsc = 0;
let msg = document.querySelector("#msg");
let yourscore = document.querySelector("#yourscore")
let computerscore = document.querySelector("#computerscore")

const options = document.querySelectorAll(".option");
console.log(options)
const getchoice = ()=>{
    const choice = ["rock","paper","scissors"]
    const index = Math.floor(Math.random()*3);
    return choice[index];
}
const draw = ()=>{
    msg.innerText="Match is Draw"
    msg.style.backgroundColor = "yellow";

}
const showwinner=(userwin,userchoice,comchoice)=>{
    if (userwin){
        msg.innerText = `You won the match. ${userchoice} beats ${comchoice} `
        usesrscore+=1;
        yourscore.innerText = usesrscore;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `Buddy won the match. ${comchoice} beats ${userchoice}`
        compsc+=1;
        computerscore.innerText = compsc;
        msg.style.backgroundColor = "red";
    }
}
const playgame=(userchoice)=>{
    const comchoice = getchoice();
    console.log(userchoice,comchoice);
    if (userchoice == comchoice){
        draw();
    }
    else{
        let userwin = true
        if(userchoice === "rock"){
            userwin = comchoice==="paper"?false:true;
        }
        else if(userchoice === "paper"){
            userwin = comchoice==="scissors"?false:true;
        }
        else{
            userwin = comchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
}



options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userchoice = option.getAttribute("id")
        playgame(userchoice)
    })
})