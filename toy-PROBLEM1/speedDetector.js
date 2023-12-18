//promt the user to enter speed
const carSpeed=prompt("Enter car speed: ");
//convert the input from string to number
var newSpeed = parseInt(carSpeed);
let limitspeed= 70;
//calculate the demerit points
let dPoints = ((newSpeed - limitspeed) / 5);
//prink ok for speeds below 70
if (newSpeed<=70){

    console.log("OK");
// for demerit point above 12 return license suspended
}else if(dPoints>=12){

    console.log( "license suspended")
    //for demerit points between 9-12 return demerit points
}else{
    console.log(`points: ${dPoints}`)
    }

