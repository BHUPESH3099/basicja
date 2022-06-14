const arr = [ 2, 3, 4, 5, 6 ];
const n = arr.length;
function CountingEvenOdd(arr, arr_size)
{
	let even_count = 0;
	let odd_count = 0;

	// loop to read all the values in the array
	for (let i = 0; i < arr_size; i++) {
		
		// checking if a number is completely
		// divisible by 2
		if (arr[i] % 2 == 1)
			odd_count++;
		else
			even_count++;
	}

	console.log("Number of even elements = " + even_count)
	console.log("Number of odd elements = " + odd_count)
}



	
	
	CountingEvenOdd(arr, n)


