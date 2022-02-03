function timeConversion(s){
    let hours = s.slice(0,2);
    let mpart = s.slice(2,8);
    let lpart = s.slice(8,10);

    let newTime = "";

    if(lpart=="AM"){
        if(hours == "12"){
            newTime += "00";
        }
        else{
            newTime += hours; 
        }
    }
    else if(lpart=="PM"){
        if(hours == "12"){
            newTime += "12";
        }
        else{
            newTime += parseInt(hours) + 12;
        }
    }

    newTime = newTime + mpart;
    return newTime;

}

console.log(timeConversion("09:00:00PM"));