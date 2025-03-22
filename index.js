function palindromeString() {
    var input = document.getElementById("userInput").value;
    var reversed = input.split("").reverse().join("");
    if(input===reversed) {
        document.getElementById("output").textContent = "It is a palindrome";
    } else {
        document.getElementById("output").textContent = "It is not a palindrome";
    }
}