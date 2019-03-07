function solution(input){
	// [2,3,6]
	let leftValue =1;
	let rightValue =1;
	let finalValue =[];
	for(let i = 0,len= input.length; i<len; i++){
		if(i===0){
			for(let j = i+1,lastItem= len;j<=lastItem;j++){
				rightValue = (j=== lastItem) ? rightValue: input[j]*rightValue;
			}
			finalValue.push(rightValue);
			rightValue=1;

		}else{
			for(let j = 0;j<=i;j++){
				leftValue = (j=== i) ? leftValue : input[j]*leftValue;
				console.log("leftvalue",leftValue,i,j)
			}
			for(let j = i+1,lastItem = len;j<lastItem;j++){
				rightValue = (j=== lastItem) ? rightValue: input[j]*rightValue;
			}
			finalValue.push(leftValue*rightValue);
			leftValue=1;
			rightValue=1;
		}

	}
	console.log(finalValue);
	return finalValue;
}
solution([3,2,1]);
solution([1, 2, 3, 4, 5]);
