const copyField = document.querySelector(".copy-field");
const copyButton = document.querySelector(".copy-button");

function createPassword() {
    const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$";
    let password = "";
    for (let i = 1; i < 21; i++) {
        if (i % 7 == 0)
            password += "-";
        else
            password += keys[Math.floor(Math.random() * keys.length / 2 + Math.random() * keys.length / 2)];
    }
    let passwordHolder = document.getElementById("password-field");
    passwordHolder.innerHTML = password;
    // passwordHolder.setAttribute("class", "generated-field");
    const generatedField = document.querySelector(".password-field");
    generatedField.classList.add("generated-field");


    copyField.classList.remove("hidden");
    copyButton.src = "img/copy.png";

}

function copyToClipboard() {

    const copyText = document.getElementById("password-field");

    const fakeStorage = document.createElement("textarea");
    fakeStorage.value = copyText.innerHTML;
    copyText.appendChild(fakeStorage);

    fakeStorage.select();
    fakeStorage.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    copyText.removeChild(fakeStorage);

    copyButton.src = "img/tick.png";
    copyField.title = "Copied!";

    // alert("Password Copied to Clipboard!");
}