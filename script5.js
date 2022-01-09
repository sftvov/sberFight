let fences = [0, 2, 3, 3, 3];
function getResult(fences) {
	function startCycles(arr, sum = 0, counter = 0) {
		let levelSum = sum;
		for (let i = counter; i < arr.length; i++) {
			let currentSum = levelSum + arr[i];
			if (currentSum === arr.length - 1) matches++;
			startCycles(arr, currentSum, i + 1);
		}
	}
	fences = fences.map((x) => {
		return x < fences.length ? x : 0;
	});
	let matches = 0;
	startCycles(fences);
	matches;
	return Boolean(matches);
}

const result = getResult(fences);

result;
