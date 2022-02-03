function birthdayCakeCandles(candles) {
    let tallest = candles[0];
    for(let i=0;i<candles.length; i++){
        if(candles[i]>tallest){
            tallest = candles[i];
        }
    }
    
    let tallestCount = 0;
    
    for(let i=0; i<candles.length;i++){
        if(candles[i]==tallest){
            tallestCount +=1;
        }
    }
    
    return tallestCount;

}

console.log(birthdayCakeCandles([3,6,6,2,1,3]));