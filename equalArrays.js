function equalArrays (firstStringArray, secondStringArray){
    
    let firstAraySum = 0;
    let isDifferent = false;
    for (let i =0 ; i < firstStringArray.length; i++){
        firstStringArray[i] = Number(firstStringArray[i]);
        secondStringArray[i] = Number(secondStringArray[i]);
        if (firstStringArray[i]==secondStringArray[i]){
            firstAraySum += firstStringArray[i];
        }else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isDifferent = true;
            break;
        }
    }
    if (!isDifferent){
        console.log(`Arrays are identical. Sum: ${firstAraySum}`);
    }
}
equalArrays (['1','2','3','4','5'], ['1','2','4','4','5']);