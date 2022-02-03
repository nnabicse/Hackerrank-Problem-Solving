function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negetive = 0;
    let zero = 0;
    
    for( let i=0; i<arr.length; i++){
        if(arr[i] <0){
            negetive +=1;
        }
        else if(arr[i]>0){
            positive +=1;
        }
        else{
            zero +=1;
        }
        
    }
    negetive = (negetive/arr.length).toFixed(6);
    positive = (positive/arr.length).toFixed(6);
    zero = (zero/arr.length).toFixed(6);
    
    return (console.log(positive), console.log(negetive), console.log(zero));

}

plusMinus([-4,3,-9,0,4,1]);