function createPassword() {
    var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$";
    var password = "";
    for(var i = 1; i < 21; i++) {
        if(i % 7 == 0)
            password += "-";
        else
            password += keys[Math.floor(Math.random() * keys.length / 2 + Math.random() * keys.length / 2)];
    }
    var passwordHolder = document.getElementById("password-field");
    passwordHolder.innerHTML = password;
    passwordHolder.setAttribute("class", "generated-field");
}
