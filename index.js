const answer = "EGO"; // Define the correct answer here

document.getElementById("checkButton").addEventListener("click", function () {
    const userAnswer = document.getElementById("answerInput").value.toUpperCase();
    const resultElement = document.getElementById("result");

    if (userAnswer === answer) {
        resultElement.textContent = "Correct! The answer is: " + answer;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again.";
        resultElement.style.color = "red";
    }

    resultElement.style.display = "block";
});

// Customize the puzzle text here
document.getElementById("puzzle").textContent = "I am a three-letter word...";
