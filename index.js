const answer = "JDENANGELIS79"; // Define the correct answer here

document.getElementById("checkButton").addEventListener("click", function () {
    const userAnswer = document.getElementById("answerInput").value.toUpperCase();
    const resultElement = document.getElementById("result");

    if (userAnswer === answer) {
        resultElement.textContent = "https://dalu-my.sharepoint.com/:f:/g/personal/kn947171_dal_ca/EvXj8MxWyqdIvJEEp20khmYB6hK_ROixP_mVX8EEI5NIWw";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "मौत मौत मौत मौत मौत मौत मौत मौत मौत मौत मौत";
        resultElement.style.color = "red";
    }

    resultElement.style.display = "block";
});

// Customize the puzzle text here
document.getElementById("puzzle").textContent = "the person who posted the last comment on  August 24, 2013 at 12:00 am on dalonline website";
