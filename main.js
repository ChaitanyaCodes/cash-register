const billAmount = document.querySelector("#bill-amount");
const amountCheckBtn = document.querySelector(".check-amount-btn");
const cashContainer = document.querySelector(".cash-container");
const cashGiven = document.querySelector("#cash-given");
const checkChangeBtn = document.querySelector(".return-change-btn");
const messageArea = document.querySelector(".message-area");
const table = document.querySelector(".change-table");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const notes = [2000, 500, 100, 20, 10, 5, 1];


hideBlock(messageArea);
hideBlock(cashContainer);
hideBlock(table);

amountCheckBtn.addEventListener('click', function () {
    hideBlock(messageArea);
    hideBlock(cashContainer);
    hideBlock(table);
    if(billAmount.value > 0){
        showBlock(cashContainer);
    }else{
        showBlock(messageArea);
        showMessage("Bill amount cannot be less then 0 enter an valid amount.");
    }

});

checkChangeBtn.addEventListener('click', function () {
    if(cashGiven.value >= billAmount.value){
        showBlock(table);
        calculateChange(billAmount.value, cashGiven.value)
    }else{
        showBlock(messageArea);
        showMessage("The amount of cash given should be atleast equal to bill amount.");
    }
})


// functions

function showMessage(message){
    messageArea.innerText = message;
    return
};

function showBlock(block){
    block.style.display = "block";
    return
}

function hideBlock(block){
    block.style.display = "none";
    return
}

function calculateChange(billAmountValue, cashValue) {
    let returnCash = cashValue - billAmountValue;
    for(let index = 0; index < notes.length; index ++){
        let noOfParticularNotes = Math.trunc(returnCash / notes[index]);
        noOfNotes[index].innerText = noOfParticularNotes;
        returnCash %= notes[index];
    }
}