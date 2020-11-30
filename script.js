import { caesarCipher } from "./src/Caesar_cipher.js";

const caesarForm = document.querySelector("#caesarForm");
const caesarResult = document.querySelector("#caesarResult");

function eventHandler(event) {
    event.preventDefault();

    caesarResult.innerHTML = caesarCipher(
        caesarTextInput.value,
        Number(caesarKeyInput.value)
    );
}

caesarForm.addEventListener("submit", eventHandler);
