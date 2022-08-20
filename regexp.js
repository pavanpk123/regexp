let text = document.getElementById("p01").innerHTML;
const pattern = /e/;
document.getElementById("demo").innerHTML = pattern.test(text);