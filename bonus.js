document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputString");
    const resultElement = document.getElementById("result");
    
    //Event listener for clicking "checkButton"
    document.getElementById("checkButton").addEventListener("click", function () {
        checkPalindrome();
    });

    //executes checkPalindrome without reloading the page
    document.getElementById("palindromeForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        checkPalindrome();
    });

    //event listener for the "Enter" key
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            checkPalindrome();
        }
    });

    function checkPalindrome() {
        const input = inputField.value;

        if (isPalindrome(input)) {
            resultElement.textContent = "YES";
        } else {
            resultElement.textContent = "NO";
        }
    }

    function isPalindrome(str) {
        //Remove spaces and convert to lowercase
        str = str.replace(/\s/g, "").toLowerCase();

        //Reverse the string and compare it with the original
        const reversed = str.split("").reverse().join("");
        return str === reversed;
    }
});
