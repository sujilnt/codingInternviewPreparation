function solution(input){
	// [2,3,6] =>
	//[2,3,6,7]
	/*
	*  [ 2,3,6] =>
	*  i=0,  j=1 to =3
	*  i=1... n  ,
	*  leftchild(multiplies all the element to the left),
	*  rightChild(multiply all the elements to the right)
	*  then => push to an array (the product of left child and right child )
	*
	*
	* */
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
			}
			for(let j = i+1,lastItem = len;j<lastItem;j++){
				rightValue = (j=== lastItem) ? rightValue: input[j]*rightValue;
			}
			finalValue.push(leftValue*rightValue);
			leftValue=1;
			rightValue=1;
		}

	}
	console.log(input,"=>",finalValue);
	return finalValue;
}

const check = ()=>{

};
solution([3,2,1]);
solution([1, 2, 3, 4, 5]);
