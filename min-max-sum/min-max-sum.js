function miniMaxSum(arr) {
    let maximum = 0;
    let minimum = 0;
    let mx = arr[0];
    let mn = arr[0];
    
    for(let i = 0; i<arr.length; i++){
        maximum +=arr[i];
        minimum +=arr[i];
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]>mx){
            mx = arr[i];
        }
        if(arr[i]<mn){
            mn = arr[i];
        }
    }

    let finalmax = maximum - mn;
    let finalmin = minimum - mx;
    console.log(finalmin,finalmax);

}

miniMaxSum([1,2,3,4,5]);