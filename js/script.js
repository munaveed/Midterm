function calculateFactorial() {
    let input = document.getElementById("factorialInput").value;
    let number = parseInt(input);
    let result = 1;

    if (isNaN(number) || number < 0) {
        document.getElementById("resultScreen").innerHTML = "Please enter a valid positive number.";
        return;
    }

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    document.getElementById("resultScreen").innerHTML = `${number}! = ${result}`;
}
