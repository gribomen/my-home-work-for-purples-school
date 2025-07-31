let contribution = 12000;
let procent = 7;
let years = 2
const result = contribution * (1 + procent/100/12 ) ** (years * 12);
const remains = result - 13500;
if(remains > 0){
    console.log(`Вася сможет купить машину и у него ещё останется ${remains} $.`);
}else{
    console.log(`Вася не сможет купить машину, так как ему будет не хватать ${remains * -1}`);
}