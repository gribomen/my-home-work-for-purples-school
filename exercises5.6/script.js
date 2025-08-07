const promt = prompt("Сколько будет 7+ или - 15?");

switch(true){
    case promt == 22:
    case promt == -8:
    case promt == "Я не робот":
        console.log("Sucessfull");
        break;
    default:
        console.log("Вы робот");
        break;
}