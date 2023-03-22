// Code your solution in this file!et
function distanceFromHqInBlocks(p1){
    let distance = p1-42 
    return Math.abs(distance); } 



function distanceFromHqInFeet(p2) {
    let long = distanceFromHqInBlocks(p2)* 264;
    return long;

}

function distanceTravelledInFeet(d1,d2) {
    let travelled = (d1-d2)*264
    return Math.abs(travelled);
}
distanceTravelledInFeet();

function calculatesFarePrice(d1,d2) {
    if (distanceTravelledInFeet(d1,d2) <= 400){
        return 0;}
    else if ((distanceTravelledInFeet(d1,d2)>400)&&(distanceTravelledInFeet(d1,d2)<=2000)) {
        return (distanceTravelledInFeet(d1,d2)-400)*0.02;}
        else if ((distanceTravelledInFeet(d1,d2)>2000)&&(distanceTravelledInFeet(d1,d2)<=2500)) {
            // return (1600 *0.02) +  (distanceTravelledInFeet(d1,d2)-2000)*25
            return 25;
        }
    else if(distanceTravelledInFeet(d1,d2)>2500){
        return "cannot travel that far"
    } 
}

