const startBtn = document.querySelector(".start-puzzle"),
inputField = document.querySelector("input");


let correctword = "turd";

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please input a word");
    if(userWord !== correctword) return alert(`Nope!, ${userWord} is not the word!`);
    alert("You got it!");
}

startBtn.addEventListener("click",()=>{
    const contentDiv = document.querySelector(".content");
    const welcomeDiv = document.querySelector(".welcome");

    contentDiv.style.display = "block";
    welcomeDiv.remove();
} );

inputField.addEventListener("keydown", (key) => {
    if(key.key === "Enter"){
        checkWord();
    }
})