// Code your solution in this file!
let headquarters = 42;
function distanceFromHqInBlocks(distance) {
     return Math.abs(distance - headquarters);
}

let block = 264;
function distanceFromHqInFeet(feet_distance) {
   return block * distanceFromHqInBlocks(feet_distance);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * block;
}


function calculatesFarePrice(start, destination) {
     let distance = Math.abs(start - destination) * block;
     let fare = 0;
     if (distance < 400) {
        fare =  0;
     }
     else if (distance >= 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02;
     }
     else if (distance > 2000 && distance <= 2500) {
        fare = 25;
     }
     else if (distance > 2500) {
        fare = "cannot travel that far";
     }
     return fare;
    }