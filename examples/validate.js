function validate() {
    var age, result;
    age = document.getElementById("age").value;
    if (isNaN(age) || age < 25) {
        result = "you are not legal";
    } else {
        result = "Input Valid!";
    }
    document.getElementById("result").innerText = result;
}