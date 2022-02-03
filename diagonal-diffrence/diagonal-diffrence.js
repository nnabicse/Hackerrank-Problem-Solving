function diagonalDifference(arr) {
    let pdiag = 0;
    let sdiag = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(i==j){
                pdiag +=arr[i][j]; 
                
                if(i == arr.length - j - 1){
                    sdiag += arr[i][j];   
                }

            }
            else if(i == arr.length - j - 1){
                sdiag += arr[i][j];
            }
            else{
                continue;
            }
            
        }
    }
    return Math.abs(pdiag-sdiag);
        
}

const array = [[11,2,4],[4,5,6],[10,8,-12]];
console.log(diagonalDifference(array));
