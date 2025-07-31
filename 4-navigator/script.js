let position_latitude = 0;
let position_longitude = 0; 
let destination_latitude = 3;
let destination_longitude = 4;
const result_destination = Math.sqrt((position_latitude - destination_latitude)**2 + (destination_longitude-position_longitude)**2);
console.log(result_destination);