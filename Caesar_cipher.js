// Replaces a character at a specified index in a string
function replaceAt(string, index, replacement) {
    return `${string.substring(0, index)}${replacement}${string.substring(
        index + 1,
        string.length
    )}`;
}

// https://en.wikipedia.org/wiki/Caesar_cipher
function caesarCipher(text, key) {
    if (typeof text != "string" || typeof key != "number") return "";

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let myString = text.toLowerCase();

    for (let i = 0; i < myString.length; i++) {
        // It will replace the character only if CharAt(i) is a letter
        if (myString[i].match(/[a-z]/)) {
            // Generates the index of the character that will replace CharAt(i)
            let newIndex = alphabet.search(myString[i]) + key;

            // With this, it will work even using a key > 26 or < -26
            while (newIndex >= alphabet.length) {
                newIndex -= alphabet.length;
            }
            while (newIndex < 0) {
                newIndex += alphabet.length;
            }

            myString = replaceAt(myString, i, alphabet[newIndex]);
        }
    }

    return myString;
}

console.log(caesarCipher(`abcdefghijklmnopqrstuvwxyz ABC,.-!123`, -28));
console.log(caesarCipher(65, -28));
console.log(caesarCipher(`abcdefghijklmnopqrstuvwxyz ABC,.-!123`, "a"));
