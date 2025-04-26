const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultMsg = document.getElementById("result-container");
const result = document.getElementById("result");



const checkInput = (str) => {
    const regex = /[^0-9a-z]/gi;
    const word = str.replace(regex, "").toLowerCase();
    const reverseWord = word.split("").reverse().join("");
    if(word !== reverseWord){
        result.innerText = `${str} is not Palindrome`;
        return;
    }else if(textInput.value === ""){
        alert("Please input a value");
        return;
    }else{
        result.innerText = `${str} is Palindrome`;
        return;
    }
};


checkBtn.addEventListener("click", () => {
    checkInput(textInput.value);
    resultMsg.style.display = "block";
})