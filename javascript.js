let add7 = (num) => num + 7;

console.log(add7(8))

let multiply = (num1, num2) => num1 * num2;

console.log(multiply(1, 10));

function capitalize(string) {
    let slice = string.slice(0, 1);
    let slice2 = slice.toUpperCase(0);
let slice3 = string.slice(1);
return slice2 + slice3;

}

console.log(capitalize("a Huevo"));

let lastLetter = (last) => last.slice(-1);

console.log(lastLetter("Edgar"));