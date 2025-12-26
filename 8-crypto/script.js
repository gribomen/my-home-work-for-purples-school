const password = "password";

const crypto_password = crypto(password);
console.log(crypto_password);
console.log(check(crypto_password,password));


function crypto(password){
    const crypto_password = [...password.slice(0,Math.round((password.length - 1)/2)).split("").reverse(),
        ...password.slice(Math.round((password.length - 1)/2)).split("").reverse()];
    const change = crypto_password[crypto_password.length-1];
    crypto_password[crypto_password.length-1] = crypto_password[0];
    crypto_password[0] = change;
    return crypto_password.join("");
}

function check(crypto_password,password){
    const new_crypto_password = crypto_password.split("");
    const change = new_crypto_password[new_crypto_password.length-1];
    new_crypto_password[new_crypto_password.length-1] = new_crypto_password[0];
    new_crypto_password[0] = change;
    crypto_password = new_crypto_password.join("");
    const decrypted_password = [...crypto_password.slice(0,Math.round((crypto_password.length - 1)/2)).split("").reverse(),
        ...crypto_password.slice(Math.round((crypto_password.length - 1)/2)).split("").reverse()];
    crypto_password = decrypted_password.join("");
    if(crypto_password === password){
        return true;
    } else{
        return false;
    }
}